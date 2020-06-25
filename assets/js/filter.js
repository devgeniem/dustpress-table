import Table from './table';

const $    = window.jQuery;
const dust = window.dust;

/**
 * Filter instance
 *
 * @export
 * @class Filter
 */
export default class Filter {

    /**
     * Constructor
     * @param {*} args
     * @memberof Filter
     */
    constructor( args ) {

        // Create a pseudo private property to prevent a circular reference
        const parentTable = ( args.parentTable && args.parentTable instanceof Table ) ? args.parentTable : this.filterError( 'parent table is empty or not a Table' );

        this.getParent = () => parentTable;

        this.name  = args.name || this.filterError( 'filter name not defined' );
        this.field = args.field || this.filterError( 'filter field name not defined' );
        this.defaultToSingle = args.defaultToSingle || false;
        this.default = args.default || null;

        if ( typeof args.depends === 'string' ) {
            this.depends  = [ args.depends ];
            this.disabled = true;
        } else if ( Array.isArray( args.depends ) ) {
            this.depends  = args.depends;
            this.disabled = true;
        } else {
            this.disabled = false;
        }

        if ( typeof args.uses === 'string' ) {
            this.uses  = [ args.uses ];
        } else if ( Array.isArray( args.uses ) ) {
            this.uses  = args.uses;
        }

        // Handle options
        if ( typeof args.options !== 'string' ) {
            const handledOptions = [];

            for ( const [ key, value ] of Object.entries( args.options ) ) {
                handledOptions.push({
                    key: key,
                    value: value
                });
            }

            this.options = handledOptions;
        } else {
            this.endpoint = args.options;
            this.options = [];
        }

        for ( const dIndex in this.depends ) {
            const depend = this.depends[ dIndex ];

            this.getParent().actions(depend).subscribe(() => {
                this.resetValue();
                this.getParent().actions( this.field ).publish();
                this.options = [];
                this.render();
            });
        }

        for ( const uIndex in this.uses ) {
            const use = this.uses[ uIndex ];

            this.getParent().actions(use).subscribe(() => {
                this.resetValue();
                this.getParent().actions( this.field ).publish();
                this.options = [];
                this.render();
            });
        }
    }

    /**
     * Render a wrapper element for the filter
     *
     * @returns
     * @memberof Filter
     */
    initWrapper() {
        if ( this.initiated ) {
            return;
        }

        dust.render( this.getParent().templates.filterWrapper, this, ( err, out ) => {
            if ( err ) {
                this.filterError( 'filter rendering error: ' + err );
            }

            $( this.getParent().filterEl ).append( out );

            this.wrapperElement = $( this.getParent().filterEl ).find( '#dpt-table-filter-' + this.field );
        });
    }

    /**
     * A render function
     */
    async render() {
        if (this.endpoint || (this.depends && this.depends.length > 0) || (this.uses && this.uses.length > 0)) {
            await this.populateRemoteOptions();
        }

        dust.render( this.template, this.clone( this ), ( err, out ) => {
            if ( err ) {
                console.error( err );
            }
            else {
                $( this.wrapperElement ).html( out );

                this.element = this.getElement();
                this.bindEvents();

                const event = new CustomEvent( 'filterRendered', {
                    detail: this.element
                });

                window.dispatchEvent( event );

                if ( this.defaultToSingle && this.options.length === 1 ) {
                    this.setValue( this.options[0].key );

                    this.element.trigger( 'change' );
                }
            }
        });
    }

    /**
     * Throw a filter-related error
     *
     * @param {string} error The error string.
     * @memberof Filter
     */
    filterError( error ) {
        throw new Error( 'DustPress table error: ' + error );
    }

    /**
     * Populate the options from remote endpoint.
     *
     * @memberof Filter
     */
    async populateRemoteOptions() {
        const optionArgs = {
            tidy: true,
            args: {}
        };
        this.disabled = false;

        // Get the values of the filters that this filter depends in
        for (const dIndex in this.depends) {
            const filter = this.getParent().filters.reduce( ( carry, item ) => {
                if ( this.depends[ dIndex ] === item.field ) {
                    return item;
                }
                else {
                    return carry;
                }
            });

            if ( ! filter ) {
                this.disabled = true;
                return;
            }
            else {
                const value = filter.getValue();

                if ( ! value || value.length === 0 ) {
                    this.disabled = true;
                    return;
                }
                else {
                    optionArgs.args[ filter.field ] = value;
                }
            }
        }

        // Get the values of the filters that this filter uses
        for ( const uIndex in this.uses ) {
            const filter = this.getParent().filters.reduce( ( carry, item ) => {
                if ( this.uses[ uIndex ] === item.field ) {
                    return item;
                }
                else {
                    return carry;
                }
            });

            if ( ! filter ) {
                return;
            }

            const value = filter.getValue();

            if ( ! value || value.length === 0 ) {
                continue;
            }
            else {
                optionArgs.args[ filter.field ] = value;
            }
        }

        console.log(this.endpoint, optionArgs)

        let options = await dp(this.endpoint, optionArgs);

        this.options = [];

        options = options.success[Object.keys( options.success )[0]];

        for ( const [ key, value ] of Object.entries( options ) ) {
            this.options.push({
                key: key,
                value: value
            });
        }

        return Promise.resolve( true );
    }

    /**
     * Get the filter's current value. Can be overriden in the extending class.
     *
     * @memberof Filter
     */
    getValue() {
        return $( this.element ).val();
    }

    /**
     * Set the filter value
     *
     * @param {*} value The value to set.
     */
    setValue( value ) {
        $( this.element ).val( value );
    }

    /**
     * Set the filter value
     */
    resetValue() {
        $( this.element ).prop( 'selectedIndex', -1 );
    }

    bindEvents() {
        this.element.on( 'change', ( e ) => {
            clearTimeout( this.timeout );

            this.timeout = setTimeout( () => {
                this.getParent().actions( this.field ).publish();

                setTimeout( () => this.getParent().render(), 100 );
            }, 500 );
        });
    }

    /**
     * A deep clone function
     *
     * @param {object} data
     */
    clone( data ) {
        return JSON.parse( JSON.stringify( data ) );
    }
}
