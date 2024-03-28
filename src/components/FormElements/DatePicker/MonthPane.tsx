import { Show } from "solid-js";
import { useDatepickerContext } from ".";
import { Button } from "../../Button";
import { Icon } from "../../Icon";
import { Cell } from "./Cell";

export function MonthPane (props: any) {
    const [store, setStore] = props.store;
    const ctx: any = useDatepickerContext();
    const year = () => {
        if (props.type === 'date' || props.type === 'dateRange'
            || props.type === 'dateTime' || props.type === 'dateTimeRange') {
            const index = props.name === 'end' ? 1 : 0;
            return store.currentMonth[index] && store.currentMonth[index].getFullYear && store.currentMonth[index].getFullYear();
        } else {
            return props.value && props.value.getFullYear && props.value.getFullYear();
        }
    }

    const years = () => {
        const arr = [];
        let now = new Date().getFullYear();
        now = now - 60;
        for (let i = 0; i < 100; i++) {
            arr.push(now + i);
        }
        return arr;
    };
    const months = () => {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].concat([]);
    }
    const month = () => {
        if (props.type === 'date' || props.type === 'dateRange'
            || props.type === 'dateTime' || props.type === 'dateTimeRange') {
            const index = props.name === 'end' ? 1 : 0;
            return store.currentMonth[index] && store.currentMonth[index].getMonth && (store.currentMonth[index].getMonth() + 1);
        } else {
            return props.value && props.value.getMonth && (props.value.getMonth() + 1);
        }
    }

    const onSelect = (type: string, num: number) => {
        const index = props.name === 'end' ? 1 : 0;
        const d = new Date(store.currentMonth[index]);
        if (type === 'year') {
            d.setFullYear(num);
            // // 设置年份的时候月份处在禁用月份，选择未禁用的月份
            // let disabled = ctx && ctx.disabledDate && ctx.disabledDate(d);
            // while(disabled) {
            //     d.setMonth(d.getMonth() - 1);
            //     disabled = ctx && ctx.disabledDate && ctx.disabledDate(d);
            // }
        }
        if (type === 'month') {
            d.setMonth(num - 1);
        }
        if (props.onMonthChange) {
            props.onMonthChange(d, type, props.name);
            return;
        }
        setStore('currentMonth', props.name === 'end' ? [store.currentMonth[0], d] : [d, store.currentMonth[1]]);
        // dateRange的时候不需要触发选择
        if (props.type !== 'dateRange' && props.type !== 'date') {
            ctx && ctx.onSelectDate && ctx.onSelectDate(d, props.name);
        }
    }
    const onBack = () => {
        props.onBack && props.onBack();
    }
    return <div class="cm-date-picker-month">
        <Show when={props.type === 'date' || props.type === 'dateRange' || props.type === 'dateTime' || props.type === 'dateTimeRange'}>
            <div class="cm-date-picker-month-header">
                <Button type="text" onClick={onBack} ghost icon={<Icon name="chevron-left" size={16}/>}>返回选择日期</Button>
            </div>
        </Show>
        <div class="cm-date-picker-month-body">
            <Cell data={years()} value={year()} day={store.currentMonth[0]} type="year" onSelect={onSelect}/>
            <Cell data={months()} value={month()} day={store.currentMonth[0]} type="month" onSelect={onSelect}/>
        </div>
    </div>
}
