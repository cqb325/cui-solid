import { Input } from "@/components/FormElements/Input";
import { Space } from "@/components/Layout";
import { Icon } from "@/components/Icon";
import { Button } from "@/components/Button";
import { createSignal } from "solid-js";
import { Title } from "@/components/Typography/Title";
import { Card } from "@/components/Card";
import { Divider } from "@/components/Divider";
import { Text } from "@/components/Typography/Text";
import { Paragraph } from "@/components/Typography/Paragraph";
import { Table } from "@/components/Table";
import { eventsColumns, propsColumns } from "../../common/columns";
import { anchorData, codes, eventsData, propsData } from "./config";
import { CompAnchor } from "../../common/CompAnchor";
import { hljs, useDirective } from "../../common/hljs";
import { DemoCode } from "../../common/code";
useDirective(hljs);

function InputDemo () {
    const [count, setCount] = createSignal(1);
    const [spinner, setSpinner] = createSignal(1);
    // const [time, setTime] = useState(new Date());
    // const [timerange, setTimerange] = useState();
    // const [timerange2, setTimerange2] = useState();
    // const [dateTime, setDateTime] = useState('2022-01-01');
    // const [daterange, setDateRange] = useState('2022-01-01~2022-01-08');
    const [nameData, setNameData] = createSignal([]);
    return <>
        <div class='sys-ctx-main-left'>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    Input 输入框
                </Title>
                <Space id="input_base" dir="v">
                    <Card bordered>
                        <Input />
                        <Divider align="left"><Text type="primary">基础用法</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            Input的基础用法
                        </Paragraph>
                        <DemoCode data={codes['input_base']}/>
                    </Card>
                </Space>

                <Space id="input_disabled" dir="v">
                    <Card bordered>
                        <Input disabled value='disabled'/>
                        <Divider align="left"><Text type="primary">禁用</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            使用 disabled 可以禁用 Input
                        </Paragraph>
                        <DemoCode data={codes['input_disabled']}/>
                    </Card>
                </Space>


                <Space id="input_placeholder" dir="v">
                    <Card bordered>
                        <Input placeholder='请输入xxx'/>
                        <Divider align="left"><Text type="primary">placeholder</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            使用 placeholder 的样例
                        </Paragraph>
                        <DemoCode data={codes['input_placeholder']}/>
                    </Card>
                </Space>


                <Space id="input_clearable" dir="v">
                    <Card bordered>
                        <Input value='1' clearable/>
                        <Divider align="left"><Text type="primary">可清空</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            使用 clearable 属性， 有值时可以进行清空
                        </Paragraph>
                        <DemoCode data={codes['input_clearable']}/>
                    </Card>
                </Space>


                <Space id="input_control" dir="v">
                    <Card bordered>
                        <Space dir="h">
                            <Input value={[count, setCount]}/>
                            <Button onClick={() => {
                                setCount(count() + 1);
                            }}>Add</Button>
                        </Space>
                        <Divider align="left"><Text type="primary">可控</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            <Text code>value</Text> 属性是可控属性
                        </Paragraph>
                        <DemoCode data={codes['input_control']}/>
                    </Card>
                </Space>

                <Space id="input_prefix" dir="v">
                    <Card bordered>
                        <Input name='count' prefix='￥' suffix='元'/>
                        <Divider align="left"><Text type="primary">前缀后缀</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            使用<Text code>prefix</Text> 可以给Input添加前缀， 使用<Text code>suffix</Text>属性可添加后缀
                        </Paragraph>
                        <DemoCode data={codes['input_prefix']}/>
                    </Card>
                </Space>


                <Space id="input_append" dir="v">
                    <Card bordered>
                        <Input prepend={<Icon name='user'/>} append={<Icon name='search1'/>}/>
                        <Divider align="left"><Text type="primary">追加</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            使用<Text code>prepend</Text> 可添加前追加， 使用<Text code>append</Text>属性可添加后追加
                        </Paragraph>
                        <DemoCode data={codes['input_append']}/>
                    </Card>
                </Space>


                <Space id="input_size" dir="v">
                    <Card bordered>
                        <Space dir="h">
                            <Input clearable size='large'/><Input clearable/><Input clearable size='small'/>
                        </Space>
                        <Divider align="left"><Text type="primary">尺寸</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            <Text code>size</Text> 属性支持 <Text code>small</Text> <Text code>large</Text> 默认尺寸中
                        </Paragraph>
                        <DemoCode data={codes['input_size']}/>
                    </Card>
                </Space>

                {/* <Space id="image_base" dir="v">
                    <Input clearable value={[count, setCount]}/>
                    <Input disabled value='disabled'/>
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
                            console.log(1);
                            
                            const arr: any = [];
                            arr.push(v);
                            arr.push(v+v);
                            arr.push(v+v+v);
                            setNameData(arr);
                        }}/>
                    </Space>
                </Space> */}


                <Space dir="v" size={24} id="comp_api">
                    <Title type="primary" heading={3}>API</Title>
                    <Space id='comp_props' dir="v">
                        <Title type="primary" heading={4}>Input Props</Title>
                        <Table columns={propsColumns} data={propsData} border size='small' />
                    </Space>
                    <Space id='comp_events' dir="v">
                        <Title type="primary" heading={4}>Input Events</Title>
                        <Table columns={eventsColumns} data={eventsData} border size="small" />
                    </Space>
                </Space>
            </Space>
        </div>
        <Space dir='v'>
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

        <CompAnchor data={anchorData}/>
    </>
}

export default InputDemo;
