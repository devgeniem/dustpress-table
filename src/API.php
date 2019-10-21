<?php
/**
 * External API functions
 */

namespace Geniem\DustPressTable;

/**
 * Get a validated config array for a table
 *
 * @param array $config The config array.
 * @return array
 */
function get_table( array $config ) : array {
    $table = new Table( $config );

    add_action( 'wp_enqueue_scripts', function() use ( $config ) {
        \wp_localize_script( 'dustpress-table', 'dptConfig_' . $config['id'], $config );
    }, 15 );

    return $table->get_config();
}
