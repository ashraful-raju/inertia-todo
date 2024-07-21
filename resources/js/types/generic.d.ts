export type NestedRecord<T = string | number> = {
    [k: string]: T | NestedRecord;
};
