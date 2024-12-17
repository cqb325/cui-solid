import { createSignal, For, Show } from "solid-js";
import { Day } from "./Day";
import dayjs from "dayjs";
import { MonthPane } from "./MonthPane";
import type { DatepickerStore } from ".";
import type { SetStoreFunction } from "solid-js/store";
import { FeatherChevronLeft, FeatherChevronRight, FeatherChevronsLeft, FeatherChevronsRight } from "cui-solid-icons/feather";

const weeks = ['日', '一', '二', '三', '四', '五', '六'];
export function clearHms (date: Date): Date {
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date;
}

const changeCurrentMonth = (store: DatepickerStore, setStore: SetStoreFunction<DatepickerStore>,
        type: 'Month'|'FullYear', name: string, op: number, stick: boolean) => {
    const month = store.currentMonth[name === 'end' ? 1 : 0];
    month[`set${type}`](month[`get${type}`]() + 1 * op);
    const newMonth = [...store.currentMonth];
    if (stick) {
        const other = newMonth[name === 'end' ? 0 : 1];
        other[`set${type}`](other[`get${type}`]() + 1 * op);
    } else {
        if (dayjs(newMonth[0]).format('YYYY-MM') === dayjs(newMonth[1]).format('YYYY-MM')
            || newMonth[0].getTime() > newMonth[1].getTime()) {
            const other = newMonth[name === 'end' ? 0 : 1];
            other[`set${type}`](other[`get${type}`]() + 1 * op);
        }
    }
    setStore('currentMonth', newMonth);
}

export function DatePane (props: any) {
    const [store, setStore] = props.store;
    const type = props.type ?? 'date';
    const [view, setView] = createSignal('date');
    const onNextMonth = () => {
        changeCurrentMonth(store, setStore, 'Month', props.name, 1, props.stick);
        // const month = store.currentMonth[props.name === 'end' ? 1 : 0];
        // month.setMonth(month.getMonth() + 1);
        // const newMonth = [...store.currentMonth];
        // // const newMonth = [];
        // // newMonth[props.name === 'end' ? 1 : 0] = month;
        // // newMonth[props.name === 'end' ? 0 : 1] = store.currentMonth[props.name === 'end' ? 0 : 1];
        // if (dayjs(newMonth[0]).format('YYYY-MM') === dayjs(newMonth[1]).format('YYYY-MM')) {
        //     const other = newMonth[props.name === 'end' ? 0 : 1];
        //     other.setMonth(other.getMonth() + 1);
        // }
        // setStore('currentMonth', newMonth);
    }

    const onPrevMonth = () => {
        changeCurrentMonth(store, setStore, 'Month', props.name, -1, props.stick);
    }

    const onPrevYear = () => {
        changeCurrentMonth(store, setStore, 'FullYear', props.name, -1, props.stick);
    }

    const onNextYear = () => {
        changeCurrentMonth(store, setStore, 'FullYear', props.name, 1, props.stick);
    }

    const onShowMonthView = () => {
        setView('month');
    }

    const onBack = () => {
        setView('date');
    }

    const onMonthChange = (date: Date, type: 'year'|'month', name: string) => {
        const month:Date = store.currentMonth[name === 'end' ? 1 : 0];
        month.setFullYear(date.getFullYear());
        month.setMonth(date.getMonth());
        const newMonth = [...store.currentMonth];
        const method = type === 'year' ? 'FullYear' : 'Month';
        if (props.stick) {
            const other = new Date(month);
            other.setMonth(other.getMonth() + 1 * (name === 'end' ? -1 : 1));
            newMonth[name === 'end' ? 0 : 1] = other;
        } else {
            if (dayjs(newMonth[0]).format('YYYY-MM') === dayjs(newMonth[1]).format('YYYY-MM')
                || newMonth[0].getTime() > newMonth[1].getTime()) {
                const other = newMonth[name === 'end' ? 0 : 1];
                other[`set${method}`](other[`get${method}`]() + 1 * (name === 'end' ? -1 : 1));
            }
        }
        setStore('currentMonth', newMonth);
    }

    const days = () => {
        const rets = [];
        const first = clearHms(new Date(store.currentMonth[props.name === 'end' ? 1 : 0]));

        first.setDate(1);
        const last = new Date(first);
        last.setMonth(last.getMonth() + 1);
        last.setDate(0);

        // 当月第一天是星期几，前面空几个格子
        const index = first.getDay() % 7;
        const start = new Date(first);
        start.setDate(start.getDate() - index - 1);
        for (let i = 0; i < index; i++) {
            rets.push(new Date(start.setDate(start.getDate() + 1)));
        }

        first.setDate(0);
        for (let i = 0; i < last.getDate(); i++) {
            rets.push(new Date(first.setDate(first.getDate() + 1)));
        }

        let end: any = rets[rets.length - 1];
        end = new Date(end);
        for (let i = 0, j: number = 42 - rets.length; i < j; i++) {
            rets.push(new Date(end.setDate(end.getDate() + 1)));
        }

        return rets;
    }

    const text = () => {
        return dayjs(store.currentMonth[props.name === 'end' ? 1 : 0]).format('YYYY年MM月');
    }

    // const hideNext = () => {
    //     let [prev, next]: Date[] = store.currentMonth;
    //     prev = new Date(prev);
    //     prev.setMonth(prev.getMonth() + 1);
    //     return props.name === 'start' && dayjs(prev).format('YYYY-MM') === dayjs(next).format('YYYY-MM')
    // }

    // const hidePrev = () => {
    //     let [prev, next]: Date[] = store.currentMonth;
    //     prev = new Date(prev);
    //     prev.setMonth(prev.getMonth() + 1);
    //     return props.name === 'end' && dayjs(prev).format('YYYY-MM') === dayjs(next).format('YYYY-MM')
    // }

    return <div class="cm-date-picker-date">
        <Show when={view() === 'date'}>
            <div class="cm-date-picker-date-inner">
                <div class="cm-date-picker-date-header">
                    <div class="cm-date-picker-header-arrow">
                        <FeatherChevronsLeft onClick={onPrevYear}/>
                    </div>
                    <div class="cm-date-picker-header-arrow">
                        <FeatherChevronLeft onClick={onPrevMonth}/>
                    </div>
                    <span class="cm-date-picker-date-info" onClick={onShowMonthView}>{text()}</span>
                    <div class="cm-date-picker-header-arrow">
                        <FeatherChevronRight onClick={onNextMonth}/>
                    </div>
                    <div class="cm-date-picker-header-arrow">
                        <FeatherChevronsRight onClick={onNextYear}/>
                    </div>
                </div>
                <div class="cm-date-picker-date-body">
                    <div class="cm-date-picker-week-line">
                        <For each={weeks}>
                            {(item: string) => {
                                return <div>{item}</div>
                            }}
                        </For>
                    </div>
                    <div class="cm-date-picker-date-days">
                        <For each={days()}>
                            {(day: Date | null) => {
                                return <Day range={store.range} hoverDate={store.hoverDate} type={props.type}
                                    day={day} value={props.value} name={props.name} month={store.currentMonth[props.name === 'end' ? 1 : 0]}/>
                            }}
                        </For>
                    </div>
                </div>
                <div class="cm-date-picker-date-footer" />
            </div>
        </Show>
        <Show when={view() === 'month'}>
            <MonthPane {...props} onBack={onBack} onMonthChange={onMonthChange}/>
        </Show>
    </div>
}
