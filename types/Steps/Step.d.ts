import type { JSXElement } from "solid-js";
export interface StepProps {
    title?: JSXElement | string;
    description?: JSXElement | string;
    style?: any;
    classList?: any;
    class?: string;
    icon?: JSXElement;
    status?: 'finished' | 'process' | 'error' | 'warning' | 'wait';
}
export declare function Step(props: StepProps): import("solid-js").JSX.Element;
