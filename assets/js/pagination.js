const { __ } = wp.i18n;

export default class Pagination {
    constructor( currentPage, totalPages ) {
        this.pages       = [];
        this.currentPage = currentPage;
        this.totalPages  = totalPages;

        this.generate();
    }

    generate() {
        const neighbours = 3;
        const visible    = 1 + ( 2 * neighbours );

        let prevPage   = this.currentPage - 1;
        let nextPage   = this.currentPage + 1;
        let hellipStart = '';
        let hellipEnd   = '';
        let onFirstPage = false;
        let onLastPage  = false;

        // On the first page.
        if ( this.currentPage === 1 ) {
            onFirstPage = true;
            const max = ( this.totalPages < visible ) ? this.totalPages : visible;

            for ( let i = 0; i < max; i++ ) {
                if ( ( i + 1 ) > this.totalPages ) {
                    hellipEnd = '';
                    break;
                }

                this.pages[ i ]      = {};
                this.pages[ i ].page = i + 1;

                if ( this.currentPage === this.pages[ i ].page ) {
                    this.pages[ i ].active = true;
                }
            }

        // On the last page
        } else if ( this.currentPage === this.totalPages ) {
            hellipEnd   = '';
            onLastPage = true;

            if ( this.totalPages <= visible ) {
                hellipStart = '';
                for ( let i = 0; i < this.totalPages; i++ ) {
                    this.pages[ i ]      = {};
                    this.pages[ i ].page = i + 1;

                    if ( this.currentPage === this.pages[ i ].page ) {
                        this.pages[ i ].active = true;
                    }
                }
            } else {
                const start = this.totalPages - visible + 1;

                for ( let i = start; i <= this.totalPages; i++ ) {
                    this.pages[ i ]      = {};
                    this.pages[ i ].page = i;

                    if ( this.currentPage === this.pages[ i ].page ) {
                        this.pages[ i ].active = true;
                    }
                }
            }

        // Any other page
        } else {
            let start = this.currentPage - neighbours;
            let end = this.currentPage + neighbours;

            if ( start <= 1 ) {
                start       = 1;
                hellipStart = '';
            }

            if ( end >= this.totalPages ) {
                end   = this.totalPages;
                start = start - ( ( this.currentPage + neighbours ) - this.totalPages );

                if ( start <= 1 ) {
                    start       = 1;
                    hellipStart = '';
                }

                hellipEnd = '';
            }

            // Display max number of pages.
            const maxPages = start + ( visible - 1 );

            if ( maxPages <= this.totalPages ) {
                for ( let i = start; i <= maxPages; i++ ) {
                    this.pages[ i ]      = {};
                    this.pages[ i ].page = i;

                    if ( this.currentPage === this.pages[ i ].page ) {
                        this.pages[ i ].active = true;
                    }
                }
            } else {
                for ( let i = start; i <= end; i++ ) {
                    this.pages[ i ]      = {};
                    this.pages[ i ].page = i;

                    if ( this.currentPage === this.pages[ i ].page ) {
                        this.pages[ i ].active = true;
                    }
                }
            }
        }

        if ( prevPage === 0 ) {
            prevPage = '';
        }
        if ( nextPage > this.totalPages ) {
            nextPage = '';
        }

        /*eslint-disable */
        this.on_first_page = onFirstPage;
        this.on_last_page  = onLastPage;
        this.first_page    = 1;
        this.last_page     = this.totalPages;
        this.hellip_start  = hellipStart;
        this.hellip_end    = hellipEnd;
        this.next_page     = nextPage;
        this.prev_page     = prevPage;
        this.hash          = '';
        this.page_link     = '#'
        /*eslint-enable */

        this.S = {
            start: __( 'Start', 'dustpress' ),
            next: __( 'Next', 'dustpress' ),
            prev: __( 'Previous', 'dustpress' ),
            end: __( 'End', 'dustpress' )
        };
    }
}
