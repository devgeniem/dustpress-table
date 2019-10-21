<?php
/**
 * Result class file
 */

namespace Geniem\DustPressTable;

/**
 * Result class
 */
class Result {

    /**
     * The magic setter
     *
     * @param string $name  The name of the property to set.
     * @param mixed  $value The value to set.
     * @return void;
     */
    public function __set( string $name, $value ) : void {
        switch ( $name ) {
            case 'columns':
                // $set = [];
                // foreach ( (array) $value as $key => $value ) {
                //     $set[] = [
                //         'key'   => $key,
                //         'value' => $value,
                //     ];
                // }

                $this->columns = $value;
                break;
            case 'data':
                $this->{$name} = $value;
                break;
            case 'total':
                $this->{$name} = $value;
                break;
        }
    }
}
