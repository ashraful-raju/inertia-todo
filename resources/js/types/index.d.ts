export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export type Category = {
    id: number;
    name: string;
    slug: string;
    description: string;
    status: boolean;
};

export type Todo = {
    id: number;
    title: string;
    details: string;
    status: boolean;
};

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    categories: Category[];
    auth: {
        user: User;
    };
};
