type CollapaseProps = {
    open?: boolean;
    onOpen?: (height: number) => void;
    style?: any;
    children?: any;
    onEnd?: (open: boolean | undefined) => void;
    classList?: any;
    class?: string;
    ref?: any;
};
export declare function Collapase(props: CollapaseProps): import("solid-js").JSX.Element;
export {};
