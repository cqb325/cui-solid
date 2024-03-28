import { createSignal } from "solid-js";
import { Checkbox } from "@/components/FormElements/Checkbox"
import { CheckboxGroup } from "@/components/FormElements/CheckboxGroup"
import { Space } from "@/components/Layout";
import { Button } from "@/components/Button";
import { Radio } from "@/components/FormElements/Radio";
import { RadioGroup } from "@/components/FormElements/RadioGroup";
import { Title } from "@/components/Typography/Title";
import { Card } from "@/components/Card";
import { Divider } from "@/components/Divider";
import { Text } from "@/components/Typography/Text";
import { Paragraph } from "@/components/Typography/Paragraph";
import { Table } from "@/components/Table";
import { eventsColumns, propsColumns } from "../../common/columns";
import { anchorData, codes, eventsData, groupPropsData, propsData } from "./config";
import { CompAnchor } from "../../common/CompAnchor";
import { hljs, useDirective } from "../../common/hljs";
import { DemoCode } from "../../common/code";
import { Avatar } from "@/components/Avatar";
useDirective(hljs);

function CheckboxPage () {
    const [sex, setSex] = createSignal(false);

    return <>
        <div class="sys-ctx-main-left" use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    Radio 单选框
                </Title>

                <Space id="radio_base" dir="v">
                    <Card bordered>
                        <Radio name="sex" value="1" label="男" checked={[sex, setSex]}/>
                        <Divider align="left"><Text type="primary">基础用法</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            Radio的基础用法
                        </Paragraph>
                        <DemoCode data={codes['radio_base']}/>
                    </Card>
                </Space>

                <Space id="radio_disabled" dir="v">
                    <Card bordered>
                        <Radio disabled value="1" label="男" />
                        <Divider align="left"><Text type="primary">禁用</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            使用 disabled 禁用 选择框
                        </Paragraph>
                        <DemoCode data={codes['radio_disabled']}/>
                    </Card>
                </Space>

                <Space id="radio_group" dir="v">
                    <Card bordered>
                        <RadioGroup data={[{label: '苹果', value: '1'}, {label: '桃子', value: '2'}]} />
                        <Divider align="left"><Text type="primary">组合</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            使用 RadioGroup 组件进行组合
                        </Paragraph>
                        <DemoCode data={codes['radio_group']}/>
                    </Card>
                </Space>


                <Space id="radio_group_disabled" dir="v">
                    <Card bordered>
                        <Space dir="v">
                            <RadioGroup data={[{label: '苹果', value: '1', disabled: true}, {label: '桃子', value: '2'}]} />
                            <RadioGroup disabled data={[{label: '苹果', value: '1'}, {label: '桃子', value: '2'}]} />
                        </Space>
                        <Divider align="left"><Text type="primary">组合禁用</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            使用 RadioGroup 的 disabled 属性可禁用整个组合， 数据项中的 disabled 属性可禁用组合项
                        </Paragraph>
                        <DemoCode data={codes['radio_group_disabled']}/>
                    </Card>
                </Space>

                <Space id="radio_stick" dir="v">
                    <Card bordered>
                        <Space dir="v">
                            <Space dir="h">
                                <RadioGroup stick value={'1'} data={[{label: '苹果', value: '1'}, {label: '桃子', value: '2'}, {label: '香蕉', value: '3'}]} />
                                <RadioGroup disabled stick value={'1'} data={[{label: '苹果', value: '1'}, {label: '桃子', value: '2'}, {label: '香蕉', value: '3'}]} />
                                <RadioGroup stick value={'1'} data={[{label: '苹果', value: '1'}, {label: '桃子', value: '2', disabled: true}, {label: '香蕉', value: '3'}]} />
                            </Space>
                            <Space dir="h">
                                <RadioGroup stick value={'1'} data={[{label: <Space dir="v"><Avatar /><label>苹果</label></Space>, value: '1'},
                                {label: <Space dir="v"><Avatar /><label>桃子</label></Space>, value: '2'},
                                {label: <Space dir="v"><Avatar /><label>香蕉</label></Space>, value: '3'}]} />
                            </Space>
                            <Space dir="v">
                                <RadioGroup stick block value={'1'} data={[{label: '苹果', value: '1'}, {label: '桃子', value: '2'}, {label: '香蕉', value: '3'}]} />
                            </Space>
                        </Space>
                        <Divider align="left"><Text type="primary">按钮样式</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            使用 stick 属性显示按钮组的样式
                        </Paragraph>
                        <DemoCode data={codes['radio_stick']}/>
                    </Card>
                </Space>


                <Space id="radio_field" dir="v">
                    <Card bordered>
                        <Space dir="v">
                            <RadioGroup textField="title" valueField="id" data={[{title: '苹果', id: '1'}, {title: '桃子', id: '2'}]} onChange={(v: any) => {
                                console.log(v);
                            }} />
                        </Space>
                        <Divider align="left"><Text type="primary">自定义字段</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            使用 <Text code>data</Text> 传入数据时， 可通过 <Text code>textField</Text> <Text code>valueField</Text> 选择显示的字段和值字段
                        </Paragraph>
                        <DemoCode data={codes['radio_field']}/>
                    </Card>
                </Space>


                <Space dir="v" size={24} id="comp_api">
                    <Title type="primary" heading={3}>API</Title>
                    <Space id="comp_props" dir="v">
                        <Title type="primary" heading={4}>Radio Props</Title>
                        <Table columns={propsColumns} data={propsData} border size="small" />
                    </Space>
                    <Space id="comp_props" dir="v">
                        <Title type="primary" heading={4}>RadioGroup Props</Title>
                        <Table columns={propsColumns} data={groupPropsData} border size="small" />
                    </Space>
                    <Space id="comp_events" dir="v">
                        <Title type="primary" heading={4}>Events</Title>
                        <Table columns={eventsColumns} data={eventsData} border size="small" />
                    </Space>
                </Space>
            </Space>
        </div>

        <CompAnchor data={anchorData}/>
    </>
}

export default CheckboxPage;
