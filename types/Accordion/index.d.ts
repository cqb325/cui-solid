import type { JSX } from 'solid-js';
export declare const AccordionContext: import("solid-js").Context<unknown>;
export interface AccordionProps extends Omit<JSX.HTMLAttributes<HTMLDivElement>, 'onSelect'> {
    multi?: boolean;
    onSelect?: (name: string, open: boolean, ids: any[]) => any;
    activeKey?: any;
    flex?: boolean;
}
export declare function Accordion(props: AccordionProps): JSX.Element;
export declare namespace Accordion {
    var Item: typeof import("./Item").Item;
}
export declare const useAccordionContext: () => unknown;
