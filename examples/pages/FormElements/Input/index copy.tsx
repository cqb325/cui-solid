import { Input } from "@/components/FormElements/Input";
import { Form } from "@/components/Form";
import { FormItem } from "@/components/FormItem";
import { View, Space } from "@/components/Layout";
import { Icon } from "@/components/Icon";
import { Button } from "@/components/Button";
import useForm from "@/components/utils/useForm";
import { createSignal } from "solid-js";
function InputDemo () {
    const [count, setCount] = createSignal(1);
    const [spinner, setSpinner] = createSignal(1);
    // const [time, setTime] = useState(new Date());
    // const [timerange, setTimerange] = useState();
    // const [timerange2, setTimerange2] = useState();
    // const [dateTime, setDateTime] = useState('2022-01-01');
    // const [daterange, setDateRange] = useState('2022-01-01~2022-01-08');
    console.log(count());
    const [nameData, setNameData] = createSignal([]);

    const form = useForm({
        data: {
            count: 10
        },
        validation: {
            count: {
                min: 5,
                max: 15
            }
        },
        message: {
            count: {
                max: '最大值不能超过15'
            }
        }
    });
    return <View>
        <Space dir='v'>
            asdasd
            <Input clearable value={[count, setCount]}/>
            <Input disabled value='disabled'/>
            <Input placeholder='请输入xxx'/>
            <Form form={form} labelWidth={100}>
                <FormItem label='阿萨德：' name='count'>
                    <Space dir="h">
                        <Input name='count' prefix='￥' suffix='元'/>
                        <Button onClick={() => {
                            form.count = parseInt(form.count) + 1;
                            console.log(form.getFormData());
                            setCount(count() + 1);
                        }}>Add</Button>
                    </Space>
                </FormItem>
            </Form>
            <Space dir="h">
                <Input prepend={<Icon name='user'/>} append={<Icon name='search1'/>}/>
            </Space>
            <Space dir="h">
                <Input clearable size='large'/><Input clearable/><Input clearable size='small'/>
            </Space>
            <Space dir='h'>
                <Input type='hidden'/>
            </Space>
            <Space>
                <Input type='password'/>
            </Space>
            <Space>
                <Input type='textarea' autoHeight value="asdasd" placeholder='entering something'/>
            </Space>
            <Space>
                <Input type='switch' />
                <Input type='switch' size='small'/>
                <Input type='switch' size='large'/>
                <Input type='switch' labels={['开', '关']}/>
                <Input type='switch' labels={['On', 'Off']} values={[1, 0]}/>
            </Space>
            <Space dir="h">
                <Input type='search' onEnter={(v: any) => {
                    console.log(v);
                }}/>
                <Input type='search' enterButton/>
            </Space>
            <Space dir="h">
                <Input type='spinner' value={[spinner, setSpinner]} onChange={(v: number) => {
                    console.log(v);
                }}/>
            
                <Button onClick={() => {
                    setSpinner(10);
                }}>更新</Button>
            </Space>
            <Space dir="h">
                <Input type='rate' icon={<Icon name='star' size={26}/>}/>
                <Input type='rate' allowHalf icon={<Icon name='star' size={26} />} onChange={(v) => {
                    console.log(v);
                }}/>
                <Input type='rate' disabled icon={<Icon name='star' size={26}/>}/>
            </Space>

            <Space dir="v">
                <Input type='autocomplete' data={nameData()} onSearch={(v: any) => {
                    const arr: any = [];
                    arr.push(v);
                    arr.push(v+v);
                    arr.push(v+v+v);
                    setNameData(arr);
                }}/>
            </Space>

            {/* <Space dir="h">
                <Input type='time'/>
                <Input type='time' format='HH:mm:ss' value={time} onChange={(v) => {
                    setTime(v);
                }}/>
                <Button type='primary' onClick={() => {
                    setTime('10:10:00')
                }}>修改</Button>
                <Input type='time' format='HH:mm:ss' clearable value={time} onChange={(v) => {
                    setTime(v);
                }}/>
            </Space>
            <Space dir="h">
                <Input type='time' size='large'/>
                <Input type='time'/>
                <Input type='time' size='small'/>
            </Space>
            <Space dir="h">
                <Input type='time' disabled/>
                <Input type='time' format='HH:mm'/>
                <Input type='time' value={time} onChange={(v) => {
                    setTime(v);
                }} disabledTime={(time, num, type) => {
                    if ((type === 'minute' || type === 'second') && time[0] === 12) {
                        return true;
                    }
                    return false;
                }}/>
            </Space>

            <Space dir="h">
                <Input type='timerange' value={timerange} onChange={(v) => {
                    setTimerange(v);
                }}/>

                <Input type='timerange' disabled/>

                <Input type='timerange' format='HH:mm' value={timerange2} onChange={(v) => {
                    setTimerange2(v);
                }}/>
            </Space>

            <Space dir="h">
                <Input type='date' value={dateTime} format='YYYY-MM-DD' onChange={(v) => {
                    console.log(v);
                    setDateTime(v);
                }}/>
                <Input type='date' disabled/>

                <Input type='date' value={dateTime} format='YYYY-MM-DD' onChange={(v) => {
                    console.log(v);
                    setDateTime(v);
                }} clearable/>
            </Space>

            <Space dir="h">
                <Input type='datetimerange' value={daterange} format='YYYY-MM-DD HH:mm:ss' onChange={(v) => {
                    console.log(v);
                    setDateRange(v);
                }}/>
                <Input type='datetimerange' disabled />
                <Input type='datetimerange' value={daterange} format='YYYY-MM-DD HH:mm:ss' onChange={(v) => {
                    console.log(v);
                    setDateRange(v);
                }} clearable/>
                <Button onClick={() => {
                    setDateRange('2022-06-01~2022-06-15');
                }}>修改值</Button>
            </Space> */}
        </Space>
    </View>
}

export default InputDemo;
