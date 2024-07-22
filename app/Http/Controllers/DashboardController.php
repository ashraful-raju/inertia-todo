<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    function __invoke()
    {
        return Inertia::render('Dashboard', [
            'todos' => Todo::authUser()->latest()->inActive()->take(5)->with('category')->get()
        ]);
    }
}
