import { DatePane } from "./DatePane"
import { TimePane } from "../TimePicker/TimePane"
import { createSignal, Show } from "solid-js"
import dayjs from "dayjs";
import { useDatepickerContext } from ".";
import { FeatherCalendar, FeatherClock } from "cui-solid-icons/feather";

export function DateTimePane (props: any) {
    const [tab, setTab] = createSignal('date');
    const ctx: any = useDatepickerContext();
    const val = () => props.store[0].currentMonth[props.name === 'end' ? 1 : 0];
    // const val = () => props.value || new Date();

    const displayDate = () => {
        return dayjs(props.value || new Date()).format('YYYY-MM-DD');
    }
    const displayTime = () => {
        return dayjs(val()).format('HH:mm:ss');
    }

    const selectTab = (tab: string) => {
        setTab(tab);
    }

    const onSelectTime = (type: string, num: number, name: string) => {
        const v = new Date(val());

        if (type === 'hour') {
            v.setHours(num);
        }
        if (type === 'minute') {
            v.setMinutes(num);
        }
        if (type === 'second') {
            v.setSeconds(num);
        }
        ctx && ctx.onSelectTime(v, props.name);
    }
    return <div class="cm-date-picker-datetime">
        <div class="cm-datetime-content">
            <Show when={tab() === 'date'}>
                <DatePane {...props}/>
            </Show>
            <Show when={tab() === 'time'}>
                <TimePane {...props} header="选择时间" value={val()} onSelectTime={onSelectTime}/>
            </Show>
        </div>
        <div class="cm-datetime-switch">
            <div classList={{"cm-datetime-switch-item": true, 'active': tab() === 'date'}} onClick={selectTab.bind(null, 'date')}>
                <FeatherCalendar size={12}/>
                {displayDate()}
            </div>
            <div classList={{"cm-datetime-switch-item": true, 'active': tab() === 'time'}} onClick={selectTab.bind(null, 'time')}>
                <FeatherClock size={12} />
                {displayTime()}
            </div>
        </div>
    </div>
}
