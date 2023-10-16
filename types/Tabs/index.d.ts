export * from './Tab';
type TabsProps = {
    card?: boolean;
    style?: any;
    classList?: any;
    class?: any;
    children?: any;
    activeName?: string;
    ref?: any;
    extra?: any;
    onTabClick?: Function;
    onRemove?: Function;
    duration?: number;
};
export declare function Tabs(props: TabsProps): import("solid-js").JSX.Element;
