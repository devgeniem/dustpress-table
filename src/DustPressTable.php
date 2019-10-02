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
        $this->enqueues();
    }

    /**
     * Enqueue styles and scripts
     *
     * @return void
     */
    public function enqueues() {
        \wp_enqueue_script( 'dustpress-table', $this->plugin->url .'/assets/dist/main.js', [], $this->plugin->plugin_data['Version'], true );
        \wp_enqueue_style( 'dustpress-table', $this->plugin->url . '/assets/dist/main.css', [], $this->plugins->plugin_data['Version'] );
    }
}
