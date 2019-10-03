const $ = window.jQuery;

export default class Table {
    constructor( el ) {
        this.id = $( el ).attr( 'id' );
        this.el = el;
        this.endpoint = $( el ).data( 'endpoint' );

        this.loadData();
    }

    loadData() {
        dp( '' )
    }
}
