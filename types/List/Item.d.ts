declare type ListItemProps = {
    id: string | number;
    data?: any;
    style?: any;
    render?: Function;
    actions?: any;
    avatar?: any;
    content?: any;
    children?: any;
    title?: any;
    desc?: any;
};
export declare function Item(props: ListItemProps): import("solid-js").JSX.Element;
export {};
