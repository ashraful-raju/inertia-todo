<?php

namespace App\Policies;

use App\Models\Todo;
use App\Models\User;

class TodoPolicy
{
    /**
     * Create a new policy instance.
     */
    public function __construct()
    {
        //
    }

    function hasAccess(User $user, Todo $model)
    {
        return $model->user_id === $user->id;
    }
}
