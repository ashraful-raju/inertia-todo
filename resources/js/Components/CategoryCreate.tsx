import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "./TextInput";
import { FormEvent } from "react";
import { useForm } from "@inertiajs/react";

export default function CategoryCreate({
    closeModal,
}: {
    closeModal: () => void;
}) {
    const { data, setData, post, processing, reset, errors } = useForm({
        name: "",
    });
    const handleSubmit = (evt: FormEvent) => {
        evt.preventDefault();

        post(route("categories.store"), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onFinish: () => reset(),
        });
    };
    return (
        <form onSubmit={handleSubmit} className="p-6">
            <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                Create a new Category
            </h2>
            <div className="mt-6">
                <InputLabel htmlFor="name" value="Name" className="sr-only" />

                <TextInput
                    id="name"
                    type="text"
                    name="name"
                    value={data.name}
                    onChange={(e) => setData("name", e.target.value)}
                    className="mt-1 block w-full"
                    isFocused
                    placeholder="Name"
                />

                <InputError message={errors.name} className="mt-2" />
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
