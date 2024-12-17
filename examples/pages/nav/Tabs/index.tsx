import { Tabs, TabPane } from "@/components/Tabs"
import { Space } from "@/components/Layout"
import { For, createSignal } from "solid-js"
import { Button } from "@/components/Button";
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
import { FeatherCodesandbox, FeatherCommand, FeatherSlack } from "cui-solid-icons/feather";
import { DropdownItem, DropdownMenu, Radio, RadioGroup } from "@/components";
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

    const data2 = new Array(10).fill(1).map(() => ({
        title: `标签${index++}`,
        name: `tab${index}`,
        context: '标签内容'
    }))

    const [type, setType] = createSignal<'line'|'card'|'button'>('line');

    return <>
        <div class="sys-ctx-main-left" style={{width: 0}} use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    Tabs 标签页
                </Title>
                <Space id="tabs_base" dir="v">
                    <Card bordered>
                        <Space dir="v">
                            <Tabs activeName="tab1" duration={200} keepHeight>
                                <TabPane title="标签一" name="tab1">
                                    <p>标签一的内容</p>
                                    <p>标签一的内容</p>
                                    <p>标签一的内容</p>
                                </TabPane>
                                <TabPane title="标签二" name="tab2">标签二的内容</TabPane>
                                <TabPane title="标签三" name="tab3">标签三的内容</TabPane>
                            </Tabs>


                            <Tabs activeName="tab1" centered>
                                <TabPane title="标签一" name="tab1">标签一的内容</TabPane>
                                <TabPane title="标签二" name="tab2">标签二的内容</TabPane>
                                <TabPane title="标签三" name="tab3">标签三的内容</TabPane>
                            </Tabs>

                            <Tabs activeName="tab1" bordered>
                                <TabPane title="标签一" name="tab1">标签一的内容</TabPane>
                                <TabPane title="标签二" name="tab2">标签二的内容</TabPane>
                                <TabPane title="标签三" name="tab3">标签三的内容</TabPane>
                            </Tabs>

                            <Tabs activeName="tab1" bordered centered>
                                <TabPane title="标签一" name="tab1">标签一的内容</TabPane>
                                <TabPane title="标签二" name="tab2">标签二的内容</TabPane>
                                <TabPane title="标签三" name="tab3">标签三的内容</TabPane>
                            </Tabs>
                        </Space>
                        <Divider align="left"><Text type="primary">基础用法</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            Tabs的activeName与Tab的name对应，用于标识当前激活的是哪一项
                        </Paragraph>
                        <DemoCode data={codes['tabs_base']}/>
                    </Card>
                </Space>


                <Space dir="v">
                    <Card bordered>
                        <Tabs activeName="tab1" align="top">
                            <TabPane title="标签一" name="tab1">标签一的内容</TabPane>
                            <TabPane title="标签二" name="tab2">标签二的内容</TabPane>
                            <TabPane title="标签三" name="tab3">标签三的内容</TabPane>
                        </Tabs>

                        <Tabs activeName="tab1" align="bottom">
                            <TabPane title="标签一" name="tab1">标签一的内容</TabPane>
                            <TabPane title="标签二" name="tab2">标签二的内容</TabPane>
                            <TabPane title="标签三" name="tab3">标签三的内容</TabPane>
                        </Tabs>

                        <Tabs activeName="tab1" align="left">
                            <TabPane title="标签一" name="tab1" closeable>标签一的内容</TabPane>
                            <TabPane title="标签二" name="tab2">标签二的内容</TabPane>
                            <TabPane title="标签三" name="tab3">标签三的内容</TabPane>
                        </Tabs>

                        <Tabs activeName="tab1" align="right">
                            <TabPane title="标签一" name="tab1" closeable>标签一的内容</TabPane>
                            <TabPane title="标签二" name="tab2">标签二的内容</TabPane>
                            <TabPane title="标签三" name="tab3">标签三的内容</TabPane>
                        </Tabs>

                        <Divider align="left"><Text type="primary">基础用法</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            Tabs的activeName与Tab的name对应，用于标识当前激活的是哪一项
                        </Paragraph>
                        <DemoCode data={codes['tabs_base']}/>
                    </Card>
                </Space>


                <Space dir="v">
                    <Card bordered>
                        <Tabs activeName="tab1" align="top">
                            <TabPane title="标签一" name="tab1">标签一的内容</TabPane>
                            <TabPane title="标签二" name="tab2">标签二的内容</TabPane>
                            <TabPane title="标签三" name="tab3">标签三的内容</TabPane>
                        </Tabs>
                        <Tabs activeName="tab1" align="top" type="card">
                            <TabPane title="标签一" name="tab1">标签一的内容</TabPane>
                            <TabPane title="标签二" name="tab2">标签二的内容</TabPane>
                            <TabPane title="标签三" name="tab3">标签三的内容</TabPane>
                        </Tabs>
                        <Tabs activeName="tab1" align="top" type="button">
                            <TabPane title="标签一" name="tab1" closeable>标签一的内容</TabPane>
                            <TabPane title="标签二" name="tab2">标签二的内容</TabPane>
                            <TabPane title="标签三" name="tab3">标签三的内容</TabPane>
                        </Tabs>
                    </Card>
                </Space>


                <Space id="tabs_disabled" dir="v">
                    <Card bordered>
                        <Tabs activeName="tab1">
                            <TabPane title="标签一" name="tab1">标签一的内容</TabPane>
                            <TabPane title="标签二" disabled name="tab2">标签二的内容</TabPane>
                            <TabPane title="标签三" name="tab3">标签三的内容</TabPane>
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
                            <TabPane title="标签一" name="tab1">标签一的内容</TabPane>
                            <TabPane title="标签二" name="tab2">标签二的内容</TabPane>
                            <TabPane title="标签三" name="tab3">标签三的内容</TabPane>
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
                            <TabPane title="标签一" name="tab1" icon={<FeatherCodesandbox />}>标签一的内容</TabPane>
                            <TabPane title="标签二" name="tab2" icon={<FeatherCommand />}>标签二的内容</TabPane>
                            <TabPane title="标签三" name="tab3" icon={<FeatherSlack />}>标签三的内容</TabPane>
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
                        <Tabs activeName="tab1" type="card">
                            <TabPane title="标签一" name="tab1">标签一的内容</TabPane>
                            <TabPane title="标签二" name="tab2">标签二的内容</TabPane>
                            <TabPane title="标签三" name="tab3">标签三的内容</TabPane>
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
                        <Tabs activeName="tab1" append={<Button size="small">Append extra</Button>} prepend={<Button size="small">Prepend Extra</Button>}>
                            <TabPane title="标签一" name="tab1">标签一的内容</TabPane>
                            <TabPane title="标签二" name="tab2">标签二的内容</TabPane>
                            <TabPane title="标签三" name="tab3">标签三的内容</TabPane>
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
                        <Tabs activeName="tab1" more moreDropdownProps={{
                            arrow: true,
                        }} type="button" buttonTheme="outline" maxTabSize={90}
                        contextMenu={<DropdownMenu>
                            <DropdownItem name="menu1">驴打滚</DropdownItem>
                            <DropdownItem name="menu2">炸酱面</DropdownItem>
                        </DropdownMenu>}
                        onContextMenu={(item) => {
                            console.log('onContextMenu', item);
                        }}
                        onSelectContextMenu={(name, item) => {
                            console.log(name, item, 'onSelectContextMenu');
                        }}
                        onRemove={(name) => {
                            const arr = data();
                            const index = arr.findIndex((item: any) => item.name === name)
                            arr.splice(index, 1);
                            console.log(arr);

                            setData(arr);
                        }} onTabClick={(item) => {
                            console.log(item, 'tab click');
                        }}>
                            <For each={data()}>
                                {(item: any)=> {
                                    return <TabPane title={item.title} name={item.name} closeable />
                                }}
                            </For>
                        </Tabs>
                        <Button type="primary" onClick={() => {
                            const i = index ++;
                            setData([...data(), {
                                title: `${i}_Title_Title_Title`,
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


                <Space dir="v">
                    <Card bordered>
                        <RadioGroup value={[type, setType]} stick data={[{label: 'Line', value: 'line'}, {label: 'Card', value: 'card'}, {label: 'Button', value: 'button'}]}/>
                        <Tabs activeName="tab1" more arrowPosition="both" type={type()} style={{width: '500px'}}>
                            <For each={data2}>
                                {(item: any)=> {
                                    return <TabPane title={item.title} name={item.name}>{item.context}</TabPane>
                                }}
                            </For>
                        </Tabs>
                        <Space>
                            <Tabs activeName="tab1" align="left" more arrowPosition="both" type={type()} style={{height: '250px'}}>
                                <For each={data2}>
                                    {(item: any)=> {
                                        return <TabPane title={item.title} name={item.name}>{item.context}</TabPane>
                                    }}
                                </For>
                            </Tabs>
                            <Tabs activeName="tab1" align="right" more arrowPosition="both" type={type()} style={{height: '250px'}}>
                                <For each={data2}>
                                    {(item: any)=> {
                                        return <TabPane title={item.title} name={item.name}>{item.context}</TabPane>
                                    }}
                                </For>
                            </Tabs>
                        </Space>
                        <Tabs activeName="tab1" align="bottom" more arrowPosition="both" type={type()} style={{width: '500px'}}>
                            <For each={data2}>
                                {(item: any)=> {
                                    return <TabPane title={item.title} name={item.name}>{item.context}</TabPane>
                                }}
                            </For>
                        </Tabs>
                    </Card>
                </Space>


                <Space dir="v">
                    <Card bordered>
                        <Space dir="v" size={24}>
                            <Tabs activeName="tab1" more arrowPosition="both" align="left" type="button" style={{height: '150px'}}>
                                <For each={data2}>
                                    {(item: any)=> {
                                        return <TabPane title={item.title} name={item.name}>{item.context}</TabPane>
                                    }}
                                </For>
                            </Tabs>
                            <Tabs activeName="tab1" more arrowPosition="start" align="left" type="button" style={{height: '150px'}}>
                                <For each={data2}>
                                    {(item: any)=> {
                                        return <TabPane title={item.title} name={item.name}>{item.context}</TabPane>
                                    }}
                                </For>
                            </Tabs>
                            <Tabs activeName="tab1" more arrowPosition="end" align="left" type="button" style={{height: '150px'}}>
                                <For each={data2}>
                                    {(item: any)=> {
                                        return <TabPane title={item.title} name={item.name}>{item.context}</TabPane>
                                    }}
                                </For>
                            </Tabs>
                        </Space>
                    </Card>
                </Space>


                <Space dir="v">
                    <Card bordered>
                        <Tabs activeName="tab1" more align="left" type="button" style={{height: '250px'}}>
                            <For each={data2}>
                                {(item: any)=> {
                                    return <TabPane title={item.title} name={item.name}>{item.context}</TabPane>
                                }}
                            </For>
                        </Tabs>
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
