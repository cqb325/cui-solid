import { Space } from "@/components/Layout"
import { Text } from "@/components/Typography/Text"
import type { DropdownProps } from "@/components/Dropdown";
import { Dropdown, DropdownMenu, DropdownItem } from "@/components/Dropdown"
import { Button } from "@/components/Button"
import { createSignal, For } from "solid-js"
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
import { F7DocOnDoc, F7Heart, F7Photo, F7Cart, F7GearAlt, F7SquarePencil, F7CubeBox, F7Gear, F7ArrowshapeTurnUpRight, F7ArrowBranch, F7RocketFill, F7Star, F7TrayArrowDown, F7Wrench, F7Ellipsis } from "cui-solid-icons/f7"
import { BiShareFill } from "cui-solid-icons/bi"
import { ButtonGroup, Slider } from "@/components"
useDirective(hljs);

export default function DropdownPage () {
    const [visible, setVisible] = createSignal(false);
    const [visible1, setVisible1] = createSignal(false);
    const [x, setX] = createSignal(0);
    const [y, setY] = createSignal(0);
    const [offset, setOffset] = createSignal(3);
    let area;

    const menu = () => <DropdownMenu>
        <DropdownItem>驴打滚</DropdownItem>
        <DropdownItem>炸酱面</DropdownItem>
        <DropdownItem disabled>豆汁儿</DropdownItem>
        <DropdownItem divided arrow>北京烤鸭
            <DropdownMenu>
                <DropdownItem name="挂炉烤鸭">挂炉烤鸭</DropdownItem>
                <DropdownItem>焖炉烤鸭</DropdownItem>
            </DropdownMenu>
        </DropdownItem>
    </DropdownMenu>
    return <>
        <div class="sys-ctx-main-left" use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    Dropdown 下拉菜单
                </Title>
                <Space id="dropdown_base" dir="v">
                    <Card bordered>
                        <Dropdown trigger="click" align="bottomLeft" gradient={['45deg', '#9B59B6', '#3498DB']}
                            color="#ffffff"
                            menu={<DropdownMenu>
                            <DropdownItem name="edit" icon={<F7SquarePencil />} arrow>Edit
                                <DropdownMenu>
                                    <DropdownItem>Color</DropdownItem>
                                    <DropdownItem>Size</DropdownItem>
                                </DropdownMenu>
                            </DropdownItem>
                            <DropdownItem icon={<F7Cart />}>Add to Cart</DropdownItem>
                            <DropdownItem disabled icon={<F7Heart />}>Save to Wishlist</DropdownItem>
                            <DropdownItem divided arrow icon={<BiShareFill />}>Share
                                <DropdownMenu>
                                    <DropdownItem>微信</DropdownItem>
                                    <DropdownItem>微博</DropdownItem>
                                    <DropdownItem>短视频</DropdownItem>
                                </DropdownMenu>
                            </DropdownItem>
                            <DropdownItem icon={<F7DocOnDoc />}>Copy link</DropdownItem>
                            <DropdownItem divided icon={<F7Photo />}>View image</DropdownItem>
                            <DropdownItem icon={<F7GearAlt />}>Settings</DropdownItem>
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
                                <DropdownItem selected>炸酱面</DropdownItem>
                                <DropdownItem disabled>豆汁儿</DropdownItem>
                                <DropdownItem divided arrow>北京烤鸭
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
                                <DropdownItem divided arrow>北京烤鸭
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
                            <DropdownItem divided arrow>北京烤鸭
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
                            <DropdownItem divided arrow>北京烤鸭
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
                                <DropdownItem divided arrow>北京烤鸭
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
                                <DropdownItem divided arrow>北京烤鸭
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
                            <DropdownItem divided arrow>北京烤鸭
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


                <Space id="dropdown_arrow" dir="v">
                    <Card bordered>
                        <Space dir="v">
                            <Space>
                                <For each={['bottomLeft', 'bottom', 'bottomRight', 'top', 'topLeft', 'topRight', 'leftTop', 'rightTop', 'left', 'right']}>
                                    {(align) => <Dropdown offset={offset()} arrow trigger="click" align={align as DropdownProps['align']} menu={menu}>
                                        <Button>{align}</Button>
                                    </Dropdown>}
                                </For>
                            </Space>
                            <Space>Offset: <Slider max={24} min={0} value={[offset, setOffset]}/></Space>
                        </Space>
                        <Divider align="left"><Text type="primary">Arrow</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            Arrow
                        </Paragraph>
                        <DemoCode data={codes['dropdown_disabled']}/>
                    </Card>
                </Space>


                <Space id="dropdown_mouse_pos" dir="v">
                    <Card bordered>
                        <Dropdown
                            align="bottomLeft" trigger="contextMenu" handler=".context-area"
                            onMouseClick={(e) => {
                                setX(e.pageX);
                                setY(e.pageY);
                            }}
                            position={{x: x(), y: y()}}
                            transfer
                            menu={<DropdownMenu>
                            <DropdownItem>驴打滚</DropdownItem>
                            <DropdownItem>炸酱面</DropdownItem>
                            <DropdownItem disabled>豆汁儿</DropdownItem>
                            <DropdownItem divided arrow>北京烤鸭
                                <DropdownMenu>
                                    <DropdownItem name="挂炉烤鸭">挂炉烤鸭</DropdownItem>
                                    <DropdownItem>焖炉烤鸭</DropdownItem>
                                </DropdownMenu>
                            </DropdownItem>
                        </DropdownMenu>} onSelect={(name: string) => {
                            console.log(name);
                        }}>
                            <div class="context-area" style={{width: '300px', height: '400px', background: '#f0f0f0'}} />
                        </Dropdown>
                        <Divider align="left"><Text type="primary">手动定位</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            传入position的话会根据position进行定位
                        </Paragraph>
                        <DemoCode data={codes['dropdown_disabled']}/>
                    </Card>
                </Space>


                <Space id="dropdown_colors" dir="v">
                    <Card bordered>
                        <Space dir="v">
                            <Space>
                                <For each={['primary','success','info', 'warning','error', 'blue', 'green', 'red', 'yellow', 'magenta', 'pink', 'volcano', 'orange', 'gold', 'lime', 'cyan', 'geekblue', 'purple']}>
                                    {(color) => {
                                        return <Dropdown align="bottom" arrow menu={menu} theme={color}>
                                            <Button>{color}</Button>
                                        </Dropdown>
                                    }}
                                </For>
                            </Space>

                            <Space>
                                <For each={['#f50', '#2db7f5', '#87d068', '#108ee9']}>
                                    {(color) => {
                                        return <Dropdown align="bottom" arrow menu={menu} theme={color} color="#fff">
                                            <Button>{color}</Button>
                                        </Dropdown>
                                    }}
                                </For>
                            </Space>
                        </Space>
                    </Card>
                </Space>

                <Space id="dropdown_data" dir="v">
                    <Card bordered>
                        <Space>
                            <Dropdown align="bottom" onSelect={(name) => console.log(name)} data={[
                                {name: '1', title: '驴打滚'},
                                {name: '2', title: '炸酱面'},
                                {name: '3', title: '豆汁儿', disabled: true},
                                {name: '4', divided: true, title: '北京烤鸭', children: [
                                    {name: '41', title: '挂炉烤鸭'},
                                    {name: '42', title: '焖炉烤鸭'},
                                ]},
                            ]}>
                                <span>data</span>
                            </Dropdown>
                        </Space>
                    </Card>
                </Space>


                <Space id="dropdown_item_theme" dir="v">
                    <Card bordered>
                        <Space>
                            <Dropdown align="bottom" trigger="click" menu={
                                <DropdownMenu>
                                    <DropdownItem name="0" icon={<F7CubeBox/>}>Menu Item 1</DropdownItem>
                                    <DropdownItem name="1" icon={<F7Gear/>} theme="primary">驴打滚</DropdownItem>
                                    <DropdownItem name="2" icon={<F7ArrowshapeTurnUpRight />} theme="secondary">炸酱面</DropdownItem>
                                    <DropdownItem name="3" icon={<F7ArrowBranch />} theme="tertiary">豆汁儿</DropdownItem>
                                    <DropdownItem name="3" icon={<F7ArrowBranch />} theme="primary" disabled>豆汁儿</DropdownItem>
                                    <DropdownItem name="4" icon={<F7RocketFill />} theme="error">北京烤鸭</DropdownItem>
                                    <DropdownItem name="5" icon={<F7Star />} theme="warning">挂炉烤鸭</DropdownItem>
                                    <DropdownItem name="6" icon={<F7TrayArrowDown />} theme="info">焖炉烤鸭</DropdownItem>
                                    <DropdownItem name="6" icon={<F7Wrench />} theme="success">焖炉烤鸭</DropdownItem>
                                </DropdownMenu>
                            }>
                                <span>itemTheme</span>
                            </Dropdown>
                        </Space>
                    </Card>
                </Space>


                <Space id="dropdown_button" dir="v">
                    <Card bordered>
                        <Space>
                            <ButtonGroup>
                                <Button>Dropdown</Button>
                                <Dropdown align="bottomRight" transfer arrow trigger="click" menu={
                                    <DropdownMenu>
                                        <DropdownItem name="0" icon={<F7CubeBox/>}>Menu Item 1</DropdownItem>
                                        <DropdownItem name="1" icon={<F7Gear/>} theme="primary">驴打滚</DropdownItem>
                                        <DropdownItem name="2" icon={<F7ArrowshapeTurnUpRight />} theme="secondary">炸酱面</DropdownItem>
                                        <DropdownItem name="3" icon={<F7ArrowBranch />} theme="tertiary">豆汁儿</DropdownItem>
                                        <DropdownItem name="3" icon={<F7ArrowBranch />} theme="primary" disabled>豆汁儿</DropdownItem>
                                        <DropdownItem name="4" icon={<F7RocketFill />} theme="error">北京烤鸭</DropdownItem>
                                        <DropdownItem name="5" icon={<F7Star />} theme="warning">挂炉烤鸭</DropdownItem>
                                        <DropdownItem name="6" icon={<F7TrayArrowDown />} theme="info">焖炉烤鸭</DropdownItem>
                                        <DropdownItem name="6" icon={<F7Wrench />} theme="success">焖炉烤鸭</DropdownItem>
                                    </DropdownMenu>
                                }>
                                    <Button icon={<F7Ellipsis/>} />
                                </Dropdown>
                            </ButtonGroup>
                        </Space>
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
