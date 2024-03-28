import { CheckboxGroup } from '../CheckboxGroup';
import { RadioGroup } from '../RadioGroup';
import { InnerInput } from './input';
import { Switch as MySwitch } from '../Switch';
import { Search } from '../Search';
import { Spinner } from '../Spinner';
import { Rate } from '../Rate';
import { Select } from '../Select';
import { AutoComplete } from '../AutoComplete';
import { Cascader } from '../Cascader';
import { Timepicker } from '../TimePicker';
import { Datepicker } from '../DatePicker';
import { Slider } from '../Slider';
import { TreeSelect } from '../TreeSelect';
import { Switch, Match } from 'solid-js';
import { ColorPicker } from '../ColorPicker';

export function Input (props: any) {
    return <Switch fallback={<InnerInput {...props}/>}>
        <Match when={props.type === 'text' || !props.type || props.type === 'password' || props.type === 'textarea'}>
            <InnerInput {...props}/>
        </Match>
        <Match when={props.type === 'checkbox'}>
            <CheckboxGroup {...props}/>
        </Match>
        <Match when={props.type === 'radio'}>
            <RadioGroup {...props}/>
        </Match>
        <Match when={props.type === 'switch'}>
            <MySwitch {...props}/>
        </Match>
        <Match when={props.type === 'search'}>
            <Search {...props}/>
        </Match>
        <Match when={props.type === 'spinner'}>
            <Spinner {...props}/>
        </Match>
        <Match when={props.type === 'rate'}>
            <Rate {...props}/>
        </Match>
        <Match when={props.type === 'select'}>
            <Select {...props}/>
        </Match>
        <Match when={props.type === 'autocomplete'}>
            <AutoComplete {...props}/>
        </Match>
        <Match when={props.type === 'cascader'}>
            <Cascader {...props}/>
        </Match>
        <Match when={props.type === 'time' || props.type === 'timeRange'}>
            <Timepicker {...props}/>
        </Match>
        <Match when={props.type === 'date' || props.type === 'dateRange' ||
            props.type === 'month' || props.type === 'monthRange' ||
            props.type === 'dateTime' || props.type === 'dateTimeRange'}>
            <Datepicker {...props}/>
        </Match>
        <Match when={props.type === 'slider'}>
            <Slider {...props}/>
        </Match>
        <Match when={props.type === 'treeSelect'}>
            <TreeSelect {...props}/>
        </Match>
        <Match when={props.type === 'color'}>
            <ColorPicker {...props}/>
        </Match>
    </Switch>
    // if (props.type === 'text' || !props.type || props.type === 'password') {
    //     return <InnerInput {...props}/>;
    // }
    // if (props.type === 'checkbox') {
    //     return <CheckboxGroup {...props}/>;
    // }
    // if (props.type === 'radio') {
    //     return <RadioGroup {...props}/>;
    // }
    // if (props.type === 'switch') {
    //     return <Switch {...props}/>;
    // }
    // if (props.type === 'search') {
    //     return <Search {...props}/>;
    // }
    // if (props.type === 'cascader') {
    //     return <Cascader {...props}/>;
    // }
    // if (props.type === 'textarea') {
    //     return <Textarea {...props}/>;
    // }
    // if (props.type === 'select') {
    //     return <Select {...props}/>;
    // }
    // if (props.type === 'spinner') {
    //     return <Spinner {...props}/>;
    // }
    // if (props.type === 'rate') {
    //     return <Rate {...props}/>;
    // }
    // if (props.type === 'time') {
    //     return <Time {...props}/>;
    // }
    // if (props.type === 'timerange') {
    //     return <TimeRange {...props}/>;
    // }
    // if (props.type === 'datetime' || props.type === 'date' || props.type === 'year' || props.type === 'month') {
    //     return <DateTime {...props}/>;
    // }
    // if (props.type === 'datetimerange' || props.type === 'daterange') {
    //     return <DateRange {...props}/>;
    // }
    // if (props.type === 'autocomplete') {
    //     return <AutoComplete {...props}/>;
    // }
}
