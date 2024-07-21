import { NestedRecord } from "@/types/generic";

/**
 * Get object values by dot notation key
 * @param data Object
 * @param path object dot notation path
 * @returns Object
 */
export const getValueFromObject = <T = NestedRecord>(
    data: unknown,
    path: string
): T =>
    path
        .split(".")
        .reduce(
            (items, key) =>
                (items as NestedRecord<string>)?.[key] as NestedRecord<string>,
            data
        ) as T;

/**
 * Simple conditional class naming
 * @param className class names
 * @returns string
 */
export const clsx = (...className: (string | boolean | undefined)[]) => {
    return className.filter(Boolean).join(" ");
};
