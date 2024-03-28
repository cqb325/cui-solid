import { Space } from "@/components/Layout"
import { Text } from "@/components/Typography/Text"
import { Dropdown, DropdownMenu, DropdownItem } from "@/components/Dropdown"
import { Icon } from "@/components/Icon"
import { Button } from "@/components/Button"
import { createSignal } from "solid-js"
import { Title } from "@/components/Typography/Title"
import { Card } from "@/components/Card"
import { Divider } from "@/components/Divider"
import { Paragraph } from "@/components/Typography/Paragraph"
import { Table } from "@/components/Table"
import { anchorData, codes, itemPropsData, propsData } from "./config"
import { CompAnchor } from "../../common/CompAnchor"
import { propsColumns } from "../../common/columns"
import { hljs, useDirective } from "../../common/hljs";
import { DemoCode } from "../../common/code";
useDirective(hljs);

export default function DropdownPage () {
    const [visible, setVisible] = createSignal(false);

    return <>
        <div class="sys-ctx-main-left" use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    Dropdown 下拉菜单
                </Title>
                <Space id="dropdown_base" dir="v">
                    <Card bordered>
                        <Dropdown align="bottomLeft" menu={<DropdownMenu>
                            <DropdownItem>驴打滚</DropdownItem>
                            <DropdownItem>炸酱面</DropdownItem>
                            <DropdownItem disabled>豆汁儿</DropdownItem>
                            <DropdownItem divided>北京烤鸭<Icon name="chevron-right" />
                                <DropdownMenu>
                                    <DropdownItem name="挂炉烤鸭">挂炉烤鸭</DropdownItem>
                                    <DropdownItem>焖炉烤鸭</DropdownItem>
                                </DropdownMenu>
                            </DropdownItem>
                        </DropdownMenu>} onSelect={(name: string) => {
                            console.log(name);
                        }}>
                            <Text>下拉菜单</Text>
                        </Dropdown>
                        <Divider align="left"><Text type="primary">基础用法</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            需要配合 DropdownMenu 和 DropdownItem 两个组件来使用。<br />
                            选中菜单项触发 <Text code>onSelect</Text> 事件
                        </Paragraph>
                        <DemoCode data={codes['dropdown_base']}/>
                    </Card>
                </Space>


                <Space id="dropdown_trigger" dir="v">
                    <Card bordered>
                        <Space dir="h">
                            <Dropdown trigger="click" align="bottomLeft" menu={<DropdownMenu>
                                <DropdownItem>驴打滚</DropdownItem>
                                <DropdownItem>炸酱面</DropdownItem>
                                <DropdownItem disabled>豆汁儿</DropdownItem>
                                <DropdownItem divided>北京烤鸭<Icon name="chevron-right" />
                                    <DropdownMenu>
                                        <DropdownItem name="挂炉烤鸭">挂炉烤鸭</DropdownItem>
                                        <DropdownItem>焖炉烤鸭</DropdownItem>
                                    </DropdownMenu>
                                </DropdownItem>
                            </DropdownMenu>} onSelect={(name: string) => {
                                console.log(name);
                            }}>
                                <Text>Click</Text>
                            </Dropdown>



                            <Dropdown trigger="contextMenu" align="bottomLeft" menu={<DropdownMenu>
                                <DropdownItem>驴打滚</DropdownItem>
                                <DropdownItem>炸酱面</DropdownItem>
                                <DropdownItem disabled>豆汁儿</DropdownItem>
                                <DropdownItem divided>北京烤鸭<Icon name="chevron-right" />
                                    <DropdownMenu>
                                        <DropdownItem name="挂炉烤鸭">挂炉烤鸭</DropdownItem>
                                        <DropdownItem>焖炉烤鸭</DropdownItem>
                                    </DropdownMenu>
                                </DropdownItem>
                            </DropdownMenu>} onSelect={(name: string) => {
                                console.log(name);
                            }}>
                                <Text>rightClick</Text>
                            </Dropdown>


                            <Dropdown trigger="custom" align="bottom"
                                visible={[visible, setVisible]}
                                menu={<div style={{width: '150px', padding: '20px', background: '#fff'}}>
                                <div>dropdown内容</div>
                                <Button type="primary" onClick={() => {
                                    setVisible(false)
                                }}>关闭</Button>
                            </div>} onSelect={(name: string) => {
                                console.log(name);
                            }}>
                                <Text>custom</Text>
                            </Dropdown>
                        </Space>

                        <Divider align="left"><Text type="primary">触发条件</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        通过设置属性 <Text code>trigger</Text> 可以更改触发方式，可选项为 <Text code>click</Text> 、 <Text code>hover(默认)</Text>、 <Text code>contextMenu</Text> 或 <Text code>custom(自定义)</Text>。<br/>
                        触发方式设置为 <Text code>custom</Text> 自定义时，需手动设置 <Text code>visible</Text> 属性来控制下拉框的显示。
                        </Paragraph>
                        <DemoCode data={codes['dropdown_trigger']}/>
                    </Card>
                </Space>


                <Space id="dropdown_theme" dir="v">
                    <Card bordered>
                        <Dropdown theme="dark" trigger="click" align="bottomLeft" menu={<DropdownMenu>
                            <DropdownItem>驴打滚</DropdownItem>
                            <DropdownItem>炸酱面</DropdownItem>
                            <DropdownItem disabled>豆汁儿</DropdownItem>
                            <DropdownItem divided>北京烤鸭<Icon name="chevron-right" />
                                <DropdownMenu>
                                    <DropdownItem name="挂炉烤鸭">挂炉烤鸭</DropdownItem>
                                    <DropdownItem>焖炉烤鸭</DropdownItem>
                                </DropdownMenu>
                            </DropdownItem>
                        </DropdownMenu>} onSelect={(name: string) => {
                            console.log(name);
                        }}>
                            <Text>暗色菜单</Text>
                        </Dropdown>
                        <Divider align="left"><Text type="primary">主题</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            通过 theme 属性可以设置暗色下拉菜单 dark。
                        </Paragraph>
                        <DemoCode data={codes['dropdown_theme']}/>
                    </Card>
                </Space>


                <Space id="dropdown_transfer" dir="v">
                    <Card bordered>
                        <Dropdown transfer trigger="click" align="bottomLeft" menu={<DropdownMenu>
                            <DropdownItem>驴打滚</DropdownItem>
                            <DropdownItem>炸酱面</DropdownItem>
                            <DropdownItem disabled>豆汁儿</DropdownItem>
                            <DropdownItem divided>北京烤鸭<Icon name="chevron-right" />
                                <DropdownMenu>
                                    <DropdownItem name="挂炉烤鸭">挂炉烤鸭</DropdownItem>
                                    <DropdownItem>焖炉烤鸭</DropdownItem>
                                </DropdownMenu>
                            </DropdownItem>
                        </DropdownMenu>} onSelect={(name: string) => {
                            console.log(name);
                        }}>
                            <Text>下拉菜单</Text>
                        </Dropdown>
                        <Divider align="left"><Text type="primary">Transfer</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            设置 <Text code>transfer</Text> 属性可以让下拉菜单渲染到Body节点下
                        </Paragraph>
                        <DemoCode data={codes['dropdown_transfer']}/>
                    </Card>
                </Space>


                <Space id="dropdown_align" dir="v">
                    <Card bordered>
                        <Space dir="h">
                            <Dropdown trigger="click" align="rightTop" menu={<DropdownMenu>
                                <DropdownItem>驴打滚</DropdownItem>
                                <DropdownItem>炸酱面</DropdownItem>
                                <DropdownItem disabled>豆汁儿</DropdownItem>
                                <DropdownItem divided>北京烤鸭<Icon name="chevron-right" />
                                    <DropdownMenu>
                                        <DropdownItem name="挂炉烤鸭">挂炉烤鸭</DropdownItem>
                                        <DropdownItem>焖炉烤鸭</DropdownItem>
                                    </DropdownMenu>
                                </DropdownItem>
                            </DropdownMenu>} onSelect={(name: string) => {
                                console.log(name);
                            }}>
                                <Text>右侧</Text>
                            </Dropdown>

                            <Dropdown trigger="click" align="bottomRight" menu={<DropdownMenu>
                                <DropdownItem>驴打滚</DropdownItem>
                                <DropdownItem>炸酱面</DropdownItem>
                                <DropdownItem disabled>豆汁儿</DropdownItem>
                                <DropdownItem divided>北京烤鸭<Icon name="chevron-right" />
                                    <DropdownMenu>
                                        <DropdownItem name="挂炉烤鸭">挂炉烤鸭</DropdownItem>
                                        <DropdownItem>焖炉烤鸭</DropdownItem>
                                    </DropdownMenu>
                                </DropdownItem>
                            </DropdownMenu>} onSelect={(name: string) => {
                                console.log(name);
                            }}>
                                <Text>右下侧</Text>
                            </Dropdown>
                        </Space>
                        <Divider align="left"><Text type="primary">位置</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            align属性支持12个方位， 最常用的是bottom/bottomLeft/bottomRight, 默认为bottom
                        </Paragraph>
                        <DemoCode data={codes['dropdown_align']}/>
                    </Card>
                </Space>


                <Space id="dropdown_disabled" dir="v">
                    <Card bordered>
                        <Dropdown disabled trigger="click" align="bottomLeft" menu={<DropdownMenu>
                            <DropdownItem>驴打滚</DropdownItem>
                            <DropdownItem>炸酱面</DropdownItem>
                            <DropdownItem disabled>豆汁儿</DropdownItem>
                            <DropdownItem divided>北京烤鸭<Icon name="chevron-right" />
                                <DropdownMenu>
                                    <DropdownItem name="挂炉烤鸭">挂炉烤鸭</DropdownItem>
                                    <DropdownItem>焖炉烤鸭</DropdownItem>
                                </DropdownMenu>
                            </DropdownItem>
                        </DropdownMenu>} onSelect={(name: string) => {
                            console.log(name);
                        }}>
                            <Text>下拉菜单</Text>
                        </Dropdown>
                        <Divider align="left"><Text type="primary">禁用</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            设置 <Text code>disabled</Text> 属性可以禁用菜单
                        </Paragraph>
                        <DemoCode data={codes['dropdown_disabled']}/>
                    </Card>
                </Space>


                <Space dir="v" size={24} id="comp_api">
                    <Title type="primary" heading={3}>API</Title>
                    <Space id="comp_props" dir="v">
                        <Title type="primary" heading={4}>Dropdown Props</Title>
                        <Table columns={propsColumns} data={propsData} border size="small" />
                    </Space>

                    <Space id="comp_item_props" dir="v">
                        <Title type="primary" heading={4}>DropdownItem Props</Title>
                        <Table columns={propsColumns} data={itemPropsData} border size="small" />
                    </Space>
                </Space>
            </Space>
        </div>

        <CompAnchor data={anchorData}/>
    </>
}
