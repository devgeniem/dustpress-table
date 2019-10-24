import Filter from './filter';

const $    = window.jQuery;
const dust = window.dust;

export default class Select extends Filter {

    /**
     * Constructor
     *
     * @param {*} args
     */
    constructor( args ) {
        super( args );

        this.type = 'select';

        this.multi = args.multi || null;

        this.template = dust.loadSource( ( window.dptTemplates && window.dptTemplates.filterSelect ) || require( '../../partials/dpt-filter-select.dust' ) );
    }

    /**
     * Returns the select element
     */
    getElement() {
        return $( this.getParent().filterEl ).find( '#dpt-table-filter-' + this.field ).find( 'select' );
    }
}