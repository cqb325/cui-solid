import { Match, Show, Switch } from "solid-js";
import { useClassList } from "../utils/useProps"
import { FeatherCheckCircle, FeatherXCircle } from "cui-solid-icons/feather";

export interface StrokeProps {
    percent: number
    color: string
}

export interface ProgressProps {
    classList?: any,
    class?: string,
    hidePercent?: boolean,
    status?: 'normal'|'error'|'active'|'success',
    value?: number,
    strokeWidth?: number,
    textInside?: boolean,
    infoRender?: (status: any, value: any) => any,
    strokeColor?: string | string[] | StrokeProps[],
    type?: 'line'|'circle',
    radius?: number,
    max?: number,
}

export function Progress (props: ProgressProps) {
    const max = () => props.max ?? 100;
    const value = () => {
        if (props.value && props.value < 0) {
            return 0;
        }
        if (props.value && props.value >= max()) {
            return max();
        }
        return props.value ?? 0;
    };
    const strokeWidth = props.strokeWidth ?? 10;
    const type = props.type ?? 'line';
    const radius = () => props.radius ?? 60;
    const status = () => {
        if (value() === 100) {
            return 'finished';
        }
        return props.status ?? 'normal';
    }
    const classList = () => useClassList(props, 'cm-progress', {
        'cm-progress-hide-info': props.hidePercent,
        [`cm-progress-${status()}`]: !!status(),
        [`cm-progress-${type}`]: !!type,
    });
    const width = () => `${value()}%`;
    const text = () => {
        const sta = status();
        const size = type === 'line' ? 12 : 24;
        if (props.infoRender) {
            return props.infoRender(sta, value());
        }
        if (sta === 'finished') {
            return <FeatherCheckCircle size={size}/>;
        }
        if (sta === 'error') {
            return <FeatherXCircle size={size}/>;
        }
        return `${value()}%`;
    }

    const style = () => {
        const obj: any = {
            width: width(),
            height: `${strokeWidth}px`
        };
        if (props.strokeColor) {
            if (typeof props.strokeColor === 'string') {
                obj['background-color'] = props.strokeColor;
            }
            if (props.strokeColor instanceof Array) {
                const length = props.strokeColor.length;
                const arr = (props.strokeColor as string[]).map((color: string, index: number) => {
                    return color + ' ' + (index / length) * 100 + '%';
                });
                obj['background-image'] = `linear-gradient(to right, ${arr.join(',')})`;
            }
        }
        return obj;
    }

    // 计算当前角度对应的弧度值
    const rad = 2 * Math.PI;

    // 极坐标转换成直角坐标
    const x = () => (Math.sin(rad) * radius()).toFixed(2);
    const y = () => -(Math.cos(rad) * radius()).toFixed(2);
    const tx = () => radius() + strokeWidth / 2;

    // path 属性 A 61 61 0 1 1 -0 61 A 61 61 0 1 1 -0 -61
    const descriptions = () => ['M', 0, -radius(), 'A', radius(), radius(), 0, 1, 1, x(), -y(), 'A', radius(), radius(), 0, 1, 1, x(), y()];

    const circleStyle = () => {
        const percent = () => value() / max();
        const dd = () => rad * radius();
        const offset = () => dd() * (1 - percent());

        const obj: any = {
            'stroke-dashoffset': `${offset()}`,
            'stroke-dasharray': dd()
        }
        if (props.strokeColor) {
            if (typeof props.strokeColor === 'string') {
                obj['stroke'] = props.strokeColor;
            }
            if (props.strokeColor instanceof Array) {
                for (let i = 0; i < props.strokeColor.length; i++) {
                    const stroke = props.strokeColor[i] as StrokeProps;

                    if (percent() * 100 >= stroke.percent) {
                        obj['stroke'] = stroke.color;
                    }
                }
            }
        }
        return obj;
    }

    return <div classList={classList()}>
        <div class="cm-progress-outer">
            <div class="cm-progress-inner">
                <Switch>
                    <Match when={type === 'line'}>
                        <div class="cm-progress-bar" style={style()}>
                            <Show when={props.textInside}>
                                <span class="cm-progress-info">{`${value()}%`}</span>
                            </Show>
                        </div>
                    </Match>
                    <Match when={type === 'circle'}>
                        <svg width="100%" height="100%" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" style={{display: 'block', width: (2 * radius() + strokeWidth) + 'px', height: (2 * radius() + strokeWidth) + 'px'}}>
                            <circle cx={tx()} cy={tx()} r={radius()} stroke="#f3f3f3"
                                stroke-width={strokeWidth} fill-opacity="0" />
                            <path class="cm-progress-bar-path"
                                d={descriptions().join(' ')}
                                stroke-linecap="round"
                                stroke-width={strokeWidth}
                                fill-opacity="0"
                                transform={`translate(${tx()},${tx()})`}
                                style={circleStyle()}
                            />
                        </svg>
                    </Match>
                </Switch>
            </div>
        </div>
        <Show when={!props.textInside}>
            <span class="cm-progress-info">{text()}</span>
        </Show>
    </div>
}
