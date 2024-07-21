import { User } from "@/types";
import { PropsWithChildren, ReactNode } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export default function Authenticated({
    user,
    header,
    children,
}: PropsWithChildren<{ user: User; header?: ReactNode }>) {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <Header />
            <section className="flex h-main">
                <Sidebar />
                <main className="flex-1">{children}</main>
            </section>
        </div>
    );
}
