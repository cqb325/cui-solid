import type { JSX } from "solid-js";
export interface ExceptionProps {
    classList?: any;
    class?: string;
    type?: '404' | '403' | '500' | 'empty' | 'fail' | 'deny';
    typeImage?: any;
    desc?: string;
    width?: number;
    height?: number;
    showDesc?: boolean;
    link?: string;
    action?: JSX.Element;
}
export declare const NO_DATA_IMAGE: string;
export declare function Exception(props: ExceptionProps): JSX.Element;
