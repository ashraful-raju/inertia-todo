import CategoryCreate from "@/Components/CategoryCreate";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { usePageProps } from "@/hooks";
import { Category } from "@/types";
import { clsx } from "@/utils";
import { useState } from "react";

export const Sidebar = () => {
    const categories = usePageProps<Category[]>("categories");

    const [showCategoryCreateForm, setShowCategoryCreateForm] = useState(false);

    return (
        <aside
            className={clsx(
                "h-full h-main w-64 min-w-64 max-w-64 bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700"
            )}
        >
            <div className="flex flex-col w-full h-full">
                <div className="pt-2 pb-3 flex-1 space-y-1 overflow-hidden overflow-y-auto">
                    <ResponsiveNavLink
                        href={route("dashboard")}
                        active={route().current("dashboard")}
                    >
                        Dashboard
                    </ResponsiveNavLink>

                    {categories.map((item) => (
                        <ResponsiveNavLink
                            key={item.id}
                            href={route("categories.show", item.slug)}
                            active={route().current(
                                "categories.show",
                                item.slug
                            )}
                        >
                            {item.name}
                        </ResponsiveNavLink>
                    ))}
                </div>
                <div className="p-2 justify-end w-full">
                    <PrimaryButton
                        onClick={() => setShowCategoryCreateForm(true)}
                        className="w-full justify-center"
                    >
                        Add New Category
                    </PrimaryButton>
                </div>
            </div>
            <Modal
                show={showCategoryCreateForm}
                onClose={() => setShowCategoryCreateForm(false)}
            >
                <CategoryCreate
                    closeModal={() => setShowCategoryCreateForm(false)}
                />
            </Modal>
        </aside>
    );
};
