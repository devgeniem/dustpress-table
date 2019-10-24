// Require main style file here for concatenation.
import '../styles/main.scss';
import Table from './table';

const $    = window.jQuery;
const dust = window.dust;

class DustPressTable {

    /**
     * Constructor
     * @memberof DustPressTable
     */
    constructor() {
        this.findTables();

        this.addHelpers();

        // Initialize a jQuery callback stack
        const stack = {};

        // Create an object for publish-subscribe actions
        this.actions = ( action ) => {
            let callbacks;

            if ( ! stack[ action ]) {
                callbacks = jQuery.Callbacks();

                stack[ action ] = {
                    publish: callbacks.fire,
                    subscribe: callbacks.add,
                    unsubscribe: callbacks.remove
                };
            }

            return stack[ action ];
        };
    }

    /**
     * Find the DustPressTable tables from the document
     *
     * @memberof DustPressTable
     */
    findTables() {
        const tables = $( '.dpt-table' );

        this.tables = [];

        tables.each( ( index, table ) => {
            this.tables.push( new Table( table ) );
        });
    }

    addHelpers() {
        dust.helpers.get = ( chunk, context, bodies, params ) => {
            var obj = dust.helpers.tap( params.of, chunk, context );
            var key = params.key;
            return chunk.write( obj[ key ]);
        };
    }
}

$( document ).ready( function() {
    window.DustPressTable = new DustPressTable();
});
