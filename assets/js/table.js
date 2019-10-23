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

        // Initialize the filter objects with a proper type
        this.filters = this.config.filters.map( ( filter ) => {
            const initData = JSON.parse( JSON.stringify( filter ) );

            initData.parentTable = this;

            switch ( initData.type ) {
                case 'select':
                default:
                    return new Select( initData );
            }
        });

        this.page = 1;

        // Dust templates
        this.templates.table         = dust.loadSource( ( window.dptTemplates && window.dptTemplates.table ) || require( '../../partials/dpt-table-inner.dust' ) );
        this.templates.pagination    = dust.loadSource( ( window.dptTemplates && window.dptTemplates.pagination ) || require( '../../partials/dpt-pagination.dust' ) );
        this.templates.filterWrapper = dust.loadSource( ( window.dptTemplates && window.dptTemplates.filterWrapper ) || require( '../../partials/dpt-filter-wrapper.dust' ) );

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
        const filterValues = {};

        for ( const index in this.filters ) {
            const filter = this.filters[ index ];
            const value  = filter.getValue();

            if ( value ) {
                filterValues[ filter.field ] = value;
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
                    if ( err ) {
                        console.error( err );
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
