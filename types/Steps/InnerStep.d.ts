import { type JSXElement } from "solid-js";
export interface InnerStepProps {
    title?: JSXElement | string;
    description?: JSXElement | string;
    style?: any;
    classList?: any;
    class?: string;
    icon?: JSXElement;
    status?: 'finished' | 'process' | 'error' | 'warning' | 'wait';
    current: number;
    index: number;
}
export declare function InnerStep(props: InnerStepProps): import("solid-js").JSX.Element;
