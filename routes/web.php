<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TodoController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::redirect('/', '/login');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::controller(CategoryController::class)
        ->name('categories.')
        ->group(function () {
            Route::get('/tasks/{category:slug}', 'show')->name('show');
            Route::post('/categories', 'store')->name('store');
            Route::patch('/categories/{category}', 'update')->name('update');
        });
    Route::controller(TodoController::class)
        ->name('todos.')
        ->group(function () {
            Route::post('/category/{category}/todo', 'store')->name('store');
            Route::patch('/todo/{todo}', 'update')->name('update');
        });
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::any('/test', function () {
    dd(\App\Models\Category::all());
});

require __DIR__ . '/auth.php';
