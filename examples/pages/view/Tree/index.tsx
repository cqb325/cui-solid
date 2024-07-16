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
import { Icon, Input } from "@/components";
import arrow from './arrow.png';
import { TreeCheckMod } from "@/components/Tree";
import type { NodeKeyType, TreeInstanceProps, TreeNode } from "@/components/Tree";
import genData from './utils';
useDirective(hljs);

export default function TreePage () {
    const [opened, setOpened]: any = createSignal(['zhejiang']);
    const [selected, setSelected]: any = createSignal('xihu');
    const [value, setValue]: any = createSignal([]);
    const [data11, setData11]: any = createSignal([{id: '1', title: '动态数据'}]);

    let tree: any;
    let treeSearch: any;
    let tree19: TreeInstanceProps | undefined;
    let tree20: any;
    let tree21: any;
    let tree22: any;
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
        {id: 'beijing', title: '北京', expand: true, children: [
            {id: 'gugong', title: '故宫'},
            {id: 'tiantan', title: '天坛'},
        ]},
        {id: 'zhejiang', title: '浙江', expand: true, children: [
            {id: 'xihu', title: '西湖'},
            {id: 'linyin', title: '灵隐'},
        ]},
    ]

    const data3 = [
        {id: 'beijing', title: '北京', children: [
            {id: 'gugong', title: '故宫'},
            {id: 'tiantan', title: '天坛'},
        ]},
        {id: 'zhejiang', title: '浙江', expand: true, children: [
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

    const data12 = [
        {id: 'beijing', title: '北京', children: [
            {id: 'gugong', title: '故宫'},
            {id: 'tiantan', title: '天坛'},
        ]},
        {id: 'zhejiang', title: '浙江', children: [
            {id: 'xihu', title: '西湖'},
            {id: 'linyin', title: '灵隐'},
        ]},
    ]

    const data13 = [
        {id: 'beijing', title: '北京', icon: <Icon name="box1"/>, children: [
            {id: 'gugong', title: '故宫', icon: <Icon name="file-text"/>},
            {id: 'tiantan', title: '天坛', icon: <Icon name="file-text"/>},
        ]},
        {id: 'zhejiang', title: '浙江', icon: <Icon name="loader"/>, children: [
            {id: 'xihu', title: '西湖'},
            {id: 'linyin', title: '灵隐'},
        ]},
    ]

    const data14 = JSON.parse(JSON.stringify(data12));
    const data15 = JSON.parse(JSON.stringify(data12));
    const data16 = JSON.parse(JSON.stringify(data12));
    const data17 = JSON.parse(JSON.stringify(data12));
    const data18 = JSON.parse(JSON.stringify(data12));
    const data19 = JSON.parse(JSON.stringify(data12));
    const data20 = JSON.parse(JSON.stringify(data12));
    const data22 = JSON.parse(JSON.stringify(data12));
    const data23 = JSON.parse(JSON.stringify(data12));

    const data21 = genData({treeDepth: 3, nodesPerLevel: 10}).data;

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
                        <Tree data={data2}/>
                        <Divider align="left"><Text type="primary">默认展开</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            <Text code>opened</Text> 参数控制默认打开的节点
                        </Paragraph>
                        <DemoCode data={codes['tree_opened']}/>
                    </Card>
                </Space>


                <Space id="tree_selected" dir="v">
                    <Card bordered>
                        <Tree data={data3} selected={[selected, setSelected]} onNodeSelect={(node: any) => {
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
                        <Tree data={data4} checkable/>
                        <Divider align="left"><Text type="primary">级联多选</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            设置<Text code>checkable</Text> 参数可以进行多选，默认级联
                        </Paragraph>
                        <DemoCode data={codes['tree_multi']}/>
                    </Card>
                </Space>


                <Space id="tree_multi_unrelate" dir="v">
                    <Card bordered>
                        <Tree data={data5} checkable checkRelation="unRelated"/>
                        <Divider align="left"><Text type="primary">非级联多选</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            <Text code>checkRelation</Text> 参数可以设置多选场景下的级联情况，<Text code>unRelated</Text>非级联 <Text code>related</Text> 级联
                        </Paragraph>
                        <DemoCode data={codes['tree_multi_unrelate']}/>
                    </Card>
                </Space>


                <Space id="tree_disabled" dir="v">
                    <Card bordered>
                        <Tree data={data6} checkable />
                        <Divider align="left"><Text type="primary">禁用</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            数据项添加 <Text code>disabled</Text> 参数可以禁用节点
                        </Paragraph>
                        <DemoCode data={codes['tree_disabled']}/>
                    </Card>
                </Space>


                <Space id="tree_directory" dir="v">
                    <Card bordered>
                        <Tree data={data7} checkable directory />
                        <Divider align="left"><Text type="primary">目录图标</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            添加<Text code>directory</Text> 参数可以显示目录图标
                        </Paragraph>
                        <DemoCode data={codes['tree_directory']}/>
                    </Card>
                </Space>

                <Space id="tree_loadData" dir="v">
                    <Card bordered>
                        <Tree data={data8} checkable directory loadData={(data: any) => {
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
                        <Tree data={data9} checkable directory onContextMenu={(data: any) => {
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

                <Space id="tree_search" dir="v">
                    <Card bordered>
                        <Space dir="v">
                            <Input onChange={(keyword: string) => {
                                treeSearch.filter(keyword);
                            }}/>
                            <Tree ref={treeSearch} data={data12} checkable directory/>
                        </Space>
                        <Divider align="left"><Text type="primary">搜索</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            使用filter对树进行过滤查询
                        </Paragraph>
                        <DemoCode data={codes['tree_contextmenu']}/>
                    </Card>
                </Space>


                <Space id="tree_customIcon" dir="v">
                    <Card bordered>
                        <Tree data={data13} checkable directory/>
                        <Divider align="left"><Text type="primary">自定义图标</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            自定义图标
                        </Paragraph>
                        <DemoCode data={codes['tree_contextmenu']}/>
                    </Card>
                </Space>

                <Space id="tree_customArrow" dir="v">
                    <Card bordered>
                        <Tree data={data14} checkable directory arrowIcon={() => <img src={arrow}/>}/>
                        <Divider align="left"><Text type="primary">自定义箭头</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            自定义箭头
                        </Paragraph>
                        <DemoCode data={codes['tree_contextmenu']}/>
                    </Card>
                </Space>

                <Space id="tree_mod" dir="v">
                    <Card bordered>
                        <Space>
                            <div>HALF</div>
                            <div style={{width: '25%'}}>
                                <Tree data={data15} checkable mode={TreeCheckMod.HALF} onChange={(v: NodeKeyType[]) => {
                                    console.log(v);
                                }}/>
                            </div>
                            <div>FULL</div>
                            <div style={{width: '25%'}}>
                                <Tree data={data16} checkable mode={TreeCheckMod.FULL} onChange={(v: NodeKeyType[]) => {
                                    console.log(v);
                                }}/>
                            </div>
                        </Space>
                        <Space>
                            <div>CHILD</div>
                            <div style={{width: '25%'}}>
                                <Tree data={data17} checkable mode={TreeCheckMod.CHILD} onChange={(v: NodeKeyType[]) => {
                                    console.log(v);
                                }}/>
                            </div>
                            <div>SHALLOW</div>
                            <div style={{width: '25%'}}>
                                <Tree data={data18} checkable mode={TreeCheckMod.SHALLOW} onChange={(v: NodeKeyType[]) => {
                                    console.log(v);
                                }}/>
                            </div>
                        </Space>
                        <Divider align="left"><Text type="primary">模式</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            mode支持四种TreeCheckMod.FULL, TreeCheckMod.HALF, TreeCheckMod.CHILD, TreeCheckMod.SHALLOW,
                            不同模式产生的值不同，
                            默认是HALF
                        </Paragraph>
                        <DemoCode data={codes['tree_contextmenu']}/>
                    </Card>
                </Space>


                <Space id="tree_append" dir="v">
                    <Card bordered>
                        <Tree data={data19} checkable ref={tree19} />
                        <Space dir="v">
                            <Space>
                                <Button type="primary" onClick={() => {
                                    tree19?.append('beijing', {
                                        id: `id_${Math.random()}`,
                                        title: 'appendNode',
                                    })
                                }}>Append</Button>

                                <Button type="primary" onClick={() => {
                                    tree19?.prepend('beijing', {
                                        id: `id_${Math.random()}`,
                                        title: 'prependNode',
                                    })
                                }}>Prepend</Button>
                            </Space>

                            <Space>
                                <Button type="primary" onClick={() => {
                                    tree19?.insertBefore('beijing', {
                                        id: `id_${Math.random()}`,
                                        title: 'insertBeforeNode',
                                    })
                                }}>InsertBefore</Button>

                                <Button type="primary" onClick={() => {
                                    tree19?.insertAfter('beijing', {
                                        id: `id_${Math.random()}`,
                                        title: 'InsertAfterNode',
                                    })
                                }}>InsertAfter</Button>
                            </Space>
                        </Space>
                        <Divider align="left"><Text type="primary">append</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            append追加子节点，prepend 添加前缀子节点, insertBefore: 在某节点前插入兄弟节点, insertAfter: 在某节点后插入兄弟节点
                        </Paragraph>
                        <DemoCode data={codes['tree_contextmenu']}/>
                    </Card>
                </Space>


                <Space id="tree_expand" dir="v">
                    <Card bordered>
                        <Tree data={data20} checkable ref={tree20} />
                        <Space dir="v">
                            <Space>
                                <Button type="primary" onClick={() => {
                                    tree20.expandAll()
                                }}>Expand All</Button>

                                <Button type="primary" onClick={() => {
                                    tree20.collapseAll()
                                }}>Collapse All</Button>
                            </Space>

                            <Space>
                                <Button type="primary" onClick={() => {
                                    tree20.expandNode('beijing', true)
                                }}>Expand Node</Button>

                                <Button type="primary" onClick={() => {
                                    tree20.expandNode('beijing', false)
                                }}>Collapse Node</Button>
                            </Space>
                        </Space>
                        <Divider align="left"><Text type="primary">Expand</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            Expand 展开节点  Collapse 收起节点
                        </Paragraph>
                        <DemoCode data={codes['tree_contextmenu']}/>
                    </Card>
                </Space>


                <Space id="tree_rename" dir="v">
                    <Card bordered>
                        <Tree data={data22} checkable ref={tree22} />
                        <Space dir="v">
                            <Space>
                                <Button type="primary" onClick={() => {
                                    tree22.rename('beijing', 'renamed');
                                }}>Rename</Button>
                            </Space>

                        </Space>
                        <Divider align="left"><Text type="primary">rename</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            通过rename方法可以重命名节点，参数为节点id和重命名后的节点名称
                        </Paragraph>
                        <DemoCode data={codes['tree_contextmenu']}/>
                    </Card>
                </Space>

                <Space id="tree_dragable" dir="v">
                    <Card bordered>
                        <Tree data={data23} draggable />
                        <Divider align="left"><Text type="primary">拖拽</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            draggable支持节点拖拽， 可通过 beforeDropMethod 来判断是否可进行拖放节点，支持异步判断
                        </Paragraph>
                        <DemoCode data={codes['tree_contextmenu']}/>
                    </Card>
                </Space>


                <Space id="tree_scroll" dir="v">
                    <Card bordered>
                        <Tree style={{"max-height": "200px"}} data={data21} checkable ref={tree21} />
                        <Space dir="v">
                            <Space>
                                <Button type="primary" onClick={() => {
                                    tree21.scrollTo(data21[5].id)
                                }}>ScrollTo Top</Button>

                                <Button type="primary" onClick={() => {
                                    tree21.scrollTo(data21[5].id, 'center')
                                }}>ScrollTo Center</Button>

                                <Button type="primary" onClick={() => {
                                    tree21.scrollTo(data21[5].id, 'bottom')
                                }}>ScrollTo Bottom</Button>
                            </Space>
                        </Space>
                        <Divider align="left"><Text type="primary">Scroll</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            Scroll 支持滚动到某个节点，支持指定滚动到容器的 Top 、Center、Bottom，需要传入节点的 key。
                        </Paragraph>
                        <DemoCode data={codes['tree_contextmenu']}/>
                    </Card>
                </Space>


                <Space id="tree_methods" dir="v">
                    <Card bordered>
                        <Tree data={data10} checkable directory ref={tree}/>

                        <Space dir="v">
                            <Space dir="h">
                                <Button type="primary" onClick={() => {
                                    tree.checkNode('xihu', true);
                                }}>勾选</Button>

                                <Button type="primary" onClick={() => {
                                    tree.checkNode('xihu', false);
                                }}>取消勾选</Button>

                                <Button type="primary" onClick={() => {
                                    tree.checkAll();
                                }}>全选勾选</Button>

                                <Button type="primary" onClick={() => {
                                    tree.uncheckAll();
                                }}>取消全选</Button>
                            </Space>
                            <Space>
                                <Button type="primary" onClick={() => {
                                    console.log(tree.getChecked(TreeCheckMod.FULL));
                                }}>getChecked(FULL)</Button>
                                <Button type="primary" onClick={() => {
                                    console.log(tree.getChecked(TreeCheckMod.HALF));
                                }}>getChecked(HALF)</Button>
                                <Button type="primary" onClick={() => {
                                    console.log(tree.getChecked(TreeCheckMod.CHILD));
                                }}>getChecked(CHILD)</Button>
                                <Button type="primary" onClick={() => {
                                    console.log(tree.getChecked(TreeCheckMod.SHALLOW));
                                }}>getChecked(SHALLOW)</Button>
                            </Space>
                            <Space>
                                <Button type="primary" onClick={() => {
                                    console.log(tree.getCheckedKeys(TreeCheckMod.FULL));
                                }}>getCheckedKeys(FULL)</Button>
                                <Button type="primary" onClick={() => {
                                    console.log(tree.getCheckedKeys(TreeCheckMod.HALF));
                                }}>getCheckedKeys(HALF)</Button>
                                <Button type="primary" onClick={() => {
                                    console.log(tree.getCheckedKeys(TreeCheckMod.CHILD));
                                }}>getCheckedKeys(CHILD)</Button>
                                <Button type="primary" onClick={() => {
                                    console.log(tree.getCheckedKeys(TreeCheckMod.SHALLOW));
                                }}>getCheckedKeys(SHALLOW)</Button>
                            </Space>
                        </Space>
                        <Divider align="left"><Text type="primary">接口</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            支持通过checkNode 进行勾选和取消勾选<br/>
                            通过checkAll和unCheckAll 进行全选和全不选<br/>
                            可通过getChecked和getCheckedKeys 获取选中的数据或key，支持四种模式
                        </Paragraph>
                        <DemoCode data={codes['tree_methods']}/>
                    </Card>
                </Space>


                <Space id="tree_data" dir="v">
                    <Card bordered>
                        <Tree data={data11()} checkable directory/>
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
