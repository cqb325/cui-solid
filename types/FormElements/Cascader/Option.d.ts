import { CascaderNode, CascaderStore } from "./store";
export interface OptionProps {
    data: CascaderNode[];
    seperator: string;
    store: CascaderStore;
    filter?: boolean;
}
export declare function Option(props: OptionProps): import("solid-js").JSX.Element;
