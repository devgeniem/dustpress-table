<?php
/**
 * DustPress Table table class file
 */

namespace Geniem\DustPressTable;

/**
 * Table class
 */
class Table {

    /**
     * The config array
     *
     * @var array
     */
    public $config = [];

    /**
     * Constructor
     *
     * @param array $config A config array.
     */
    public function __construct( array $config ) {
        $this->config = $config;

        $this->validate_config();

        if ( ! empty( $this->config['templates'] ) ) {
            add_action( 'wp_enqueue_scripts', function() use ( $config ) {
                \wp_localize_script( 'dustpress-table', 'dptPartials', get_template_directory_uri() . '/partials/' );
            }, 15 );
        }
    }

    /**
     * Get the config file
     *
     * @return array
     */
    public function get_config() : array {
        return $this->config;
    }

    /**
     * Validate the config array
     *
     * @throws \Exception If something is wrong.
     * @return void
     */
    public function validate_config() {

        // Handle the id parameter
        if ( empty( $this->config['data'] ) ) {
            $this->exception( 'config has no id defined' );
        }
        else {
            if ( ! is_string( $this->config['id'] ) ) {
                $this->exception( 'id must be a string' );
            }
        }

        // Handle the data parameter
        if ( empty( $this->config['data'] ) ) {
            $this->exception( 'config has no data defined' );
        }
        else {
            if ( ! ( is_string( $this->config['data'] ) || is_array( $this->config['data'] ) ) ) {
                $this->exception( 'data must be a string or an array' );
            }
        }

        // Handle the search parameter
        if ( ! empty( $this->config['search'] ) && ! is_bool( $this->config['search'] ) ) {
            $this->exception( 'search parameter must be a boolean' );
        }
        elseif ( empty( $this->config['search'] ) ) {
            $this->config['search'] = false;
        }

        // Handle the per page parameter
        if ( ! empty( $this->config['per_page'] ) && ! is_int( $this->config['per_page'] ) ) {
            $this->exception( 'per_page parameter must be an integer' );
        }
        elseif ( empty( $this->config['per_page'] ) ) {
            $this->config['per_page'] = 20;
        }

        // Handle the type parameter
        if ( ! empty( $this->config['type'] ) && ! is_string( $this->config['type'] ) ) {
            $this->exception( 'type parameter must be a string' );
        }

        // Handle the possible buttons
        if ( ! empty( $this->config['buttons'] ) ) {
            $this->config['buttons'] = array_map( function( $button ) {
                if ( ! is_array( $button ) ) {
                    $this->exception( 'buttons must be arrays' );
                }

                // Handle the label
                if ( empty( $button['label'] ) || ! is_string( $button['label'] ) ) {
                    $this->exception( 'button must have a label' );
                }

                // Handle the classes
                if ( ! empty( $button['class'] ) && ! is_string( $button['class'] ) ) {
                    $this->exception( 'button classes must be a space-separated string' );
                }

                // Handle the href attribute
                if ( ! empty( $button['href'] ) && ! is_string( $button['href'] ) ) {
                    $this->exception( 'button href must be a string' );
                }

                return $button;
            }, $this->config['buttons'] );
        }

        // Handle the filters parameter
        if ( ! empty( $this->config['filters'] ) && is_array( $this->config['filters'] ) ) {
            $this->config['filters'] = array_map( function( $filter ) {
                if ( ! is_array( $filter ) ) {
                    $this->exception( 'filters must be arrays' );
                }

                // Handle the name
                if ( empty( $filter['name'] ) || ! is_string( $filter['name'] ) ) {
                    $this->exception( 'filter must have a name' );
                }

                // Handle the type parameter
                if ( empty( $filter['type'] ) ) {
                    $filter['type'] = 'select';
                }
                elseif ( ! is_string( $filter['type'] ) ) {
                    $this->exception( 'type must be a string' );
                }

                if ( empty( $filter['field'] ) || ! is_string( $filter['field'] ) ) {
                    $this->exception( 'filter must have an assigned field' );
                }

                // Handle the options
                if ( empty( $filter['options'] ) ) {
                    $this->exception( 'filter has no options defined' );
                }
                else {
                    if ( ! ( is_string( $filter['options'] ) || is_array( $filter['options'] ) ) ) {
                        $this->exception( 'options must be a string (a DustPress.js endpoint) or an array' );
                    }
                }

                // Handle the multiselect parameter
                if ( ! empty( $filter['multiselect'] ) && ! is_bool( $filter['multiselect'] ) ) {
                    $this->exception( 'multiselect parameter must be a boolean' );
                }
                elseif ( empty( $filter['multiselect'] ) ) {
                    $filter['multiselect'] = false;
                }

                // Handle the default to single parameter
                if ( ! empty( $filter['defaultToSingle'] ) && ! is_bool( $filter['defaultToSingle'] ) ) {
                    $this->exception( 'defaultToSingle parameter must be a boolean' );
                }
                elseif ( empty( $filter['defaultToSingle'] ) ) {
                    $filter['defaultToSingle'] = false;
                }

                return $filter;
            }, $this->config['filters'] );
        }
    }

    /**
     * Throw an exception
     *
     * @param string $error The error to throw.
     * @throws \Exception If something is wrong.
     * @return void
     */
    private function exception( string $error ) {
        throw new \Exception( 'DustPress Table error: ' . $error );
    }
}
