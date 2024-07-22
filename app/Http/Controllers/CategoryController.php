<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;

class CategoryController extends Controller
{
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:190'],
            'description' => ['nullable', 'string'],
        ]);

        $data['user_id'] = $request->user()->id;

        $category = Category::create($data);

        return to_route('categories.show', $category->slug);
    }

    /**
     * Display the specified resource.
     */
    public function show(Category $category)
    {
        Gate::authorize('hasAccess', $category);
        return Inertia::render('Todos/Index', [
            'category' => $category,
            'tasks' => $category->todos()->authUser()->orderBy('status')->get()
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Category $category)
    {
        Gate::authorize('hasAccess', $category);
        $data = $request->validate([
            'name' => ['required', 'string', 'max:190'],
            'description' => ['nullable', 'string'],
            'status' => ['nullable', 'string'],
        ]);

        $category->update($data);

        return to_route('categories.show', $category->slug);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {
        Gate::authorize('hasAccess', $category);
        $category->delete();

        if ($slug = Category::where('id', '>', $category->id)->value('slug')) {
            return to_route('categories.show', $slug);
        }
        return to_route('dashboard');
    }
}
