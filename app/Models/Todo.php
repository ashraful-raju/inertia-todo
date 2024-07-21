<?php

namespace App\Models;

use App\Traits\ModelScope;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Todo extends Model
{
    use HasFactory;
    use ModelScope;

    protected $fillable = [
        'title',
        'details',
        'status',
        'user_id',
        'category_id'
    ];


    function user()
    {
        return $this->belongsTo(User::class);
    }

    function category()
    {
        return $this->belongsTo(Category::class);
    }
}
