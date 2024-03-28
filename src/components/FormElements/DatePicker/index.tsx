import type { JSXElement, Signal} from "solid-js";
import { Match, Show, Switch, createContext, createEffect, useContext, createSignal, createMemo, untrack } from "solid-js";
import { Dropdown } from "../../Dropdown";
import { useClassList } from "../../utils/useProps"
import { Value } from "../../inner/Value";
import { DatePane } from "./DatePane";
import { createStore, produce } from "solid-js/store";
import { MonthPane } from "./MonthPane";
import { MonthRangePane } from "./MonthRangePane";
import { DateRangePane } from "./DateRangePane";
import { DateTimePane } from "./DateTimePane";
import { DateTimeRangePane } from "./DateTimeRangePane";
import dayjs from "dayjs";
import createField from "../../utils/createField";
import { Icon } from "../../Icon";


type DatepickerProps = {
    classList?: any,
    class?: any,
    style?: any,
    disabled?: boolean,
    theme?: 'light'|'dark',
    size?: 'small'|'large',
    clearable?: boolean,
    type?: 'dateRange'|'monthRange'|'month'|'dateTime'|'dateTimeRange',
    align?: 'bottomLeft'|'bottomRight',
    format?: string,
    value?: string | Date | string[] | Date[] | Signal<any>,
    prepend?: string | JSXElement,
    header?: string | JSXElement | string[] | JSXElement[],
    footer?: string | JSXElement | string[] | JSXElement[],
    seperator?: string,
    transfer?: boolean,
    trigger?: () => any,
    disabledDate?: (day: Date) => boolean,
    onChange?: (value: any) => void,
    maxRange?: number,
    shortCuts?: (() => any) | JSXElement,
    revers?: boolean
    placeholder?: string
    // daterange的月份是否粘连
    stick?: boolean
}

const DatepickerContext = createContext();

export type DatepickerStore = {
    currentMonth: Date[],
    range: Date[],
    hoverDate?: Date
}

export function Datepicker (props: DatepickerProps) {
    const [visible, setVisible] = createSignal(false);
    const type = props.type ?? 'date';
    const [value, setValue] = createField<any>(props, 'value', type === 'dateRange' || type === 'dateTimeRange' ? [] : '');
    const [v, setV] = createSignal<any>();
    let format = props.format ?? 'YYYY-MM-DD';
    if (type === 'month' || type === 'monthRange') {
        format = props.format ?? 'YYYY-MM';
    }
    if (type === 'dateTime' || type === 'dateTimeRange') {
        format = props.format ?? 'YYYY-MM-DD HH:mm:ss';
    }
    const now = new Date();
    const next = new Date();
    next.setMonth(next.getMonth() + 1);
    const [store, setStore] = createStore<DatepickerStore>({
        currentMonth: [now, next],
        range: [],
        hoverDate: undefined
    });
    const align = props.align ?? 'bottomLeft';
    const seperator = props.seperator || '~';

    createEffect(() => {
        let val: any = value();
        if (val && val instanceof Array && typeof val[0] === 'function') {
            val = val[0]();
        }
        let currentMonth: Date[];
        if (val) {
            if (typeof val === 'string') {
                if (type === 'dateRange' || type === 'monthRange' || type === 'dateTimeRange') {
                    const arr: string[] = val.split(seperator);
                    val = [
                        dayjs(arr[0]).toDate(),
                        dayjs(arr[1]).toDate(),
                    ]
                    const prev = new Date(val[0]);
                    const next = new Date(val[1]);
                    if (dayjs(prev).format('YYYY-MM') === dayjs(next).format('YYYY-MM')) {
                        next.setMonth(next.getMonth() + 1);
                    }
                    currentMonth = [prev, next];
                } else {
                    val = dayjs(val).toDate();
                    const prev = new Date(val);
                    const next = new Date(val);
                    next.setMonth(next.getMonth() + 1);
                    currentMonth = [prev, next];
                }
            } else {
                let prev: Date = new Date(); let next: Date = new Date();
                if (val instanceof Array) {
                    if (typeof val[0] === 'string') {
                        val[0] = dayjs(val[0]).toDate();
                    }
                    if (typeof val[1] === 'string') {
                        val[1] = dayjs(val[1]).toDate();
                    }

                    prev = val[0] === undefined ? new Date() : (val[0] ? new Date(val[0]) : new Date());
                    next = val[1] === undefined ? new Date() : (val[1] ? new Date(val[1]) : new Date());
                }
                if (type=== 'month' && val instanceof Date) {
                    prev = val;
                    next = new Date(val);
                }

                if (dayjs(prev).format('YYYY-MM') === dayjs(next).format('YYYY-MM')) {
                    next.setMonth(next.getMonth() + 1);
                }
                currentMonth = [prev, next];
            }
            if (type === 'dateRange' || type === 'dateTimeRange') {
                setStore('range', val);
            }
        } else {
            currentMonth = [now, next];
        }
        // 粘连时根据第一个month往后加一个月
        if (props.stick) {
            currentMonth[1] = new Date(currentMonth[0]);
            currentMonth[1].setMonth(currentMonth[1].getMonth() + 1);
        }
        currentMonth[0].setDate(1);
        currentMonth[1].setDate(1);

        setStore('currentMonth', currentMonth);
        setV(val);
    });

    const classList = () => useClassList(props, 'cm-date-picker',{
        [`cm-date-picker-${props.size}`]: props.size,
        'cm-date-picker-disabled': props.disabled,
        'cm-date-picker-clearable': !props.disabled && props.clearable && (value() && value().length !== 0),
    });

    const onClear = () => {
        setValue('');
        if (type === 'dateRange') {
            setStore('range', []);
        }
        props.onChange && props.onChange('');
    }

    // 点击选择日期
    const onSelectDate = (day: Date, name: string) => {
        const va = new Date(day);
        if (type === 'month' || type === 'monthRange') {
            va.setDate(1);
            va.setHours(0);
            va.setMinutes(0);
            va.setSeconds(0);
            va.setMilliseconds(0);
        }
        if (type === 'dateTime' || type === 'dateTimeRange') {
            let val = v();
            if (type === 'dateTimeRange') {
                val = val && val.length ? val[store.range.length === 1 ? 1 : 0] : store.currentMonth[store.range.length === 1 ? 1 : 0];
            } else {
                val = val ? val : store.currentMonth[store.range.length === 1 ? 1 : 0];
            }
            va.setHours(val.getHours());
            va.setMinutes(val.getMinutes());
            va.setSeconds(val.getSeconds());
        }
        const now = new Date();
        const origin = v() || (type === 'monthRange' || type === 'dateRange' || type === 'dateTimeRange' ? [now, now] : now);
        if ((type === 'dateRange' || type === 'dateTimeRange') && !origin.length) {
            origin.push(now);
            origin.push(now);
        }
        let newVal;
        if (name === 'start') {
            newVal = [va, origin[1]];
        } else if (name === 'end') {
            newVal = [origin[0], va];
        } else {
            newVal = va;
        }
        if (newVal instanceof Array && newVal[0].getTime() > newVal[1].getTime()) {
            newVal.reverse();
        }
        // dateRange特殊处理
        if (type === 'dateRange' || type === 'dateTimeRange') {
            const range = store.range;
            let newRange: Date[] = [];
            // 上次已经选择
            if ((range[0] && range[1]) || (!range[0] && !range[1])) {
                newRange = [va];
                setStore('hoverDate', new Date(va));
            }
            if (range[0] && !range[1]) {
                if (isOutRange(range[0], va)) {
                    return;
                }
                newRange = [range[0], va];
                if (newRange[0].getTime() > newRange[1].getTime()) {
                    newRange.reverse();
                    // dateTImeRange时需要切换currentMonth的时间
                    const tmp = new Date();
                    copyHMS(tmp, store.currentMonth[0]);
                    copyHMS(store.currentMonth[0], store.currentMonth[1]);
                    copyHMS(store.currentMonth[1], tmp);
                    setStore('currentMonth', [...store.currentMonth]);
                }
                setValue(newRange);
                if (type === 'dateRange') {
                    setVisible(false);
                }
            }
            setStore('range', newRange);
            return;
        }
        setValue(newVal);
        props.onChange && props.onChange(newVal);
        if (type === 'date') {
            setVisible(false);
        }
    }

    const copyHMS = (target: Date, source: Date) => {
        target.setHours(source.getHours());
        target.setMinutes(source.getMinutes());
        target.setSeconds(source.getSeconds());
    }

    const onSelectTime = (time: Date, name: 'start'|'end') => {
        let val = v();
        let month: Date;
        if (name === 'start') {
            month = store.currentMonth[0];
            if (val && val[0]) {
                copyHMS(val[0], time);
                if (val[0].getTime() > val[1].getTime()) {
                    val.reverse();
                    // dateTImeRange时需要切换currentMonth的时间
                    copyHMS(store.currentMonth[0], val[0]);
                    copyHMS(store.currentMonth[1], val[1]);
                } else {
                    copyHMS(month, time);
                }
                setValue([...val]);
            } else {
                copyHMS(month, time);
            }
        } else if (name === 'end') {
            month = store.currentMonth[1];
            if (val && val[1]) {
                copyHMS(val[1], time);
                if (val[0].getTime() > val[1].getTime()) {
                    val.reverse();
                    // dateTImeRange时需要切换currentMonth的时间
                    copyHMS(store.currentMonth[0], val[0]);
                    copyHMS(store.currentMonth[1], val[1]);
                } else {
                    copyHMS(month, time);
                }
                setValue([...val]);
            } else {
                copyHMS(month, time);
            }
        } else {
            if (!val) {
                val = new Date();
            }
            copyHMS(val, time);
            month = store.currentMonth[0];
            copyHMS(month, time);
            setValue(new Date(val));
        }
        setStore('currentMonth', [...store.currentMonth]);
    }

    /**
     * 是超出maxRange
     * @param start
     * @param current
     * @returns
     */
    const isOutRange = (start: Date, current: Date) => {
        if (props.maxRange) {
            const ms = start.getTime() - current.getTime();
            const days = Math.abs(ms / 1000 / 60 / 60 / 24);
            if (days > props.maxRange - 1) {
                return true;
            }
        }
        return false;
    }

    // 时间段选择
    const onMouseOver = (day: Date) => {
        if (store.range && store.range[0]) {
            if (isOutRange(store.range[0], day) && props.maxRange) {
                const end = new Date(store.range[0]);
                const delta = day.getTime() > store.range[0].getTime() ? 1 : -1;
                end.setDate(end.getDate() + (props.maxRange - 1) * delta);
                setStore('hoverDate', end);
                return;
            }
            setStore('hoverDate', new Date(day));
        }
    }

    const text = createMemo(() => {
        const val = v();
        if (val) {
            if (typeof val === 'string') {
                return val;
            } else {
                if (type === 'dateRange' || type === 'monthRange' || type === 'dateTimeRange') {
                    if (!val[0]) {
                        return '';
                    }
                    return [
                        dayjs(val[0]).format(format),
                        dayjs(val[1]).format(format),
                    ].join(seperator)
                }
                return dayjs(val).format(format);
            }
        }
        return '';
    })

    return <DatepickerContext.Provider value={{onSelectDate, onMouseOver,
        disabledDate: props.disabledDate, onSelectTime, visible}}>
        <div classList={classList()} style={props.style}>
            <Dropdown visible={[visible, setVisible]} transfer={props.transfer} align={align} revers={props.revers}
                trigger="click" disabled={props.disabled} menu={<div class="cm-date-picker-wrap">
                    <Show when={props.shortCuts}>
                        <div class="cm-date-picker-shortcuts">
                            {typeof props.shortCuts === 'function' ? props.shortCuts() : props.shortCuts}
                        </div>
                    </Show>
                    <Switch>
                        <Match when={type === 'date'}>
                            <DatePane store={[store, setStore]} stick={props.stick} type={type} value={v()}/>
                        </Match>
                        <Match when={type === 'month'}>
                            <MonthPane store={[store, setStore]} type={type} value={v()}/>
                        </Match>
                        <Match when={type === 'monthRange'}>
                            <MonthRangePane store={[store, setStore]} type={type} value={v()}/>
                        </Match>
                        <Match when={type === 'dateRange'}>
                            <DateRangePane store={[store, setStore]} stick={props.stick} value={v()} type={type}/>
                        </Match>
                        <Match when={type === 'dateTime'}>
                            <DateTimePane store={[store, setStore]} stick={props.stick} type={type} value={v()} format={format}/>
                        </Match>
                        <Match when={type === 'dateTimeRange'}>
                            <DateTimeRangePane store={[store, setStore]} stick={props.stick} type={type} value={v()} format={format}/>
                        </Match>
                    </Switch>
                </div>}>
                <Show when={!props.trigger} fallback={props.trigger && props.trigger()}>
                    <Value prepend={props.prepend} text={text()} onClear={onClear} clearable={props.clearable}
                        placeholder={props.placeholder} disabled={props.disabled} size={props.size} icon={<Icon name="calendar1"/>}/>
                    {/* <Value prepend={props.prepend} value={v()} format={format} onClear={onClear}
                        clearable={props.clearable} type={props.type} seperator={seperator}/> */}
                </Show>
            </Dropdown>
        </div>
    </DatepickerContext.Provider>
}

export const useDatepickerContext = () => useContext(DatepickerContext);
