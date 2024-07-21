<?php

namespace App\Models;

use App\Traits\ModelScope;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    use ModelScope;

    protected $fillable = [
        'name',
        'slug',
        'description',
        'status',
        'user_id'
    ];

    public static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            if (empty($model->slug)) {
                $model->slug = str($model->name)->slug();
            }
        });
    }

    function user()
    {
        return $this->belongsTo(User::class);
    }

    function todos()
    {
        return $this->hasMany(Todo::class);
    }
}
