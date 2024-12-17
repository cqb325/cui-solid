import { Input, Select, Space } from "@/components";
import createField from "@/components/utils/createField";
import { createEffect, createSignal } from "solid-js";

export function CustomField (props: any) {
    const [value, setValue] = createField<string>(props, 'value', '');
    const [period, setPeriod] = createSignal('')
    const [time, setTime] = createSignal('')

    createEffect(() => {
        const val = value();
        let [p, t] = ['', ''];
        if (val) {
            [p, t] = val.split('-');
        }
        setPeriod(p);
        setTime(t);
    })

    const onChange = () => {
        const val = period() && time() ? [period(), time()].join('-') : '';
        setValue(val);
    }

    return <Space>
        <Select value={[period, setPeriod]} onChange={onChange} data={[{ label: '每日', value: '1' }, { label: '每周', value: '2' }]} style={{width: '80px'}} clearable/>
        <Input type="text" value={[time, setTime]} onChange={onChange}/>
    </Space>
}
