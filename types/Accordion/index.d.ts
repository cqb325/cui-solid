export declare const AccordionContext: import("solid-js").Context<unknown>;
type AccordionProps = {
    classList?: any;
    class?: string;
    style?: any;
    children?: any;
    multi?: boolean;
    onSelect?: (name: string, open: boolean, ids: any[]) => any;
    activeKey?: any;
    flex?: boolean;
};
export declare function Accordion(props: AccordionProps): import("solid-js").JSX.Element;
export declare namespace Accordion {
    var Item: typeof import("./Item").Item;
}
export declare const useAccordionContext: () => unknown;
export {};
