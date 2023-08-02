interface CountUpProps {
    style?: any;
    classList?: any;
    class?: string;
    value: number;
    start?: number;
    duration?: number;
    decimal?: number;
    useGrouping?: boolean;
    useEasing?: boolean;
    separator?: string;
    formattingFn?: (n: number) => string;
    prefix?: string;
    suffix?: string;
    ref?: any;
    onEnd?(): void;
}
/**
 *
 * @param props
 * @returns
 */
export declare function CountUp(props: CountUpProps): import("solid-js").JSX.Element;
export {};
