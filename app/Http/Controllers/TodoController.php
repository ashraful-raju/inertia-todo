<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Todo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class TodoController extends Controller
{
    /**
     * Store a newly created resource in storage.
     */
    public function store(Category $category, Request $request)
    {
        Gate::authorize('hasAccess', $category);
        $data = $request->validate([
            'title' => ['required', 'string'],
            'details' => ['nullable', 'string']
        ]);

        $data['user_id'] = auth()->id();

        $category->todos()->create($data);

        return to_route('categories.show', $category->slug);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Todo $todo)
    {
        Gate::authorize('hasAccess', $todo);
        $data = $request->validate([
            'title' => ['sometimes', 'required', 'string'],
            'details' => ['sometimes', 'nullable', 'string'],
            'status' => ['sometimes', 'required', 'boolean']
        ]);

        $todo->update($data);

        return to_route('categories.show', $todo->category->slug);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Todo $todo)
    {
        Gate::authorize('hasAccess', $todo);
        $slug = $todo->category->slug;

        $todo->delete();

        return to_route('categories.show', $slug);
    }
}
