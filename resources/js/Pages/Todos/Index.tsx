import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Category, PageProps, Todo } from "@/types";
import TodoItem from "@/Components/Todo";
import PrimaryButton from "@/Components/PrimaryButton";
import { useState } from "react";
import Modal from "@/Components/Modal";
import TodoForm from "@/Components/TodoForm";

export default function Todos({
    auth,
    tasks,
    category,
}: PageProps<{ category: Category; tasks: Todo[] }>) {
    const [createTodo, setCreateTodo] = useState(false);

    return (
        <AuthenticatedLayout
            user={auth.user}
            mainClass="overflow-hidden overflow-y-auto h-full"
            header={
                <div className="flex items-center justify-between">
                    <div className="block w-3/4">
                        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                            {category.name}
                        </h2>
                        <p className="italic text-xs">{category.description}</p>
                    </div>
                    {tasks.length > 0 && (
                        <PrimaryButton
                            onClick={() => setCreateTodo(true)}
                            className="w-auto"
                        >
                            Create new
                        </PrimaryButton>
                    )}
                </div>
            }
        >
            <Head title="Todos" />

            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                {tasks.map((item) => (
                    <TodoItem item={item} key={item.id} />
                ))}
                {tasks.length <= 0 && (
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg flex justify-between items-center pr-6">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            No item found, create one to start!
                        </div>
                        <PrimaryButton onClick={() => setCreateTodo(true)}>
                            Create
                        </PrimaryButton>
                    </div>
                )}
            </div>
            <Modal show={createTodo} onClose={() => setCreateTodo(false)}>
                <TodoForm
                    category={category}
                    closeModal={() => setCreateTodo(false)}
                />
            </Modal>
        </AuthenticatedLayout>
    );
}
