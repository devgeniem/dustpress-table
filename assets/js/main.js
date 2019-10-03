// Require main style file here for concatenation.
import '../styles/main.scss';
import Table from './table';

require( './table.js' );

const $ = window.jQuery;

class DustPressTable {

    /**
     * Constructor
     * @memberof DustPressTable
     */
    constructor() {
        this.findTables();
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
}

$( document ).ready( function() {
    new DustPressTable();
});
