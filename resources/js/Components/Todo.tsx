import { Todo } from "@/types";
import React from "react";

export default function TodoItem({ item }: { item: Todo }) {
    return (
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg mb-2">
            <div className="py-3 px-4 text-gray-900 dark:text-gray-100">
                {item.title}
            </div>
        </div>
    );
}
