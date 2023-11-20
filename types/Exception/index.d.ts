type ExceptionProps = {
    classList?: any;
    class?: string;
    type?: '404' | '403' | '500' | 'empty' | 'fail' | 'deny';
    typeImage?: any;
    desc?: string;
    showDesc?: boolean;
    link?: string;
    showAction?: boolean;
};
export declare function Exception(props: ExceptionProps): import("solid-js").JSX.Element;
export {};
