interface CountDownProps {
    classList?: any;
    class?: string;
    style?: any;
    prefix?: any;
    suffix?: any;
    value: number;
    format?: string;
    onEnd?: () => void;
    duration?: number;
}
export declare function CountDown(props: CountDownProps): import("solid-js").JSX.Element;
export {};
