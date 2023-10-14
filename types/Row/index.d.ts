export declare const Context: import("solid-js").Context<unknown>;
declare type RowProps = {
    classList?: any;
    class?: any;
    children?: any;
    style?: any;
    justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around';
    align?: 'top' | 'middle' | 'bottom';
    gutter?: number;
};
export declare const Row: (props: RowProps) => import("solid-js").JSX.Element;
export {};
