<?php
/**
 * Plugin Name: DustPress Table
 * Plugin URI:  https://github.com/devgeniem/dustpress-table
 * Description: DustPress table component
 * Version:     0.0.1
 * Author:      Geniem
 * Author URI:  http://www.geniem.fi/
 * License:     GPL3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain: dustpress-table
 * Domain Path: /languages
 */

namespace Geniem;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * DustPressTable plugin class
 */
class DustPressTablePlugin {

    /**
     * Plugin data
     *
     * @var array
     */
    public $plugin_data = [
        'Plugin Name',
        'Plugin URI',
        'Description',
        'Version',
        'Author',
        'Author URI',
        'Text Domain',
        'Domain Path',
    ];

    /**
     * Plugin path
     *
     * @var string
     */
    public $path = '';

    /**
     * Run the basic plugin functionalities
     */
    public function __construct() {
        // Ensure that the get_plugin_data() function is available.
        if ( ! function_exists( 'get_plugin_data' ) ) {
            require_once ABSPATH . 'wp-admin/includes/plugin.php';
        }

        // Get the plugin data and set it to the property
        $plugin_data       = \get_plugin_data( __FILE__, false, false );
        $this->plugin_data = \wp_parse_args( $plugin_data, $this->plugin_data );
        $this->path        = __DIR__;
        $this->url         = plugin_dir_url( __FILE__ );

        // Load the plugin textdomain.
        load_plugin_textdomain( 'DustPressTable', false, dirname( plugin_basename( __FILE__ ) ) . '/languages' );

        // Initialize the plugin itself
        new DustPressTable\DustPressTable( $this );
    }
}

new DustPressTablePlugin();
