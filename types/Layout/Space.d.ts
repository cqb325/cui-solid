export interface SpaceOptions {
    dir?: 'v' | 'h';
    wrap?: boolean;
    inline?: boolean;
    size?: number;
    align?: 'center' | 'start' | 'end' | 'baseline';
    justify?: 'center' | 'start' | 'end';
    classList?: any;
    class?: string;
    children?: any;
    style?: any;
    id?: string;
    title?: string;
}
export declare const Space: (props: SpaceOptions) => import("solid-js").JSX.Element;
