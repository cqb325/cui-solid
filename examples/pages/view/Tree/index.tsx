import { createSignal } from "solid-js";
import { Space } from "@/components/Layout";
import { Tree } from "@/components/Tree";
import { Title } from "@/components/Typography/Title";
import { Card } from "@/components/Card";
import { Divider } from "@/components/Divider";
import { Paragraph } from "@/components/Typography/Paragraph";
import { Text } from "@/components/Typography/Text";
import { DropdownItem, DropdownMenu } from "@/components/Dropdown";
import { Button } from "@/components/Button";
import { Table } from "@/components/Table";
import { eventsColumns, propsColumns } from "../../common/columns";
import { anchorData, codes, dataItemData, eventsData, propsData } from "./config";
import { CompAnchor } from "../../common/CompAnchor";
import { hljs, useDirective } from "../../common/hljs";
import { DemoCode } from "../../common/code";
useDirective(hljs);

export default function TreePage () {
    const [opened, setOpened]: any = createSignal(['zhejiang']);
    const [selected, setSelected]: any = createSignal('xihu');
    const [value, setValue]: any = createSignal([]);
    const [data11, setData11]: any = createSignal([{id: '1', title: '动态数据'}]);

    let tree: any;
    const data1 = [
        {id: 'beijing', title: '北京', children: [
            {id: 'gugong', title: '故宫'},
            {id: 'tiantan', title: '天坛'},
        ]},
        {id: 'zhejiang', title: '浙江', children: [
            {id: 'xihu', title: '西湖'},
            {id: 'linyin', title: '灵隐'},
        ]},
    ]

    const data2 = [
        {id: 'beijing', title: '北京', children: [
            {id: 'gugong', title: '故宫'},
            {id: 'tiantan', title: '天坛'},
        ]},
        {id: 'zhejiang', title: '浙江', children: [
            {id: 'xihu', title: '西湖'},
            {id: 'linyin', title: '灵隐'},
        ]},
    ]

    const data3 = [
        {id: 'beijing', title: '北京', children: [
            {id: 'gugong', title: '故宫'},
            {id: 'tiantan', title: '天坛'},
        ]},
        {id: 'zhejiang', title: '浙江', children: [
            {id: 'xihu', title: '西湖'},
            {id: 'linyin', title: '灵隐'},
        ]},
    ]

    const data4 = [
        {id: 'beijing', title: '北京', children: [
            {id: 'gugong', title: '故宫'},
            {id: 'tiantan', title: '天坛'},
        ]},
        {id: 'zhejiang', title: '浙江', children: [
            {id: 'xihu', title: '西湖'},
            {id: 'linyin', title: '灵隐'},
        ]},
    ]

    const data5 = [
        {id: 'beijing', title: '北京', children: [
            {id: 'gugong', title: '故宫'},
            {id: 'tiantan', title: '天坛'},
        ]},
        {id: 'zhejiang', title: '浙江', children: [
            {id: 'xihu', title: '西湖'},
            {id: 'linyin', title: '灵隐'},
        ]},
    ]
    const data6 = [
        {id: 'beijing', title: '北京', children: [
            {id: 'gugong', title: '故宫', disabled: true},
            {id: 'tiantan', title: '天坛'},
        ]},
        {id: 'zhejiang', title: '浙江', children: [
            {id: 'xihu', title: '西湖'},
            {id: 'linyin', title: '灵隐'},
        ]},
    ]
    const data7 = [
        {id: 'beijing', title: '北京', children: [
            {id: 'gugong', title: '故宫'},
            {id: 'tiantan', title: '天坛'},
        ]},
        {id: 'zhejiang', title: '浙江', children: [
            {id: 'xihu', title: '西湖'},
            {id: 'linyin', title: '灵隐'},
        ]},
    ]

    const data8 = [];
    for (let i = 0; i < 1 + Math.random() * 5; i++) {
        data8.push({title: `node_${i}`, id: `${i}`, loading: true});
    }

    const data9 = [
        {id: 'beijing', title: '北京', children: [
            {id: 'gugong', title: '故宫'},
            {id: 'tiantan', title: '天坛'},
        ]},
        {id: 'zhejiang', title: '浙江', children: [
            {id: 'xihu', title: '西湖'},
            {id: 'linyin', title: '灵隐'},
        ]},
    ]


    const data10 = [
        {id: 'beijing', title: '北京', children: [
            {id: 'gugong', title: '故宫'},
            {id: 'tiantan', title: '天坛'},
        ]},
        {id: 'zhejiang', title: '浙江', children: [
            {id: 'xihu', title: '西湖'},
            {id: 'linyin', title: '灵隐'},
        ]},
    ]

    return <>
        <div class="sys-ctx-main-left" use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    Tree 树状控件
                </Title>
                <Space id="tree_base" dir="v">
                    <Card bordered>
                        <Tree data={data1}/>
                        <Divider align="left"><Text type="primary">基础用法</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            Tree 传入data数据展示树状组件
                        </Paragraph>
                        <DemoCode data={codes['tree_base']}/>
                    </Card>
                </Space>

                <Space id="tree_opened" dir="v">
                    <Card bordered>
                        <Tree data={data2} opened={[opened, setOpened]}/>
                        <Divider align="left"><Text type="primary">默认展开</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            <Text code>opened</Text> 参数控制默认打开的节点
                        </Paragraph>
                        <DemoCode data={codes['tree_opened']}/>
                    </Card>
                </Space>


                <Space id="tree_selected" dir="v">
                    <Card bordered>
                        <Tree data={data3} opened={[opened, setOpened]} selected={[selected, setSelected]} onSelect={(node: any) => {
                            console.log(node);
                        }}/>
                        <Divider align="left"><Text type="primary">默认选中</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            <Text code>selected</Text> 参数控制选中的节点
                        </Paragraph>
                        <DemoCode data={codes['tree_selected']}/>
                    </Card>
                </Space>

                <Space id="tree_multi" dir="v">
                    <Card bordered>
                        <Tree data={data4} multi/>
                        <Divider align="left"><Text type="primary">级联多选</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            设置<Text code>multi</Text> 参数可以进行多选，默认级联
                        </Paragraph>
                        <DemoCode data={codes['tree_multi']}/>
                    </Card>
                </Space>


                <Space id="tree_multi_unrelate" dir="v">
                    <Card bordered>
                        <Tree data={data5} multi checkRelation="unRelated"/>
                        <Divider align="left"><Text type="primary">非级联多选</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            <Text code>checkRelation</Text> 参数可以设置多选场景下的级联情况，<Text code>unRelated</Text>非级联 <Text code>related</Text> 级联
                        </Paragraph>
                        <DemoCode data={codes['tree_multi_unrelate']}/>
                    </Card>
                </Space>


                <Space id="tree_disabled" dir="v">
                    <Card bordered>
                        <Tree data={data6} multi />
                        <Divider align="left"><Text type="primary">禁用</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            数据项添加 <Text code>disabled</Text> 参数可以禁用节点
                        </Paragraph>
                        <DemoCode data={codes['tree_disabled']}/>
                    </Card>
                </Space>


                <Space id="tree_directory" dir="v">
                    <Card bordered>
                        <Tree data={data7} multi directory />
                        <Divider align="left"><Text type="primary">目录图标</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            添加<Text code>directory</Text> 参数可以显示目录图标
                        </Paragraph>
                        <DemoCode data={codes['tree_directory']}/>
                    </Card>
                </Space>

                <Space id="tree_loadData" dir="v">
                    <Card bordered>
                        <Tree data={data8} multi directory loadData={(data: any) => {
                            return new Promise((resolve) => {
                                const d: any = [];
                                for (let i = 0; i < 1 + Math.random() * 5; i++) {
                                    d.push({title: `node_${data.id}_${i}`, id: `${data.id}_${i}`});
                                }
                                setTimeout(() => {
                                    resolve(d);
                                }, 1000);
                            });
                        }}/>
                        <Divider align="left"><Text type="primary">动态加载</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            数据项存在<Text code>loading</Text> 参数， 可通过 <Text code>loadData</Text> 方法动态加载子节点
                        </Paragraph>
                        <DemoCode data={codes['tree_loadData']}/>
                    </Card>
                </Space>


                <Space id="tree_contextmenu" dir="v">
                    <Card bordered>
                        <Tree data={data9} multi directory onContextMenu={(data: any) => {
                            console.log(data);
                        }} contextMenu={<DropdownMenu>
                            <DropdownItem name="add">添加</DropdownItem>
                            <DropdownItem name="modity">修改</DropdownItem>
                        </DropdownMenu>} onSelectMenu={(name: string) => {
                            console.log(name);
                        }}/>
                        <Divider align="left"><Text type="primary">右键菜单</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            数据项存在<Text code>loading</Text> 参数， 可通过 <Text code>loadData</Text> 方法动态加载子节点
                        </Paragraph>
                        <DemoCode data={codes['tree_contextmenu']}/>
                    </Card>
                </Space>


                <Space id="tree_methods" dir="v">
                    <Card bordered>
                        <Tree data={data10} multi directory ref={tree}/>

                        <Space dir="v">
                            <Space dir="h">
                                <Button onClick={() => {
                                    tree.checkNode('xihu', true);
                                }}>勾选</Button>
                            </Space>
                            <Space>
                                <Button type="primary" onClick={() => {
                                    console.log(tree.getAllChecked());
                                }}>AllChecked</Button>
                                <Button type="primary" onClick={() => {
                                    console.log(tree.getHalfChecked());
                                }}>HalfChecked</Button>
                                <Button type="primary" onClick={() => {
                                    console.log(tree.getChildChecked());
                                }}>ChildChecked</Button>
                                <Button type="primary" onClick={() => {
                                    console.log(tree.getShallowChecked());
                                }}>Shallow</Button>
                            </Space>
                        </Space>
                        <Divider align="left"><Text type="primary">接口</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            数据项存在<Text code>loading</Text> 参数， 可通过 <Text code>loadData</Text> 方法动态加载子节点
                        </Paragraph>
                        <DemoCode data={codes['tree_methods']}/>
                    </Card>
                </Space>


                <Space id="tree_data" dir="v">
                    <Card bordered>
                        <Tree data={data11()} multi directory/>
                        <Button type="primary" onClick={() => {
                            const da = [];
                            for (let i = 0; i < 1 + Math.random() * 5; i++) {
                                const c = [];
                                for (let j = 0; j < 1 + Math.random() * 5; j++) {
                                    c.push({title: `node_${i}_${j}`, id: `${i}_${j}`});
                                }
                                da.push({title: `node_${i}`, id: `${i}`, children: c});
                            }
                            setData11(da)
                        }}>改变数据</Button>
                        <Divider align="left"><Text type="primary">可控数据</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            数据项存在<Text code>loading</Text> 参数， 可通过 <Text code>loadData</Text> 方法动态加载子节点
                        </Paragraph>
                        <DemoCode data={codes['tree_data']}/>
                    </Card>
                </Space>


                <Space dir="v" size={24} id="comp_api">
                    <Title type="primary" heading={3}>API</Title>
                    <Space id="comp_props" dir="v">
                        <Title type="primary" heading={4}>Tree Props</Title>
                        <Table columns={propsColumns} data={propsData} border size="small" />
                    </Space>

                    <Space id="comp_dataprops" dir="v">
                        <Title type="primary" heading={4}>数据项属性</Title>
                        <Table columns={propsColumns} data={dataItemData} border size="small" />
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
