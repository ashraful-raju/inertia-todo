import { Todo } from "@/types";
import { clsx } from "@/utils";
import { useForm } from "@inertiajs/react";
import { useEffect } from "react";
import TodoActions from "./TodoActions";

export default function TodoItem({ item }: { item: Todo }) {
    const { data, setData, patch, processing } = useForm({
        status: item.status,
    });

    useEffect(() => {
        if (data.status !== item.status) {
            patch(route("todos.update", item.id));
        }
    }, [data.status]);

    return (
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg mb-2 flex items-center justify-between group">
            <div className="flex flex-1 w-full items-center">
                <input
                    type="checkbox"
                    id={`todo-item-${item.id}`}
                    disabled={processing}
                    className="ml-4 mr-2"
                    checked={data.status}
                    onChange={(evt) =>
                        setData("status", evt.target.checked ? true : false)
                    }
                />
                <label
                    htmlFor={`todo-item-${item.id}`}
                    className={clsx(
                        "py-3 pr-4",
                        data.status
                            ? "italic line-through text-gray-500 dark:text-gray-300"
                            : "text-gray-900 dark:text-gray-100"
                    )}
                >
                    {item.title}
                </label>
            </div>
            <TodoActions item={item} />
        </div>
    );
}
