import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "./TextInput";
import { FormEvent } from "react";
import { useForm } from "@inertiajs/react";
import { Category, Todo } from "@/types";
import TextareaInput from "./TextareaInput";

export default function TodoForm({
    todo,
    category,
    closeModal,
}: {
    todo?: Todo;
    category: Category;
    closeModal: () => void;
}) {
    const { data, setData, post, patch, processing, reset, errors } = useForm({
        title: todo?.title || "",
        details: todo?.details || "",
    });

    const handleSubmit = (evt: FormEvent) => {
        evt.preventDefault();

        if (todo?.id) {
            post(route("todos.update", todo.id), {
                preserveScroll: true,
                onSuccess: () => closeModal(),
                onFinish: () => reset(),
            });
        } else {
            post(route("todos.store", category.id), {
                preserveScroll: true,
                onSuccess: () => closeModal(),
                onFinish: () => reset(),
            });
        }
    };
    return (
        <form onSubmit={handleSubmit} className="p-6">
            <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                {`${todo?.id ? "Edit" : "Create"} Todo`}
            </h2>
            <div className="mt-6">
                <InputLabel htmlFor="title" value="Title" className="sr-only" />
                <TextInput
                    id="title"
                    type="text"
                    name="title"
                    value={data.title}
                    onChange={(e) => setData("title", e.target.value)}
                    className="mt-1 block w-full"
                    isFocused
                    required
                    placeholder="Title"
                />
                <InputError message={errors.title} className="mt-2" />
            </div>
            <div className="mt-6">
                <InputLabel
                    htmlFor="details"
                    value="Details"
                    className="sr-only"
                />
                <TextareaInput
                    id="details"
                    name="details"
                    value={data.details}
                    onChange={(e) => setData("details", e.target.value)}
                    className="mt-1 block w-full"
                    placeholder="Write something..."
                />
                <InputError message={errors.details} className="mt-2" />
            </div>

            <div className="mt-6 flex justify-end">
                <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>
                <PrimaryButton className="ms-3" disabled={processing}>
                    Add
                </PrimaryButton>
            </div>
        </form>
    );
}
