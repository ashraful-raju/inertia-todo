import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { clsx } from "@/utils";

export const Sidebar = () => {
    return (
        <aside
            className={clsx(
                "h-full w-64 min-w-64 max-w-64 bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700"
            )}
        >
            <div className="block">
                <div className="pt-2 pb-3 space-y-1">
                    <ResponsiveNavLink
                        href={route("dashboard")}
                        active={route().current("dashboard")}
                    >
                        Dashboard
                    </ResponsiveNavLink>
                </div>
            </div>
        </aside>
    );
};
