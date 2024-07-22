<?php

namespace App\Traits;

use App\Enums\Constant;

trait ModelScope
{
    function scopeActive($query)
    {
        $query->where('status', true);
    }

    function scopeInActive($query)
    {
        $query->where('status', false);
    }

    function scopeAuthUser($query)
    {
        $query->where('user_id', auth()->id());
    }
}
