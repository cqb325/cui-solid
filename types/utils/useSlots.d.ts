import type { JSXElement } from "solid-js";
export interface SlotProps {
    name: string;
    children: JSXElement;
}
export declare const useSlots: (_children: JSXElement) => any;
