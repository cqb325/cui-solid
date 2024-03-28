import type { JSXElement} from "solid-js";
export interface SelectOptionProps {
    disabled?: boolean
    style?: any,
    value: string | number,
    label: string | JSXElement
}

export function Option (props: SelectOptionProps) {
    return props as unknown as JSXElement;
}
