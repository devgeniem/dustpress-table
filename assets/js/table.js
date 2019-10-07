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

        this.id = $( el ).attr( 'id' );
        this.el = el;
        this.dataEl = $( el ).find( '.dpt-table-data' );
        this.endpoint = $( el ).data( 'endpoint' );
        this.perPage = $( el ).data( 'perpage' );
        this.page = 1;

        // Dust templates
        this.templates.table      = dust.loadSource( require( '../../partials/dpt-table-inner.dust' ) );
        this.templates.pagination = dust.loadSource( require( '../../partials/dpt-pagination.dust' ) );

        this.render({ page: 1 });
        this.bindEvents();
    }

    /**
     * Render the table.
     *
     * @param {*} args Arguments for the rendering.
     * @memberof Table
     */
    render( args ) {
        const page = args.page || 1;

        if ( typeof dp === 'function' ) {
            dp( this.endpoint, {
                tidy: true,
                args: {
                    'page': page,
                    'perPage': this.perPage
                }
            }).then( data => {
                const renderData = data.success[Object.keys( data.success )[0]];

                console.log( renderData.total, this.perPage, parseInt( renderData.total / this.perPage ) );

                renderData.pagination = new Pagination( page, parseInt( renderData.total / this.perPage ) );

                dust.render( this.templates.table, renderData, ( err, out ) => {
                    $( this.dataEl ).html( out );
                });
            }).catch( error => {
                console.error( error );
            });
        } else {
            console.error( 'No DustPress.js present' );
        }
    }

    bindEvents() {
        this.dataEl.on( 'click', 'a.paginate.clickable', ( e ) => {
            const page = $( e.target ).data( 'page' );

            this.render({ page: page });
        });
    }
}
