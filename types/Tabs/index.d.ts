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
    onTabClick?: (item: any) => void;
    onRemove?: (name: string) => void;
    duration?: number;
};
export declare function Tabs(props: TabsProps): import("solid-js").JSX.Element;
