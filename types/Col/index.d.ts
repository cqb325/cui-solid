type ColResponsiveProps = {
    grid?: number;
    offset?: number;
};
type ColProps = {
    classList?: any;
    class?: any;
    children?: any;
    style?: any;
    grid?: number;
    push?: number;
    pull?: number;
    offset?: number;
    flex?: string;
    fixWidth?: boolean;
    xs?: number | ColResponsiveProps;
    sm?: number | ColResponsiveProps;
    md?: number | ColResponsiveProps;
    lg?: number | ColResponsiveProps;
    xl?: number | ColResponsiveProps;
    xxl?: number | ColResponsiveProps;
};
export declare const Col: (props: ColProps) => import("solid-js").JSX.Element;
export {};
