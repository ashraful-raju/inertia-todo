<?php

namespace App\Enums;

enum Constant
{
    case Active;
    case InActive;

    public function toString(): string
    {
        return match ($this) {
            self::Active => 'active',
            self::InActive => 'inactive'
        };
    }
}
