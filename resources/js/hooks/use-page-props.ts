import { PageProps } from "@/types";
import { NestedRecord } from "@/types/generic";
import { getValueFromObject } from "@/utils";
import { usePage } from "@inertiajs/react";

export const usePageProps = <T>(propsName: string): T => {
    const { props } = usePage<PageProps>();

    return getValueFromObject<T>(props, propsName);
};
