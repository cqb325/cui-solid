import type { Signal } from "solid-js";
type RateItemProps = {
    onMouseEnter?: (value: number) => void;
    onMouseEnterHalf?: (value: number, e: any) => void;
    onClickHalfStar?: (value: number, e: any) => void;
    onClickStar?: (value: number) => void;
    icon?: any;
    index: number;
    allowHalf?: boolean;
    current: Signal<any>;
};
export declare function RateItem(props: RateItemProps): import("solid-js").JSX.Element;
export {};
