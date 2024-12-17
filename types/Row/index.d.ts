export declare const Context: import("solid-js").Context<unknown>;
export declare type GutterProps = {
    xs?: number | number[];
    sm?: number | number[];
    md?: number | number[];
    lg?: number | number[];
    xl?: number | number[];
    xxl?: number | number[];
};
export interface RowProps {
    classList?: any;
    class?: any;
    children?: any;
    style?: any;
    justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around';
    align?: 'top' | 'middle' | 'bottom';
    gutter?: number | number[] | GutterProps;
}
export declare const Row: (props: RowProps) => import("solid-js").JSX.Element;
