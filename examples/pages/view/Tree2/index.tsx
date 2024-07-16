import { Button, Card, Divider, DropdownItem, DropdownMenu, Icon, Input, Paragraph, Space, Text, Title } from "@/components";
import { DemoCode } from "examples/pages/common/code";
import { hljs, useDirective } from "../../common/hljs";
import type { NodeKeyType} from "@/components/Tree";
import { Tree } from "@/components/Tree";
import { TreeCheckMod, type TreeNode } from "@/components/Tree/store";
import { createSignal } from "solid-js";
import './style.less';
import arrow from './arrow.png';
useDirective(hljs);

export default function () {
    const data = [
        {id: '1', title: '节点1'},
        {id: '2', title: '节点2', expand: true, children: [
            {id: '21', title: '节点21'},
            {id: '22', title: '节点22',children: [
                {id: '221', title: '节点221'},
                {id: '222', title: '节点222'},
                {id: '223', title: '节点223'},
                {id: '224', title: '节点224'},
                {id: '225', title: '节点225'}
            ]},
            {id: '23', title: '节点23'},
            {id: '24', title: '节点24'},
            {id: '25', title: '节点25'},
            {id: '26', title: '节点26'},
            {id: '27', title: '节点27'},
        ]},
        {id: '3', title: '节点3'},
        {id: '4', title: '节点4'},
        {id: '5', title: '节点5'},
        {id: '6', title: '节点6'},
        {id: '7', title: '节点7'},
        {id: '8', title: '节点8'},
        {id: '9', title: '节点9'},
        {id: '10', title: '节点10'},
    ];

    const data2: TreeNode[] = Array.from({length: 100}).map((item: any, index) => {
        return {
            id: index,
            title: `节点${index}`,
            icon: <Icon name="star"/>,
            patch: <div><span>+</span><span>-</span></div>,
            children: Array.from({length: 20}).map((item, index2) => {
                return {
                    id: index + '_' + index2,
                    title: `节点${index + '_' + index2}`,
                    disabled: index === 2 && index2 === 1,
                    children: Array.from({length: 2}).map((item, index3) => {
                        return {
                            id: index + '_' + index2 + '_' + index3,
                            title: `节点${index + '_' + index2 + '_' + index3}`,
                        }
                    })
                }
            })
        } as unknown as TreeNode;
    })

    let tree: any;
    const [selected, setSelected] = createSignal<NodeKeyType>('');
    const [value, setValue] = createSignal<NodeKeyType[]>([]);

    return <>
        <div class="sys-ctx-main-left" use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    Tree 树状控件<Icon name="star"/>
                </Title>
                <Space id="tree_base" dir="v">
                    <Card bordered>
                        <Input onChange={(keyword: string) => {
                            tree.filter(keyword);
                        }}/>
                        <Tree mod={TreeCheckMod.SHALLOW } value={[value, setValue]} selected={[selected, setSelected]} selectedClass="custom-selected"
                        dragHoverClass="custom-drag-hover" arrowIcon={() => <img src={arrow}/>}
                        style={{"max-height": '200px'}} ref={tree} data={data2} draggable={true}
                        checkable
                        // customIcon={(item: any) => {
                        //     return <Icon name="star"/>;
                        // }}
                        onContextMenu={(data: any) => {
                            console.log(data);
                        }} contextMenu={<DropdownMenu>
                            <DropdownItem name="add">添加</DropdownItem>
                            <DropdownItem name="modity">修改</DropdownItem>
                        </DropdownMenu>} onNodeSelect={(node: TreeNode) => {
                            console.log('onNodeSelect', node);
                        }} onNodeCheck={(node, checked) => {
                            console.log('onNodeCheck', node, checked);
                        }} onNodeExpand={(node) => {
                            console.log('onNodeExpand', node);
                        }} onNodeCollapse={(node) => {
                            console.log('onNodeCollapse', node);
                        }}/>

                        <Space>
                            <Button onClick={() => {
                                tree.append(1, 2);
                            }}>Append</Button>

                            <Button onClick={() => {
                                tree.prepend(1, {
                                    id: 100,
                                    title: '节点prepend'
                                });
                            }}>Prepend</Button>

                            <Button onClick={() => {
                                tree.insertBefore(2, {
                                    id: 101,
                                    title: '节点InsertBefore'
                                });
                            }}>InsertBefore</Button>
                            <Button onClick={() => {
                                tree.insertBefore(2, 3);
                            }}>InsertBefore已存在</Button>


                            <Button onClick={() => {
                                tree.insertAfter(2, {
                                    id: 102,
                                    title: '节点InsertAfter'
                                });
                            }}>InsertAfter</Button>

                            <Button onClick={() => {
                                tree.insertAfter(2, 4);
                            }}>InsertAfter已存在</Button>


                            <Button onClick={() => {
                                tree.insertAfter(2, 4);
                            }}>InsertAfter已存在</Button>
                        </Space>
                        <Space>
                            <Button onClick={() => {
                                tree.expandAll();
                            }}>Expand All</Button>
                            <Button onClick={() => {
                                tree.collapseAll();
                            }}>Collapse All</Button>
                            <Button onClick={() => {
                                tree.scrollTo(5);
                            }}>scrollTo Top</Button>
                            <Button onClick={() => {
                                tree.scrollTo(5, 'center');
                            }}>scrollTo center</Button>
                            <Button onClick={() => {
                                tree.scrollTo(5, 'bottom');
                            }}>scrollTo bottom</Button>
                        </Space>
                        <Space>
                            <Button onClick={() => {
                                tree.rename(5, 'rename');
                            }}>rename</Button>

                            <Button onClick={() => {
                                tree.expandNode(5, true);
                            }}>expand Node</Button>

                            <Button onClick={() => {
                                tree.expandNode(5, false);
                            }}>collapse Node</Button>
                        </Space>

                        <Space>
                            <Button onClick={() => {
                                tree.checkNode(5, true);
                            }}>check</Button>

                            <Button onClick={() => {
                                tree.checkNode(5, false);
                            }}>uncheck</Button>

                            <Button onClick={() => {
                                tree.checkAll();
                            }}>checkAll</Button>

                            <Button onClick={() => {
                                tree.uncheckAll();
                            }}>uncheckAll</Button>

                        </Space>
                        <Space>
                            <Button onClick={() => {
                                tree.loadData(5, async (node: TreeNode) => {
                                    return new Promise(resolve => {
                                        setTimeout(() => {
                                            resolve([{id: 555, title: 'child555'}, {id: 556, title: 'child556'}]);
                                        }, 2000)
                                    })
                                });
                            }}>custom Load</Button>
                        </Space>

                        <Space>
                            <Button onClick={() => {
                                tree.selectNode(5);
                            }}>select Node</Button>
                            <Button onClick={() => {
                                setSelected(6)
                            }}>setSelected</Button>
                        </Space>

                        <Space>
                            <Button onClick={() => {
                                console.log(tree.getChecked(TreeCheckMod.FULL));
                            }}>getChecked(FULL)</Button>
                            <Button onClick={() => {
                                console.log(tree.getChecked(TreeCheckMod.HALF));
                            }}>getChecked(HALF)</Button>
                            <Button onClick={() => {
                                console.log(tree.getChecked(TreeCheckMod.CHILD));
                            }}>getChecked(CHILD)</Button>
                            <Button onClick={() => {
                                console.log(tree.getChecked(TreeCheckMod.SHALLOW));
                            }}>getChecked(SHALLOW)</Button>
                        </Space>
                        <Space>
                            <Button onClick={() => {
                                console.log(tree.getCheckedKeys(TreeCheckMod.FULL));
                            }}>getCheckedKeys(FULL)</Button>
                            <Button onClick={() => {
                                console.log(tree.getCheckedKeys(TreeCheckMod.HALF));
                            }}>getCheckedKeys(HALF)</Button>
                            <Button onClick={() => {
                                console.log(tree.getCheckedKeys(TreeCheckMod.CHILD));
                            }}>getCheckedKeys(CHILD)</Button>
                            <Button onClick={() => {
                                console.log(tree.getCheckedKeys(TreeCheckMod.SHALLOW));
                            }}>getCheckedKeys(SHALLOW)</Button>
                        </Space>

                        <Space>
                            <Button onClick={() => {
                                setValue([0, '0_0', '0_0_0', '0_0_1', '0_1', '0_1_0']);
                            }}>SetValue(Half)</Button>

                            <Button onClick={() => {
                                setValue(['0_0_0', '0_0_1', '0_1_0']);
                            }}>SetValue(Child)</Button>

                            <Button onClick={() => {
                                setValue(['0_0', '0_0_0', '0_0_1', '0_1_0']);
                            }}>SetValue(FULL)</Button>

                            <Button onClick={() => {
                                setValue(['0_0', '0_1_0']);
                            }}>SetValue(SHALLOW)</Button>

                            <Button onClick={() => {
                                setValue([]);
                            }}>Clear</Button>
                        </Space>

                        <Tree data={[]} style={{height: '100px'}}/>
                        <Divider align="left"><Text type="primary">基础用法</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            Tree 传入data数据展示树状组件
                        </Paragraph>
                        {/* <DemoCode data={codes['tree_base']} /> */}
                    </Card>
                </Space>
            </Space>
        </div>
    </>;
}
