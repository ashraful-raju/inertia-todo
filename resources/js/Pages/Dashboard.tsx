import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps, Todo } from "@/types";
import TodoItem from "@/Components/Todo";

export default function Dashboard({
    auth,
    todos,
}: PageProps<{ todos: Todo[] }>) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <>
                    <h2 className="font-normal text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Welcome <strong>{auth.user.name}</strong>!
                    </h2>
                    <p className="italic text-gray-500 text-sm">
                        Here are your latest tasks...
                    </p>
                </>
            }
        >
            <Head title="Dashboard" />

            <div className="">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="block my-2">
                        {todos.map((item) => (
                            <TodoItem key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
