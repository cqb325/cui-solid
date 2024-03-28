import { Tabs, Tab } from "@/components/Tabs"
import { Space } from "@/components/Layout"
import { For, createSignal } from "solid-js"
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { Title } from "@/components/Typography/Title";
import { Card } from "@/components/Card";
import { Divider } from "@/components/Divider";
import { Text } from "@/components/Typography/Text";
import { Paragraph } from "@/components/Typography/Paragraph";
import { Table } from "@/components/Table";
import { anchorData, codes, eventsData, propsData, tabpropsData } from "./config";
import { CompAnchor } from "../../common/CompAnchor";
import { eventsColumns, propsColumns } from "../../common/columns";
import { hljs, useDirective } from "../../common/hljs";
import { DemoCode } from "../../common/code";
useDirective(hljs);

export default function TabsPage () {
    const [data, setData]: [any, any] = createSignal([
        {
            title: `标签一`,
            name: `tab1`,
            context: '标签一内容'
        }
    ]);
    let index = 1;

    return <>
        <div class="sys-ctx-main-left" style={{width: 0}} use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    Tabs 标签页
                </Title>
                <Space id="tabs_base" dir="v">
                    <Card bordered>
                        <Tabs activeName="tab1">
                            <Tab title="标签一" name="tab1">标签一的内容</Tab>
                            <Tab title="标签二" name="tab2">标签二的内容</Tab>
                            <Tab title="标签三" name="tab3">标签三的内容</Tab>
                        </Tabs>

                        <Divider align="left"><Text type="primary">基础用法</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            Tabs的activeName与Tab的name对应，用于标识当前激活的是哪一项
                        </Paragraph>
                        <DemoCode data={codes['tabs_base']}/>
                    </Card>
                </Space>


                <Space id="tabs_disabled" dir="v">
                    <Card bordered>
                        <Tabs activeName="tab1">
                            <Tab title="标签一" name="tab1">标签一的内容</Tab>
                            <Tab title="标签二" disabled name="tab2">标签二的内容</Tab>
                            <Tab title="标签三" name="tab3">标签三的内容</Tab>
                        </Tabs>

                        <Divider align="left"><Text type="primary">禁用</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            使用 <Text code>disabled</Text> 可以禁用某一项
                        </Paragraph>
                        <DemoCode data={codes['tabs_disabled']}/>
                    </Card>
                </Space>


                <Space id="tabs_duration" dir="v">
                    <Card bordered>
                        <Tabs activeName="tab1" duration={0}>
                            <Tab title="标签一" name="tab1">标签一的内容</Tab>
                            <Tab title="标签二" name="tab2">标签二的内容</Tab>
                            <Tab title="标签三" name="tab3">标签三的内容</Tab>
                        </Tabs>

                        <Divider align="left"><Text type="primary">动画时间</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            使用 <Text code>duration</Text> 可以修改动画时间
                        </Paragraph>
                        <DemoCode data={codes['tabs_duration']}/>
                    </Card>
                </Space>


                <Space id="tabs_icon" dir="v">
                    <Card bordered>
                        <Tabs activeName="tab1">
                            <Tab title="标签一" name="tab1" icon={<Icon name="codesandbox"/>}>标签一的内容</Tab>
                            <Tab title="标签二" name="tab2" icon={<Icon name="command"/>}>标签二的内容</Tab>
                            <Tab title="标签三" name="tab3" icon={<Icon name="support"/>}>标签三的内容</Tab>
                        </Tabs>

                        <Divider align="left"><Text type="primary">图标</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            使用 <Text code>icon</Text> 可以给Tab添加图标
                        </Paragraph>
                        <DemoCode data={codes['tabs_icon']}/>
                    </Card>
                </Space>


                <Space id="tabs_card" dir="v">
                    <Card bordered>
                        <Tabs activeName="tab1" card>
                            <Tab title="标签一" name="tab1">标签一的内容</Tab>
                            <Tab title="标签二" name="tab2">标签二的内容</Tab>
                            <Tab title="标签三" name="tab3">标签三的内容</Tab>
                        </Tabs>

                        <Divider align="left"><Text type="primary">卡片</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            设置属性 <Text code>type</Text> 为 <Text code>card</Text> 可以显示卡片样式，常用于容器顶部。
                        </Paragraph>
                        <DemoCode data={codes['tabs_card']}/>
                    </Card>
                </Space>


                <Space id="tabs_extra" dir="v">
                    <Card bordered>
                        <Tabs activeName="tab1" extra={<Button size="small">添加</Button>}>
                            <Tab title="标签一" name="tab1">标签一的内容</Tab>
                            <Tab title="标签二" name="tab2">标签二的内容</Tab>
                            <Tab title="标签三" name="tab3">标签三的内容</Tab>
                        </Tabs>

                        <Divider align="left"><Text type="primary">附加内容</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            使用 <Text code>extra</Text> 可以在页签右边添加附加操作
                        </Paragraph>
                        <DemoCode data={codes['tabs_extra']}/>
                    </Card>
                </Space>


                <Space id="tabs_danymic" dir="v">
                    <Card bordered>
                        <Tabs activeName="tab1" card>
                            <For each={data()}>
                                {(item: any)=> {
                                    return <Tab title={item.title} name={item.name} closeable>{item.context}</Tab>
                                }}
                            </For>
                        </Tabs>
                        <Button type="primary" onClick={() => {
                            const i = index ++;
                            setData([...data(), {
                                title: `Title_${i}`,
                                name: `tab_${i}`,
                                context: '新增tab内容'
                            }]);
                        }}>添加</Button>

                        <Divider align="left"><Text type="primary">动态tab</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            Tab添加 closeable 属性可以支持关闭Tab页。
                        </Paragraph>
                        <DemoCode data={codes['tabs_danymic']}/>
                    </Card>
                </Space>


                <Space dir="v" size={24} id="comp_api">
                    <Title type="primary" heading={3}>API</Title>
                    <Space id="comp_props" dir="v">
                        <Title type="primary" heading={4}>Tabs Props</Title>
                        <Table columns={propsColumns} data={propsData} border size="small" />
                    </Space>

                    <Space id="comp_tab_props" dir="v">
                        <Title type="primary" heading={4}>Tab Props</Title>
                        <Table columns={propsColumns} data={tabpropsData} border size="small" />
                    </Space>

                    <Space id="comp_events" dir="v">
                        <Title type="primary" heading={4}>Tabs Events</Title>
                        <Table columns={eventsColumns} data={eventsData} border size="small" />
                    </Space>
                </Space>
            </Space>
        </div>

        <CompAnchor data={anchorData} />
    </>
}
