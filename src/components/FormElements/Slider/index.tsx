import createField from "../../utils/createField";
import { useClassList } from "../../utils/useProps"
import { Draggable } from "../../Draggable";
import type { Signal } from "solid-js";
import { createEffect, For, onCleanup, onMount, Show } from "solid-js";
import type { DraggableData } from "../../Draggable/utils";
import { Tooltip } from "../../Tooltip";

export interface SliderProps {
    classList?: any,
    class?: string,
    style?: any,
    range?: boolean,
    min?: number,
    max?: number,
    step?: number,
    value?: number | number[] | Signal<any>,
    disabled?: boolean,
    tipFormatter?: (value: any) => any,
    marks?: any,
    onChange?: (value: any) => void
    asFormField?: boolean
}

export function Slider (props: SliderProps) {
    let rail: any;
    let leftDrag: any;
    let rightDrag: any;
    let pop: any;
    let popRight: any;
    let wrap: any;
    const min = props.min ?? 0;
    const max = props.max ?? 100;
    const step = props.step ?? 1.00;
    const range = props.range ?? false;
    const [value, setValue] = createField<any>(props, range ? [0, 0] : 0);
    const classList = () => useClassList(props, 'cm-slider', {
        'cm-slider-disabled': props.disabled
    });

    const snap = () => {
        const rect = rail.getBoundingClientRect();
        const allW = rect.width;
        return allW / (max - min) * step;
    };

    // 根据值计算位置
    const calculateLeftRight = () => {
        const val: any = range ? value() : [min, value()];
        const trackWidth = Math.abs(val[1] - val[0]) / (max - min) * 100;
        const trackLeft = (val[0] - min) / (max - min) * 100;
        const handleRight = (val[1] - min) / (max - min) * 100;

        return {left: trackLeft, width: trackWidth, right: handleRight};
    }
    const trackStyle = () => {
        const ret = calculateLeftRight();
        return {left: ret.left + '%', width: ret.width + '%'};
    };

    const contextLeft = () => {
        const v: any = range ? value()[0] : value();
        if (props.tipFormatter) {
            return props.tipFormatter(v);
        }
        return v;
    }

    const contextRight = () => {
        if (props.tipFormatter) {
            return props.tipFormatter(value()[1]);
        }
        return value()[1];
    }

    // 值改变后同步拖拽点的位置
    createEffect(() => {
        updatePosition();
    });

    const toFixed = (num: number) => {
        let r;
        try {
            r = step.toString().split('.')[1].length;
        } catch (e) {
            r = 0;
        }
        const m = Math.pow(10, r);
        return Math.round(num * m) / m;
    }

    //左侧拖拽
    const onLeftDrag = (e: any, data: DraggableData) => {
        const railRect = rail.getBoundingClientRect();
        const allW = railRect.width;
        const v = toFixed(data.x / allW * (max - min) + min);
        setTimeout(() => {
            pop && pop.updatePosition();
        })
        if (range && v > value()[1]) {
            return false;
        }
        const val = range ? [v, Math.max(v, value()[1])] : v;
        setValue(val);
        props.onChange && props.onChange(val);
    }

    //右侧拖拽
    const onRightDrag = (e: any, data: DraggableData) => {
        const railRect = rail.getBoundingClientRect();
        const allW = railRect.width;
        const v = toFixed(data.x / allW * (max - min) + min);
        setTimeout(() => {
            popRight && popRight.updatePosition();
        });
        if (range && v < value()[0]) {
            return false;
        }
        const val = range ? [Math.min(value()[0], v), v] : v;
        setValue(val);
        props.onChange && props.onChange(val);
    }

    // 点击后改变值
    const onMouseDown = (e: any) => {
        if (props.disabled) {
            return;
        }
        if (e.target.classList.contains('cm-slider-handle')) {
            return;
        }
        const slider = e.target.closest('.cm-slider');
        if (!slider) {
            return;
        }
        const sliderRect = slider.getBoundingClientRect();
        const x = e.pageX - sliderRect.left;

        const railRect = rail.getBoundingClientRect();
        const allW = railRect.width;
        const v = toFixed(Math.round(x / allW * (max - min) / step + min) * step);

        let val = value();

        if (range) {
            const nearLeft = Math.abs(val[1] - v) > Math.abs(val[0] - v);
            val = nearLeft ? [v, val[1]] : [val[0], v];
            setValue(val);
            setTimeout(() => {
                nearLeft ? pop && pop.updatePosition()
                : popRight && popRight.updatePosition();
            });
            props.onChange && props.onChange(val);
        } else {
            setValue(v);
            setTimeout(() => {
                pop && pop.updatePosition();
            });
            props.onChange && props.onChange(v);
        }
    }

    const steps = () => {
        if (!props.marks) {
            return [];
        }
        const arr = [];
        for (let i = min; i <= max; i += step) {
            if (props.marks[i]) {
                arr.push(i);
            }
        }
        return arr;
    }

    const marks = () => {
        if (props.marks) {
            const arr = [];
            for (const step in props.marks) {
                arr.push({
                    step: parseFloat(step),
                    label: props.marks[step]
                });
            }
            return arr;
        }
        return [];
    }

    const updatePosition = () => {
        const ret = calculateLeftRight();
        const rect = rail.getBoundingClientRect();

        const leftX = range ? rect.width * ret.left / 100 : rect.width * ret.right / 100;
        const rightX = range ? rect.width * (ret.left + ret.width) / 100 : 0;

        if (leftDrag) {
            leftDrag.setPosition({
                x: leftX,
                y: 0
            });
        }
        if (rightDrag) {
            rightDrag.setPosition({
                x: rightX,
                y: 0
            });
        }
    }

    onMount(() => {
        // 容器尺寸变化的时候改变值的位置
        const ob = new ResizeObserver(() => {
            updatePosition();
        });

        ob.observe(wrap);

        onCleanup(() => ob.disconnect());
    })

    return <div classList={classList()} style={props.style} onMouseDown={onMouseDown} ref={wrap}>
        <div class="cm-slider-rail" ref={rail} />
        <div class="cm-slider-track" style={trackStyle()} />
        <div class="cm-slider-steps">
            {/* {this.renderSteps()} */}
            <For each={steps()}>
                {(item: number) => {
                    const ranges = range ? value() : [min, value()];
                    const isActive = item >= ranges[0] && item <= ranges[1];
                    const stepClass = () => ({
                        'cm-slider-step': true,
                        'cm-slider-step-active': isActive
                    });
                    const left = `${((item - min) / (max - min)) * 100}%`;
                    return <span classList={stepClass()} style={{left}} />
                }}
            </For>
        </div>
        <Tooltip disabled={props.disabled} content={contextLeft()} align="top" ref={pop} arrow>
            <Draggable axis="x" disabled={props.disabled} ref={leftDrag} onDrag={onLeftDrag} bounds="parent" class="cm-slider-handle-drag"
            grid={[snap(), snap()]}>
                <div class="cm-slider-handle" tabIndex="0" />
            </Draggable>
        </Tooltip>

        <Show when={range}>
            <Tooltip disabled={props.disabled} content={contextRight()} align="top" ref={popRight} arrow>
                <Draggable axis="x" disabled={props.disabled} ref={rightDrag} onDrag={onRightDrag} bounds="parent" class="cm-slider-handle-drag"
                grid={[snap(), snap()]}>
                    <div class="cm-slider-handle" tabIndex="1" />
                </Draggable>
            </Tooltip>
        </Show>
        <Show when={props.marks}>
            <div class="cm-slider-marks">
                <For each={marks()}>
                    {(item: any) => {
                        const left = `${((item.step - min) / (max - min)) * 100}%`;
                        return <span class="cm-slider-mark" style={{left}}>{item.label}</span>
                    }}
                </For>
            </div>
        </Show>
    </div>
}
