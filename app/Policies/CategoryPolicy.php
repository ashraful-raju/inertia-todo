<?php

namespace App\Policies;

use App\Models\Category;
use App\Models\User;

class CategoryPolicy
{
    /**
     * Create a new policy instance.
     */
    public function __construct()
    {
        //
    }

    function hasAccess(User $user, Category $model)
    {
        return $model->user_id === $user->id;
    }
}
