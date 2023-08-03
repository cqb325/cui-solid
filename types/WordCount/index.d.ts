export interface WordCountProps {
    classList?: any;
    class?: string;
    style?: any;
    total: number;
    value: string;
    prefix?: any;
    prefixOverflow?: any;
    suffix?: any;
    suffixOverflow?: any;
    circle?: boolean;
    overflow?: boolean;
    radius?: number;
}
export declare function WordCount(props: WordCountProps): import("solid-js").JSX.Element;
