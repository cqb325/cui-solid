import { clearHms } from "./DatePane";
import { useDatepickerContext } from ".";

function isBetween (range: Date[], date: Date) {
    if (!date) {
        return false;
    }
    const start = clearHms(new Date(range[0]));
    const end = clearHms(new Date(range[1]));
    if (!start) {
        return false;
    }
    if (range.length === 1 && start.getTime() === date.getTime()) {
        return true;
    }
    if (range.length === 2 && start.getTime() <= date.getTime() && end.getTime() >= date.getTime()) {
        return true;
    }
    return false;
}

function sameDate (date1: Date, date2: Date) {
    return '' + date1.getFullYear() + date1.getMonth() + date1.getDate() === '' + date2.getFullYear() + date2.getMonth() + date2.getDate();
}

function sameMonth (date1: Date, date2: Date) {
    return '' + date1.getFullYear() + date1.getMonth() === '' + date2.getFullYear() + date2.getMonth()
}

export function Day (props: any) {
    const ctx: any = useDatepickerContext();
    const today = clearHms(new Date());
    const isToday = props.day ? today.toLocaleDateString() === props.day.toLocaleDateString() : false;
    const isActive = () => props.type === 'dateRange' || props.type === 'dateTimeRange' ? false : (props.value && props.value instanceof Date
        && props.day ? props.value.toLocaleDateString() === props.day.toLocaleDateString() : false);
    let disabled = props.day && ctx && ctx.disabledDate && ctx.disabledDate(props.day);
    if (!(props.month && props.day && sameMonth(props.month, props.day))) {
        disabled = true;
    }
    const inRange = () => props.range && props.day ? isBetween(props.range, props.day) : false;
    const firstRange = () => props.range && props.range[0] && props.day && sameDate(props.range[0], props.day);
    const lastRange = () => props.range && props.range[1] && props.day && sameDate(props.range[1], props.day);
    const inHover = () => {
        const hoverDate = props.range && props.range.length === 1 && props.hoverDate ? [props.hoverDate, props.range[0]] : [];
        hoverDate.length === 2 && hoverDate.sort((a, b) => {
            return a.getTime() - b.getTime();
        });
        return hoverDate && props.day ? isBetween(hoverDate, props.day) : false;
    }
    const classList = () => {
        const obj = {
            'cm-date-picker-day': true,
            'cm-date-picker-empty': !props.day,
            'cm-date-picker-today': isToday,
            'cm-date-picker-active': isActive(),
            'cm-date-picker-inrange': !disabled && inRange(),
            'cm-date-picker-inhover': !disabled && inHover(),
            'cm-date-picker-first-range': firstRange(),
            'cm-date-picker-last-range': lastRange(),
            'cm-date-picker-day-disabled': disabled
        };
        return obj;
    }

    const onDayClick = () => {
        if (props.day) {
            ctx && ctx.onSelectDate(props.day, props.name);
        }
    }

    const onMouseOver = () => {
        if (props.day) {
            ctx && ctx.onMouseOver(props.day);
        }
    }
    return <div classList={classList()} onClick={onDayClick} onMouseOver={onMouseOver}>
        <em>{props.day ? props.day.getDate() : ''}</em>
    </div>
}
