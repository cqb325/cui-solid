import { useClassList } from "../../utils/useProps";
import { Value } from "../../inner/Value";
import { TimePane } from "./TimePane";
import { TimeRange } from "./TimeRange";
import { Dropdown } from "../../Dropdown";
import type { JSXElement, Signal } from "solid-js";
import { createContext, createEffect, createSignal, Show, useContext } from "solid-js";
import dayjs from "dayjs";
import createField from "../../utils/createField";
import { Icon } from "../../Icon";

type TimePickerProps = {
    classList?: any,
    class?: any,
    type?: 'timeRange',
    disabled?: boolean,
    theme?: 'light' | 'dark',
    size?: 'small' | 'large',
    clearable?: boolean,
    align?: 'bottomLeft' | 'bottomRight',
    format?: string,
    value?: string | Date | string[] | Date[] | Signal<any>,
    prepend?: string | JSXElement,
    disabledTime?: (num: number, type: string) => boolean,
    minuteStep?: number,
    secondStep?: number,
    hourStep?: number,
    header?: string | JSXElement | string[] | JSXElement[],
    footer?: string | JSXElement | string[] | JSXElement[],
    seperator?: string,
    transfer?: boolean,
    trigger?: () => any,
    placeholder?: string,
    onChange?: (value: any) => void
}

const TimepickerContext = createContext();

export function Timepicker(props: TimePickerProps) {
    const [value, setValue] = createField<any>(props, props.type === 'timeRange' ? [] : '');
    // 内部value，防止类似form调用的setValue后重复执行effect
    const [v, setV]: any[] = createSignal(value());
    const [visible, setVisible] = createSignal<boolean>(false);
    const align = props.align ?? 'bottomLeft';
    const format = props.format ?? 'HH:mm:ss';
    const seperator = props.seperator || '~';
    const header = props.header ?? (props.type === 'timeRange' ? ['开始时间', '结束时间'] : undefined);
    const classList = () => useClassList(props, 'cm-time-picker', {
        'cm-time-picker-disabled': props.disabled,
        [`cm-time-picker-${props.theme}`]: props.theme,
        [`cm-time-picker-${props.size}`]: props.size,
        'cm-time-picker-clearable': !props.disabled && props.clearable && (value() !== '' && value().length !== 0)
    });

    createEffect(() => {
        let val = value();
        if (val) {
            if (typeof val === 'string') {
                if (props.type === 'timeRange') {
                    const arr: string[] = val.split(seperator);
                    val = [
                        dayjs(dayjs().format('YYYY-MM-DD ') + arr[0]).toDate(),
                        dayjs(dayjs().format('YYYY-MM-DD ') + arr[1]).toDate(),
                    ]
                } else {
                    val = dayjs(dayjs().format('YYYY-MM-DD ') + val).toDate();
                }
            } else if (val instanceof Array) {
                if (val[0] && typeof val[0] === 'string') {
                    val = [
                        dayjs(dayjs().format('YYYY-MM-DD ') + val[0]).toDate(),
                        dayjs(dayjs().format('YYYY-MM-DD ') + val[1]).toDate(),
                    ]
                }
            }
        }
        setV(val);
    });

    const onSelect = (type: string, num: number, name: string) => {
        const now = new Date();
        const origin = v() || (props.type === 'timeRange' ? [now, now] : now);
        if (props.type === 'timeRange' && !origin.length) {
            origin.push(now);
            origin.push(now);
        }
        let val: Date;
        if (name === 'start') {
            val = origin[0];
        } else if (name === 'end') {
            val = origin[1];
        } else {
            val = origin;
        }
        if (type === 'hour') {
            val.setHours(num);
        }
        if (type === 'minute') {
            val.setMinutes(num);
        }
        if (type === 'second') {
            val.setSeconds(num);
        }
        if (props.type === 'timeRange') {
            let newVal: Date[] = [];
            if (name === 'start') {
                newVal = [new Date(val), origin[1]];
            }
            if (name === 'end') {
                newVal = [origin[0], new Date(val)];
            }

            if (newVal[0].getTime() > newVal[1].getTime()) {
                newVal = [newVal[1], newVal[0]];
            }

            setValue(newVal);
            props.onChange && props.onChange(newVal);
        } else {
            const ret = new Date(val);
            setValue(ret);
            props.onChange && props.onChange(ret);
        }
    }

    const onClear = () => {
        setValue('');
        props.onChange && props.onChange('');
    }

    const text = () => {
        const val = v();
        if (val) {
            if (typeof val === 'string') {
                return val;
            } else {
                if (props.type === 'timeRange') {
                    if (val.length) {
                        if (typeof val[0] === 'string') {
                            return val.join(seperator);
                        }
                        return [
                            dayjs(val[0]).format(format),
                            dayjs(val[1]).format(format),
                        ].join(seperator)
                    } else {
                        return '';
                    }
                }
                return dayjs(val).format(format);
            }
        }
        return '';
    }

    return <TimepickerContext.Provider value={{ onSelect, disabledTime: props.disabledTime, visible }}>
        <div classList={classList()} x-placement={align} tabIndex="1">
            <Dropdown transfer={props.transfer} align={align} trigger="click"
                disabled={props.disabled} visible={[visible, setVisible]} menu={<div class="cm-time-picker-wrap">
                    <Show when={props.type === 'timeRange'} fallback={
                        <TimePane value={v()} format={format} minuteStep={props.minuteStep} secondStep={props.secondStep}
                            hourStep={props.hourStep} header={header} footer={props.footer} />
                    }>
                        <TimeRange value={v()} format={format} minuteStep={props.minuteStep} secondStep={props.secondStep}
                            hourStep={props.hourStep} header={header} footer={props.footer} />
                    </Show>
                </div>}>
                <Show when={!props.trigger} fallback={props.trigger && props.trigger()}>
                    {/* <Value prepend={props.prepend} value={v()} format={format} onClear={onClear}
                        clearable={props.clearable} type={props.type} seperator={seperator}/> */}
                    <Value prepend={props.prepend} text={text()} onClear={onClear} clearable={props.clearable}
                        placeholder={props.placeholder} disabled={props.disabled} size={props.size} icon={<Icon name="clock" />} />
                </Show>
            </Dropdown>
        </div>
    </TimepickerContext.Provider>
}

export const useTimepickerContext = () => useContext(TimepickerContext);
