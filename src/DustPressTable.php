<?php
/**
 * DustPress Table main class file
 */

namespace Geniem\DustPressTable;

use Geniem\DustPressTablePlugin;

/**
 * DustPress Table main class
 */
class DustPressTable {
    /**
     * The plugin instance.
     *
     * @var DustPressTablePlugin
     */
    protected $plugin;

    /**
     * Store the plugin core instance and initialize rest of the functionalities.
     *
     * @param DustPressTablePlugin $plugin The plugin instance to get access to basic settings.
     */
    public function __construct( DustPressTablePlugin $plugin ) {
        // Store the plugin instance.
        $this->plugin = $plugin;

        // Enqueue styles and scripts
        add_action( 'wp_enqueue_scripts', [ $this, 'enqueues' ], 10 );

        // Require the external API functions
        require_once( __DIR__ . '/API.php' );

        // Add DustPress partials directory
        add_filter( 'dustpress/partials', function( $partials ) {
            $partials[] = $this->plugin->path . '/partials';
            return $partials;
        });
    }

    /**
     * Enqueue styles and scripts
     *
     * @return void
     */
    public function enqueues() {
        \wp_enqueue_script( 'dustjs', $this->plugin->url . '/assets/vendor/dust-full.min.js', [], '2.7.5', true );

        // PHP_INT_MAX there only for development purposes, it will be changed to the plugin version number when done.
        \wp_register_script( 'dustpress-table', $this->plugin->url . '/assets/dist/main.js', [ 'wp-i18n' ], rand( 0, PHP_INT_MAX ), true );
        \wp_set_script_translations( 'dustpress-table', 'dustpress' );
        \wp_enqueue_script( 'dustpress-table' );

        \wp_enqueue_style( 'dustpress-table', $this->plugin->url . '/assets/dist/main.css', [], rand( 0, PHP_INT_MAX ) );
    }
}
