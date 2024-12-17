import type { JSX, JSXElement } from "solid-js";
export interface AccordionItemProps extends JSX.HTMLAttributes<HTMLDivElement> {
    name?: string;
    title?: any;
    icon?: JSXElement;
    children?: any;
}
export declare function Item(props: AccordionItemProps): JSX.Element;
