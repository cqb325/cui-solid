type RateItemProps = {
    onMouseEnter?: Function,
    onMouseEnterHalf?: Function,
    onClickHalfStar?: Function,
    onClickStar?: Function,
    icon?: any,
    index: number,
    allowHalf?: boolean,
    current: Function[],
}
export function RateItem (props: RateItemProps) {
    const [current, setCurrent] = props.current;

    const className = () =>{
        let half = false;
        let full = false;
        if (props.index <= current() - 1) {
            full = true;
        }
        if (props.index > current() - 1 && props.index < current()) {
            half = true;
        }
        return {
            'cm-rate-star': true,
            'cm-rate-star-zero': !full && !half,
            'cm-rate-star-half': props.allowHalf && half,
            'cm-rate-star-full': full
        }
    };
    return <div classList={className()}>
        <span onMouseEnter={props.onMouseEnter?.bind(null, props.index + 1)} onClick={props.onClickStar?.bind(null, props.index + 1)}>
            { props.icon }
        </span>
        {
            props.allowHalf
            ? <span class='cm-rate-star-content' onMouseEnter={props.onMouseEnterHalf?.bind(null, props.index + 0.5)}
            onClick={props.onClickHalfStar?.bind(null, props.index + 0.5)}>
                { props.icon }
            </span>
            : null
        }
    </div>;
}