import './pagination';
import Pagination from './pagination';
import Select from './select';

const $    = window.jQuery;
const dust = window.dust;

/**
 * Table instance
 *
 * @export
 * @class Table
 */
export default class Table {

    /**
     * Constructor
     * @param {*} el Element from which to create to table.
     * @memberof Table
     */
    constructor( el, plugin ) {
        this.templates = {};
        this.initial   = false;

        this.getPlugin = () => plugin;

        this.id       = $( el ).data( 'id' );
        this.el       = el;
        this.dataEl   = $( el ).find( '.dpt-table-data' );
        this.filterEl = $( el ).find( '.dpt-table-filters' );
        this.searchEl = $( el ).find( '.dpt-table-search' );
        this.config   = window[ 'dptConfig_' + this.id ];

        this.endpoint = this.config.data;
        this.perPage  = this.config.per_page;

        // Initialize a jQuery callback stack
        const stack = {};

        // Create an object for publish-subscribe actions
        this.actions = ( action ) => {
            let callbacks;

            if ( ! stack[ action ] ) {
                callbacks = jQuery.Callbacks();

                stack[ action ] = {
                    publish: callbacks.fire,
                    subscribe: callbacks.add,
                    unsubscribe: callbacks.remove
                };
            }

            return stack[ action ];
        }

        this.page = 1;

        // Default dust templates
        this.templates.table         = dust.loadSource( this.getTemplate( 'table' ) || require( '../../partials/dpt-table-inner.dust' ) );
        this.templates.pagination    = dust.loadSource( this.getTemplate( 'pagination' ) || require( '../../partials/dpt-pagination.dust' ) );
        this.templates.rowTemplate   = dust.loadSource( this.getTemplate( 'rowTemplate' ) || require( '../../partials/dpt-row-template.dust' ) );
        this.templates.filterSelect  = dust.loadSource( this.getTemplate( 'filterSelect' ) || require( '../../partials/dpt-filter-select.dust' ) );
        this.templates.filterWrapper = dust.loadSource( this.getTemplate( 'filterWrapper' ) || require( '../../partials/dpt-filter-wrapper.dust' ) );

        for ( const [ key, value ] of Object.entries( this.templates ) ) {
            this.renameDustTemplate( key, value );
        }

        // Initialize the filter objects with a proper type
        if ( this.config.filters !== null ) {
            console.log( this.config.filters );
            this.filters = this.config.filters.map( ( filter ) => {
                const initData = JSON.parse( JSON.stringify( filter ) );

                initData.parentTable = this;

                switch ( initData.type ) {
                    case 'select':
                    default:
                        return new Select( initData );
                }
            });

            this.renderFilters();
        }
        else {
            this.filters = [];
        }

        this.render();
        this.bindEvents();
    }

    /**
     * Add loading class to the main element
     *
     * @memberof Table
     */
    addLoader() {
        $( this.el ).addClass( 'dpt-table-loading' );
    }

    /**
     * Remove loading class from the main element
     *
     * @memberof Table
     */
    removeLoader() {
        $( this.el ).removeClass( 'dpt-table-loading' );
    }

    /**
     * Get possible template override
     *
     * @param {*} key Template key
     */
    getTemplate( key ) {
        if ( window.dptTemplates ) {
            if ( window.dptTemplates[ this.id ] ) {
                if ( window.dptTemplates[ this.id ][ key ] ) {
                    return window.dptTemplates[ this.id ][ key ];
                }
            }

            if ( window.dptTemplates.default ) {
                if ( window.dptTemplates.default[ key ] ) {
                    return window.dptTemplates.default[ key ];
                }
            }
        }

        return false;
    }

    /**
     * Rename a Dust template in the given dust instance
     * @param {string} newName New name for the template
     * @param {function} template The template function
     */
    renameDustTemplate( newName, template ) {
        const templateName = template.templateName;

        dust.cache[ newName ]              = dust.cache[ templateName ];
        dust.cache[ newName ].templateName = newName;

        delete dust.cache[ templateName ];
    }

    /**
     * Render the table.
     *
     * @param {*} args Arguments for the rendering.
     * @memberof Table
     */
    async render( args ) {
        const filterValues = {};

        this.addLoader();

        if ( this.filters.length > 0 ) {
            for ( const index in this.filters ) {
                const filter = this.filters[ index ];
                const value  = filter.getValue();

                if ( value ) {
                    filterValues[ filter.field ] = value;
                }
            }
        }

        const defaults = {
            page: this.page,
            perPage: this.perPage,
            filters: filterValues,
            search: this.search
        };

        const dpArgs = Object.assign( defaults, args );

        if ( typeof dp === 'function' ) {
            try {
                const data = await dp( this.endpoint, {
                    tidy: true,
                    args: dpArgs
                });

                const renderData = data.success[Object.keys( data.success )[0]];

                renderData.pagination = new Pagination( this.page, parseInt( renderData.total / this.perPage ) );

                const handledColumns = [];

                for ( const [ key, value ] of Object.entries( renderData.columns ) ) {
                    handledColumns.push({
                        key: key,
                        label: value.label,
                        class: value.class
                    });
                }

                if ( ! this.rowLoaded ) {
                    const rowTemplate = await this.getRowTemplate({
                        columns: handledColumns,
                        class: this.rowClass || null,
                        tableId: this.id,
                        selectable: this.selectable,
                        buttons: this.config.buttons
                    });

                    dust.loadSource( dust.compile( rowTemplate, this.id + 'Row' ) );

                    this.rowLoaded = true;
                }

                renderData.tableId    = this.id;
                renderData.columns    = handledColumns;
                renderData.buttons    = this.config.buttons;
                renderData.selectable = this.config.selectable;

                dust.render( this.templates.table, this.clone( renderData ), ( err, out ) => {
                    if ( err ) {
                        console.error( err );

                        this.removeLoader();
                    }
                    else {
                        $( this.dataEl ).html( out );

                        this.removeLoader();
                    }
                });
            } catch( error ) {
                console.error( error );

                this.removeLoader();
            }
        } else {
            console.error( 'No DustPress.js present' );

            this.removeLoader();
        }
    }

    getRowTemplate( data ) {
        return new Promise( ( resolve, reject ) => {
            dust.render( this.templates.rowTemplate, data, ( err, out ) => {
                if ( err ) {
                    reject( err );
                }

                resolve( out );
            });
        });
    }

    async renderFilters() {
        if ( ! this.initial ) {
            this.initFilters();
        }

        for ( const index in this.filters ) {
            const filter = this.filters[ index ];

            filter.render();
        }
    }

    initFilters() {
        this.initial = true;

        for ( const index in this.filters ) {
            const filter = this.filters[ index ];

            filter.initWrapper();
        }
    }

    clone( data ) {
        return JSON.parse( JSON.stringify( data ) );
    }

    bindEvents() {
        this.dataEl.on( 'click', 'a.paginate.clickable', ( e ) => {
            this.page = $( e.target ).data( 'page' );

            this.render();
        });

        this.searchEl.on( 'change', 'input', ( e ) => {
            const searchValue = $( e.target ).val();

            if ( searchValue.length > 1 ) {
                this.search = searchValue;

                this.render();
            }
        });
    }

    getFilterValues() {
        this.filterEl.find( 'select' ).each( ( index, filter ) => {
            const name  = $( filter ).attr( 'name' );

            const selectedEl = $( filter ).find( 'option:selected' );
            const value      = selectedEl.val();

            if ( value.length > 0 ) {
                this.filters[name] = value;
            }
        });

        const searchValue = this.searchEl.find( 'input' ).val();

        if ( searchValue.length > 1 ) {
            this.search = searchValue;
        }
    }
}
