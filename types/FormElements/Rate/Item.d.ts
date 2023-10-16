type RateItemProps = {
    onMouseEnter?: Function;
    onMouseEnterHalf?: Function;
    onClickHalfStar?: Function;
    onClickStar?: Function;
    icon?: any;
    index: number;
    allowHalf?: boolean;
    current: Function[];
};
export declare function RateItem(props: RateItemProps): import("solid-js").JSX.Element;
export {};
