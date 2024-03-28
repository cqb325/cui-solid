interface CountDownProps {
    classList?: any;
    class?: string;
    style?: any;
    prefix?: any;
    suffix?: any;
    value?: string | number | Date;
    format?: string;
    onEnd?: () => void;
}
export declare function CountDown(props: CountDownProps): import("solid-js").JSX.Element;
export {};
