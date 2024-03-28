import { Menu, MenuItem, SubMenu, MenuGroup } from "@/components/Menu"
import { Icon } from "@/components/Icon"
import { Space } from "@/components/Layout"
import { Button } from "@/components/Button"
import { createSignal } from "solid-js"
import { Title } from "@/components/Typography/Title"
import { Card } from "@/components/Card"
import { Divider } from "@/components/Divider"
import { Paragraph } from "@/components/Typography/Paragraph"
import { Text } from "@/components/Typography/Text"
import { Table } from "@/components/Table"
import { anchorData, codes, eventsData, itemPropsData, menugroupPropsData, propsData, submenuPropsData } from "./config"
import { CompAnchor } from "../../common/CompAnchor"
import { eventsColumns, propsColumns } from "../../common/columns"
import { hljs, useDirective } from "../../common/hljs";
import { DemoCode } from "../../common/code";
useDirective(hljs);

export default function MenuPage () {
    const [activeName, setActiveName] = createSignal('2');
    const [min, setMin] = createSignal(true);
    return <>
        <div class="sys-ctx-main-left" use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    Menu 导航菜单
                </Title>
                <Space id="menu_base" dir="v">
                    <Card bordered>
                        <Menu dir="h">
                            <SubMenu name="1" icon={<Icon name="users"/>} title="角色管理">
                                <SubMenu name="11" title="添加" align="rightTop">
                                    <MenuItem name="111">添加超管</MenuItem>
                                    <MenuItem name="112">添加职员</MenuItem>
                                </SubMenu>
                                <MenuItem name="12">修改</MenuItem>
                                <MenuItem name="13">删除</MenuItem>
                            </SubMenu>
                            <MenuItem name="2" icon={<Icon name="user"/>}>用户管理</MenuItem>
                            <MenuItem name="31" icon={<Icon name="list"/>}>菜单管理</MenuItem>
                            <MenuItem name="33" icon={<Icon name="tool"/>}>权限管理</MenuItem>
                            <SubMenu name="32" title="字典管理" icon={<Icon name="cog"/>}>
                                <MenuGroup name="321" title="系统字典">
                                    <MenuItem name="3211">添加</MenuItem>
                                    <MenuItem name="3212">修改</MenuItem>
                                    <MenuItem name="3213">删除</MenuItem>
                                </MenuGroup>
                                <MenuGroup name="322" title="客户字典">
                                    <MenuItem name="3221">添加</MenuItem>
                                    <MenuItem name="3222">修改</MenuItem>
                                    <MenuItem name="3223">删除</MenuItem>
                                </MenuGroup>
                            </SubMenu>
                        </Menu>
                        <Divider align="left"><Text type="primary">横向菜单</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            菜单项包含 <Text code>MenuItem</Text>、<Text code>SubMenu</Text>、<Text code>MenuGroup</Text><br/>
                            横向菜单需指定 <Text code>dir</Text> 为 <Text code>h</Text><br/>
                            横向菜单的子菜单触发条件为hover
                        </Paragraph>
                        <DemoCode data={codes['menu_base']}/>
                    </Card>
                </Space>


                <Space id="menu_vertical" dir="v">
                    <Card bordered>
                        <div style={{width: '220px', 'border-right': '1px solid var(--cui-color-border)'}}>
                            <Menu dir="v" activeName={[activeName, setActiveName]}>
                                <SubMenu name="1" icon={<Icon name="users"/>} title="角色管理">
                                    <MenuItem name="11">添加</MenuItem>
                                    <MenuItem name="12">修改</MenuItem>
                                    <MenuItem name="13">删除</MenuItem>
                                </SubMenu>
                                <MenuItem name="2" icon={<Icon name="user"/>}>用户管理</MenuItem>
                                <SubMenu name="3" icon={<Icon name="cog"/>} title="系统管理">
                                    <MenuItem name="31">菜单管理</MenuItem>
                                    <SubMenu name="32" title="字典管理">
                                        <MenuGroup name="321" title="系统字典">
                                            <MenuItem name="3211">添加</MenuItem>
                                            <MenuItem name="3212">修改</MenuItem>
                                            <MenuItem name="3213">删除</MenuItem>
                                        </MenuGroup>
                                        <MenuGroup name="322" title="客户字典">
                                            <MenuItem name="3221">添加</MenuItem>
                                            <MenuItem name="3222">修改</MenuItem>
                                            <MenuItem name="3223">删除</MenuItem>
                                        </MenuGroup>
                                    </SubMenu>
                                    <MenuItem name="33">权限管理</MenuItem>
                                </SubMenu>
                            </Menu>
                            <Button onClick={() => {
                                setActiveName('3212');
                            }}>选中指定菜单</Button>
                        </div>
                        <Divider align="left"><Text type="primary">侧边菜单</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            侧边菜单需指定 <Text code>dir</Text> 为 <Text code>v</Text><br/>
                            默认选中的菜单可指定 <Text code>activeName</Text>，如果选中的菜单项为子菜单，默认展开父菜单项,
                            <Text code>activeName</Text>属性为绑定可控属性
                        </Paragraph>
                        <DemoCode data={codes['menu_vertical']}/>
                    </Card>
                </Space>


                <Space id="menu_accordion" dir="v">
                    <Card bordered>
                        <div style={{width: '220px', 'border-right': '1px solid var(--cui-color-border)'}}>
                            <Menu dir="v" accordion>
                                <SubMenu name="1" icon={<Icon name="users"/>} title="角色管理">
                                    <MenuItem name="11">添加</MenuItem>
                                    <MenuItem name="12">修改</MenuItem>
                                    <MenuItem name="13">删除</MenuItem>
                                </SubMenu>
                                <MenuItem name="2" icon={<Icon name="user"/>}>用户管理</MenuItem>
                                <SubMenu name="3" icon={<Icon name="cog"/>} title="系统管理">
                                    <MenuItem name="31">菜单管理</MenuItem>
                                    <SubMenu name="32" title="字典管理">
                                        <MenuGroup name="321" title="系统字典">
                                            <MenuItem name="3211">添加</MenuItem>
                                            <MenuItem name="3212">修改</MenuItem>
                                            <MenuItem name="3213">删除</MenuItem>
                                        </MenuGroup>
                                        <MenuGroup name="322" title="客户字典">
                                            <MenuItem name="3221">添加</MenuItem>
                                            <MenuItem name="3222">修改</MenuItem>
                                            <MenuItem name="3223">删除</MenuItem>
                                        </MenuGroup>
                                    </SubMenu>
                                    <MenuItem name="33">权限管理</MenuItem>
                                </SubMenu>
                            </Menu>
                        </div>
                        <Divider align="left"><Text type="primary">手风琴方式</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            侧边菜单指定 <Text code>accordion</Text> 属性，可以让菜单的打开方式支持手风琴方式<br/>
                        </Paragraph>
                        <DemoCode data={codes['menu_accordion']}/>
                    </Card>
                </Space>


                <Space id="menu_theme" dir="v">
                    <Card bordered>
                        <Space dir="v">
                            <Menu dir="h" theme="dark">
                                <SubMenu name="1" icon={<Icon name="users"/>} title="角色管理">
                                    <SubMenu name="11" title="添加" align="rightTop">
                                        <MenuItem name="111">添加超管</MenuItem>
                                        <MenuItem name="112">添加职员</MenuItem>
                                    </SubMenu>
                                    <MenuItem name="12">修改</MenuItem>
                                    <MenuItem name="13">删除</MenuItem>
                                </SubMenu>
                                <MenuItem name="2" icon={<Icon name="user"/>}>用户管理</MenuItem>
                                <MenuItem name="31" icon={<Icon name="list"/>}>菜单管理</MenuItem>
                                <MenuItem name="33" icon={<Icon name="tool"/>}>权限管理</MenuItem>
                                <SubMenu name="32" title="字典管理" icon={<Icon name="cog"/>}>
                                    <MenuGroup name="321" title="系统字典">
                                        <MenuItem name="3211">添加</MenuItem>
                                        <MenuItem name="3212">修改</MenuItem>
                                        <MenuItem name="3213">删除</MenuItem>
                                    </MenuGroup>
                                    <MenuGroup name="322" title="客户字典">
                                        <MenuItem name="3221">添加</MenuItem>
                                        <MenuItem name="3222">修改</MenuItem>
                                        <MenuItem name="3223">删除</MenuItem>
                                    </MenuGroup>
                                </SubMenu>
                            </Menu>

                            <div style={{width: '220px', 'border-right': '1px solid #ccc'}}>
                                <Menu dir="v" theme="dark">
                                    <SubMenu name="1" icon={<Icon name="users"/>} title="角色管理">
                                        <MenuItem name="11">添加</MenuItem>
                                        <MenuItem name="12">修改</MenuItem>
                                        <MenuItem name="13">删除</MenuItem>
                                    </SubMenu>
                                    <MenuItem name="2" icon={<Icon name="user"/>}>用户管理</MenuItem>
                                    <SubMenu name="3" icon={<Icon name="cog"/>} title="系统管理">
                                        <MenuItem name="31">菜单管理</MenuItem>
                                        <SubMenu name="32" title="字典管理">
                                            <MenuGroup name="321" title="系统字典">
                                                <MenuItem name="3211">添加</MenuItem>
                                                <MenuItem name="3212">修改</MenuItem>
                                                <MenuItem name="3213">删除</MenuItem>
                                            </MenuGroup>
                                            <MenuGroup name="322" title="客户字典">
                                                <MenuItem name="3221">添加</MenuItem>
                                                <MenuItem name="3222">修改</MenuItem>
                                                <MenuItem name="3223">删除</MenuItem>
                                            </MenuGroup>
                                        </SubMenu>
                                        <MenuItem name="33">权限管理</MenuItem>
                                    </SubMenu>
                                </Menu>
                            </div>
                        </Space>
                        <Divider align="left"><Text type="primary">菜单主题</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            菜单主题通过 <Text code>theme</Text> 属性设置 支持 <Text code>light</Text>、<Text code>dark</Text>
                        </Paragraph>
                        <DemoCode data={codes['menu_theme']}/>
                    </Card>
                </Space>


                <Space id="menu_min" dir="v">
                    <Card bordered>
                        <div style={{width: min() ? '80px' : '280px', 'transition': 'all 0.25s ease-in-out', 'border-right': '1px solid var(--cui-color-border)'}}>
                            <Menu dir="v" accordion min={min()}>
                                <SubMenu name="1" icon={<Icon name="users"/>} title="角色管理">
                                    <MenuItem name="11">添加</MenuItem>
                                    <MenuItem name="12">修改</MenuItem>
                                    <MenuItem name="13">删除</MenuItem>
                                </SubMenu>
                                <MenuItem name="2" icon={<Icon name="user"/>}>用户管理</MenuItem>
                                <MenuItem name="31" icon={<Icon name="list"/>}>菜单管理</MenuItem>
                                <MenuItem name="33" icon={<Icon name="tool"/>}>权限管理</MenuItem>
                                <SubMenu name="32" title="字典管理" icon={<Icon name="cog"/>}>
                                    <MenuGroup name="321" title="系统字典">
                                        <MenuItem name="3211">添加</MenuItem>
                                        <MenuItem name="3212">修改</MenuItem>
                                        <MenuItem name="3213">删除</MenuItem>
                                    </MenuGroup>
                                    <MenuGroup name="322" title="客户字典">
                                        <MenuItem name="3221">添加</MenuItem>
                                        <MenuItem name="3222">修改</MenuItem>
                                        <MenuItem name="3223">删除</MenuItem>
                                    </MenuGroup>
                                </SubMenu>
                            </Menu>
                            <Button onClick={() => {
                                setMin(!min());
                            }}>展开/收缩</Button>
                        </div>
                        <Divider align="left"><Text type="primary">最小化菜单</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            菜单最小化的顶级菜单需添加图标，最小化后只显示图标，最小化的 <Text code>min</Text> 参数为可控绑定属性
                        </Paragraph>
                        <DemoCode data={codes['menu_min']}/>
                    </Card>
                </Space>

                <Space dir="v" size={24} id="comp_api">
                    <Title type="primary" heading={3}>API</Title>
                    <Space id="comp_props" dir="v">
                        <Title type="primary" heading={4}>Menu Props</Title>
                        <Table columns={propsColumns} data={propsData} border size="small" />
                    </Space>

                    <Space id="comp_menu_item_props" dir="v">
                        <Title type="primary" heading={4}>MenuItem Props</Title>
                        <Table columns={propsColumns} data={itemPropsData} border size="small" />
                    </Space>

                    <Space id="comp_submenu_props" dir="v">
                        <Title type="primary" heading={4}>SubMenu Props</Title>
                        <Table columns={propsColumns} data={submenuPropsData} border size="small" />
                    </Space>

                    <Space id="comp_menugroup_props" dir="v">
                        <Title type="primary" heading={4}>MenuGroup Props</Title>
                        <Table columns={propsColumns} data={menugroupPropsData} border size="small" />
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
