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
        else {
            $this->config['search'] = false;
        }

        // Handle the type parameter
        if ( ! empty( $this->config['type'] ) && ! is_string( $this->config['type'] ) ) {
            $this->exception( 'type parameter must be a string' );
        }

        // Handle the filters parameter
        if ( ! empty( $this->config['filters'] ) && ! is_array( $this->config['filters'] ) ) {
            array_walk( $this->config['filters'], function( $filter ) {
                // Handle the name
                if ( ! is_array( $filter ) ) {
                    $this->exception( 'filters must be arrays' );
                }

                if ( empty( $filter['name'] ) || ! is_string( $filter['name'] ) ) {
                    $this->exception( 'filter must have a name' );
                }

                if ( empty( $filter['field'] ) || ! is_string( $filter['field'] ) ) {
                    $this->exception( 'filter must have an assigned field' );
                }

                // Handle the options
                if ( empty( $this->config['options'] ) ) {
                    $this->exception( 'filter has no options defined' );
                }
                else {
                    if ( ! ( is_string( $this->config['options'] ) || is_array( $this->config['options'] ) ) ) {
                        $this->exception( 'options must be a string (a DustPress.js endpoint) or an array' );
                    }
                }

                // Handle the multiselect parameter
                if ( ! empty( $this->config['multiselect'] ) && ! is_bool( $this->config['multiselect'] ) ) {
                    $this->exception( 'multiselect parameter must be a boolean' );
                }
                else {
                    $this->config['multiselect'] = false;
                }
            });
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
