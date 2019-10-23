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
        this.initial   = false;

        this.id       = $( el ).data( 'id' );
        this.el       = el;
        this.dataEl   = $( el ).find( '.dpt-table-data' );
        this.filterEl = $( el ).find( '.dpt-table-filters' );
        this.searchEl = $( el ).find( '.dpt-table-search' );
        this.config   = window[ 'dptConfig_' + this.id ];

        this.endpoint = this.config.data;
        this.perPage  = this.config.per_page;

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
        this.templates.table         = dust.loadSource( ( window.dptTemplates && window.dptTemplates.table ) || require( '../../partials/dpt-table-inner.dust' ) );
        this.templates.pagination    = dust.loadSource( ( window.dptTemplates && window.dptTemplates.pagination ) || require( '../../partials/dpt-pagination.dust' ) );
        this.templates.filterWrapper = dust.loadSource( ( window.dptTemplates && window.dptTemplates.filterWrapper ) || require( '../../partials/dpt-filter-wrapper.dust' ) );
        this.templates.filterSelect  = dust.loadSource( ( window.dptTemplates && window.dptTemplates.filterSelect ) || require( '../../partials/dpt-filter-select.dust' ) );
        this.templates.filterCheckbox  = dust.loadSource( ( window.dptTemplates && window.dptTemplates.filterCheckbox ) || require( '../../partials/dpt-filter-checkbox.dust' ) );

        this.renderFilters();
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

                const handledColumns = [];

                for ( const [ key, value ] of Object.entries( renderData.columns ) ) {
                    handledColumns.push({
                        key: key,
                        value: value
                    });
                }

                renderData.columns = handledColumns;

                dust.render( this.templates.table, this.clone( renderData ), ( err, out ) => {
                    if ( err) {
                        console.err( err );
                    }
                    else {
                        $( this.dataEl ).html( out );
                    }
                });
            }).catch( error => {
                console.error( error );
            });
        } else {
            console.error( 'No DustPress.js present' );
        }
    }

    async renderFilters() {
        if ( ! this.initial ) {
            this.initFilters();
        }

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

            this.config.filters[ index ].options.map( ( option ) => {
                if ( option.key === this.filters[ filter.field ] ) {
                    option.active = true;
                }

                return option;
            });

            let template;

            switch ( filter.type ) {
                case 'select':
                    template = this.templates.filterSelect;
                    break;
                case 'checkbox':
                    template = this.templates.filterCheckbox;
                    break;
            }

            dust.render( template, this.clone( this.config.filters[ index ] ), ( err, out ) => {
                if ( err ) {
                    console.err( err );
                }
                else {
                    $( this.filterEl ).find( '#dpt-table-filter-' + filter.field ).html( out );
                }
            });
        }
    }

    initFilters() {
        this.initial = true;

        for ( const index in this.config.filters ) {
            const filter = this.config.filters[ index ];

            dust.render( this.templates.filterWrapper, filter, ( err, out ) => {
                $( this.filterEl ).append( out );
            });
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
