import type { JSXElement } from 'solid-js';
/**
 * Spin 类
 * @class Spin
 * @constructor
 */
type SpinProps = {
    classList?: any;
    class?: string;
    style?: any;
    type?: 'pulse' | 'oval' | 'gear' | 'dot';
    title?: string | JSXElement;
    size?: number | 'small' | 'large';
};
export declare function Spin(props: SpinProps): import("solid-js").JSX.Element;
export {};
