import { JSXElement } from 'solid-js';
/**
 * Spin 类
 * @class Spin
 * @constructor
 */
declare type SpinProps = {
    classList?: any;
    class?: string;
    type?: 'pulse' | 'oval' | 'gear';
    title?: string | JSXElement;
    size?: number;
};
export declare function Spin(props: SpinProps): import("solid-js").JSX.Element;
export {};
