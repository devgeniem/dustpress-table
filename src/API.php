<?php
/**
 * External API functions
 */

namespace Geniem\DustPressTable;

/**
 * Get a validated config array for a table
 *
 * @param array $config The config array
 * @return array
 */
function get_table( array $config ) : array {
    $table = new Table( $config );

    return $table->get_config();
}
