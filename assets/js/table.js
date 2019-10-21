import './pagination';
import Pagination from './pagination';

const $    = window.jQuery;
const dust = window.dust;

/**
 *Table instance
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
    constructor( el ) {
        this.templates = {};

        this.id = $( el ).data( 'id' );
        this.el = el;
        this.dataEl = $( el ).find( '.dpt-table-data' );
        this.filterEl = $( el ).find( '.dpt-table-filters' );
        this.searchEl = $( el ).find( '.dpt-table-search' );
        this.config = window[ 'dptConfig_' + this.id ];

        this.endpoint = this.config.data;
        this.perPage = this.config.per_page;

        this.config.filters.map( ( filter ) => {
            if ( typeof filter.options !== 'string' ) {
                const handledOptions = [];

                for ( const [ key, value ] of Object.entries( filter.options ) ) {
                    handledOptions.push({
                        key: key,
                        value: value
                    });
                }

                filter.options = handledOptions;
            }
            else {
                filter.endpoint = filter.options;
                filter.options  = [];
            }

            return filter;
        });

        this.page = 1;
        this.filters = {};

        // Dust templates
        this.templates.table      = dust.loadSource( require( '../../partials/dpt-table-inner.dust' ) );
        this.templates.pagination = dust.loadSource( require( '../../partials/dpt-pagination.dust' ) );
        this.templates.filters    = dust.loadSource( require( '../../partials/dpt-filters.dust' ) );

        this.render();
        this.bindEvents();
    }

    /**
     * Render the table.
     *
     * @param {*} args Arguments for the rendering.
     * @memberof Table
     */
    async render( args ) {
        this.getFilterValues();

        const defaults = {
            page: this.page,
            perPage: this.perPage,
            filters: this.filters,
            search: this.search
        };

        const dpArgs = Object.assign( defaults, args );

        if ( typeof dp === 'function' ) {
            dp( this.endpoint, {
                tidy: true,
                args: dpArgs
            }).then( async data => {
                const renderData = data.success[Object.keys( data.success )[0]];

                renderData.pagination = new Pagination( this.page, parseInt( renderData.total / this.perPage ) );

                for ( const index in this.config.filters ) {
                    const filter = this.config.filters[ index ];

                    if ( typeof filter.endpoint !== 'undefined' ) {
                        const optionArgs = {
                            tidy: true
                        };

                        let disabled = false;

                        if ( filter.depends ) {
                            if ( typeof filter.depends === 'string' ) {
                                const dependValue = this.filterEl.find( 'select[name="' + filter.depends + '"]').find( 'option:selected' ).val();

                                if ( ! dependValue ) {
                                    disabled = true;
                                }
                                else {
                                    optionArgs[ filter.depends ] = dependValue;
                                }
                            }
                            else if ( typeof filter.depends === 'object' ) {
                                for ( const dIndex in filter.depends ) {
                                    const dependValue = this.filterEl.find( 'select[name="' + filter.depends[ dIndex ] + '"]').find( 'option:selected' ).val();

                                    if ( ! dependValue ) {
                                        disabled = true;
                                    }
                                    else {
                                        optionArgs[ filter.depends[ dIndex ] ] = dependValue;
                                    }
                                }
                            }
                        }

                        if ( disabled ) {
                            this.config.filters[ index ].disabled = true;
                        }
                        else {
                            let options = await dp( filter.endpoint, optionArgs );

                            options = options.success[Object.keys( options.success )[0]];

                            const handledOptions = [];

                            for ( const [ key, value ] of Object.entries( options ) ) {
                                handledOptions.push({
                                    key: key,
                                    value: value
                                });
                            }

                            this.config.filters[ index ].disabled = false;
                            this.config.filters[ index ].options  = handledOptions;
                        }
                    }
                }

                this.config.filters.map( ( filter ) => {
                    filter.options.map( ( option ) => {
                        if ( option.key === this.filters[ filter.field ] ) {
                            option.active = true;
                        }

                        return option;
                    });

                    return filter;
                });

                dust.render( this.templates.filters, this.clone( this.config.filters ), ( err, out ) => {
                    $( this.filterEl ).html( out );
                });

                const handledColumns = [];

                for ( const [ key, value ] of Object.entries( renderData.columns ) ) {
                    handledColumns.push({
                        key: key,
                        value: value
                    });
                }

                renderData.columns = handledColumns;

                dust.render( this.templates.table, this.clone( renderData ), ( err, out ) => {
                    $( this.dataEl ).html( out );
                });
            }).catch( error => {
                console.error( error );
            });
        } else {
            console.error( 'No DustPress.js present' );
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

        this.filterEl.on( 'change', 'select', () => {
            this.render();
        });

        this.searchEl.on( 'change', 'input', ( e ) => {
            const searchValue = $( e.target ).val();

            if ( searchValue.length > 1 ) {
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
