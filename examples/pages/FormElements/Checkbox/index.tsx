import { Checkbox } from "@/components/FormElements/Checkbox"
import { CheckboxGroup } from "@/components/FormElements/CheckboxGroup"
import { Space } from "@/components/Layout";
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
useDirective(hljs);

function CheckboxPage () {
    return <>
        <div class="sys-ctx-main-left" use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    Checkbox 多选框
                </Title>

                <Space id="checkbox_base" dir="v">
                    <Card bordered>
                        <Checkbox name="type" value="1" label="苹果" />
                        <Divider align="left"><Text type="primary">基础用法</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            Checkbox的基础用法
                        </Paragraph>
                        <DemoCode data={codes['checkbox_base']}/>
                    </Card>
                </Space>

                <Space id="checkbox_disabled" dir="v">
                    <Card bordered>
                        <Checkbox disabled value="1" label="苹果" />
                        <Divider align="left"><Text type="primary">禁用</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            使用 disabled 禁用 选择框
                        </Paragraph>
                        <DemoCode data={codes['checkbox_disabled']}/>
                    </Card>
                </Space>

                <Space id="checkbox_group" dir="v">
                    <Card bordered>
                        <CheckboxGroup data={[{label: '苹果', value: '1'}, {label: '桃子', value: '2'}]} />
                        <Divider align="left"><Text type="primary">组合</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            使用 CheckboxGroup 组件进行组合
                        </Paragraph>
                        <DemoCode data={codes['checkbox_group']}/>
                    </Card>
                </Space>


                <Space id="checkbox_group_disabled" dir="v">
                    <Card bordered>
                        <Space dir="v">
                            <CheckboxGroup data={[{label: '苹果', value: '1', disabled: true}, {label: '桃子', value: '2'}]} />
                            <CheckboxGroup disabled data={[{label: '苹果', value: '1'}, {label: '桃子', value: '2'}]} />
                        </Space>
                        <Divider align="left"><Text type="primary">组合禁用</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            使用 CheckboxGroup 的 disabled 属性可禁用整个组合， 数据项中的 disabled 属性可禁用组合项
                        </Paragraph>
                        <DemoCode data={codes['checkbox_group_disabled']}/>
                    </Card>
                </Space>

                <Space id="checkbox_block" dir="v">
                    <Card bordered>
                        <Space dir="v">
                            <CheckboxGroup block data={[{label: '苹果', value: '1'}, {label: '桃子', value: '2'}]} />
                        </Space>
                        <Divider align="left"><Text type="primary">垂直排列</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            使用 block 属性进行垂直排列
                        </Paragraph>
                        <DemoCode data={codes['checkbox_block']}/>
                    </Card>
                </Space>


                <Space id="checkbox_field" dir="v">
                    <Card bordered>
                        <Space dir="v">
                            <CheckboxGroup textField="title" valueField="id" data={[{title: '苹果', id: '1'}, {title: '桃子', id: '2'}]} onChange={(v: any) => {
                                console.log(v);
                            }} />
                        </Space>
                        <Divider align="left"><Text type="primary">自定义字段</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            使用 <Text code>data</Text> 传入数据时， 可通过 <Text code>textField</Text> <Text code>valueField</Text> 选择显示的字段和值字段
                        </Paragraph>
                        <DemoCode data={codes['checkbox_field']}/>
                    </Card>
                </Space>

                <Space dir="v" size={24} id="comp_api">
                    <Title type="primary" heading={3}>API</Title>
                    <Space id="comp_props" dir="v">
                        <Title type="primary" heading={4}>Checkbox Props</Title>
                        <Table columns={propsColumns} data={propsData} border size="small" />
                    </Space>
                    <Space id="comp_props" dir="v">
                        <Title type="primary" heading={4}>CheckboxGroup Props</Title>
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
