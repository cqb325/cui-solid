import type { JSXElement} from "solid-js";
import { children } from "solid-js";
import type { SelectOptionProps } from "./Option";

export interface SelectOptionGroupProps extends SelectOptionProps{
    group?: boolean,
    children?: JSXElement,
    items?: SelectOptionProps[]
}

export function OptionGroup (props: SelectOptionGroupProps) {
    props.group = true;
    const items = children(() => props.children)
	const evaluatedItems = () => items.toArray() as unknown as SelectOptionProps[];
    props.items = evaluatedItems();
    return props as unknown as JSXElement;
}
