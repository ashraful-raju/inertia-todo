import { User } from "@/types";
import { PropsWithChildren, ReactNode, useState } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { clsx } from "@/utils";

export default function Authenticated({
    user,
    mainClass,
    header,
    children,
}: PropsWithChildren<{ mainClass?: string; user: User; header?: ReactNode }>) {
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <div className="min-h-screen overflow-hidden bg-gray-100 dark:bg-gray-900">
            <Header toggleClick={() => setShowSidebar(!showSidebar)} />
            <section className="flex h-main">
                <Sidebar show={showSidebar} />
                <main className={clsx("flex-1 overflow-y-auto", mainClass)}>
                    <div className="p-6">{header}</div>
                    {children}
                </main>
            </section>
        </div>
    );
}
