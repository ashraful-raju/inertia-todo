import { User } from "@/types";
import { PropsWithChildren, ReactNode } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { clsx } from "@/utils";

export default function Authenticated({
    user,
    mainClass,
    header,
    children,
}: PropsWithChildren<{ mainClass?: string; user: User; header?: ReactNode }>) {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <Header />
            <section className="flex h-main">
                <Sidebar />
                <main className={clsx("flex-1", mainClass)}>
                    <div className="p-6">{header}</div>
                    {children}
                </main>
            </section>
        </div>
    );
}
