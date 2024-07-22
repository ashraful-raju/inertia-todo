import React, { useState } from "react";
import Drawer from "./Drawer";
import { Category, Todo } from "@/types";
import TodoForm from "./TodoForm";
import { usePageProps } from "@/hooks";
import SecondaryButton from "./SecondaryButton";

export default function TodoDetails({
    show,
    item,
    onClose,
}: {
    item: Todo;
    show: boolean;
    onClose: CallableFunction;
}) {
    const [edit, setEdit] = useState(false);
    const category = usePageProps<Category>("category");

    return (
        <Drawer show={show} onClose={onClose}>
            <div className="flex mb-4 justify-between items-center">
                <h5
                    id="drawer-label"
                    className="inline-flex items-center mb-6 text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
                >
                    Todo Details
                </h5>
                <button
                    type="button"
                    onClick={() => onClose()}
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                    <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                    </svg>
                    <span className="sr-only">Close menu</span>
                </button>
            </div>

            {edit ? (
                <div className="block">
                    <TodoForm
                        category={category}
                        todo={item}
                        closeModal={() => setEdit(false)}
                    />
                </div>
            ) : (
                <div className="block text-slate-900 dark:text-white">
                    <h4 className="text-xl font-bold">{item.title}</h4>
                    <strong className="font-medium">
                        Status: {item.status ? "Completed" : "Incomplete"}
                    </strong>

                    <p className="text-sm italic my-4">{item.details}</p>

                    <SecondaryButton onClick={() => setEdit(true)}>
                        Edit
                    </SecondaryButton>
                </div>
            )}
        </Drawer>
    );
}
