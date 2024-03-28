import { Popover } from "@/components/Popover"
import { BothSide, Space } from "@/components/Layout"
import { Button } from "@/components/Button"
import { createSignal } from "solid-js"
import { Title } from "@/components/Typography/Title";
import { Card } from "@/components/Card";
import { Divider } from "@/components/Divider";
import { Paragraph } from "@/components/Typography/Paragraph";
import { Text } from "@/components/Typography/Text";
import { Table } from "@/components/Table";
import { propsData, anchorData, codes } from "./config";
import { CompAnchor } from "../../common/CompAnchor";
import { propsColumns } from "../../common/columns";

import { hljs, useDirective } from "../../common/hljs";
import { DemoCode } from "../../common/code";
import { Icon, Input } from "@/components";
useDirective(hljs);

export default function PopoverPage () {
    const [visible, setVisible] = createSignal(false);
    const style = {width: '120px', 'text-align': 'center'}
    return <>
        <div class="sys-ctx-main-left" use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    Popover 气泡提示
                </Title>
                <Space id="popover_base" dir="v">
                    <Card bordered>
                        <Space dir="v">
                            <div>
                                <Popover content="over Content">
                                    <span>OVER</span>
                                </Popover>
                            </div>
                            <div>
                                <Popover content="click Content" trigger="click">
                                    <span>Click</span>
                                </Popover>
                            </div>
                        </Space>
                        <Divider align="left"><Text type="primary">基础用法</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            支持两种种触发方式：鼠标悬停、点击。默认是鼠标悬停。
                        </Paragraph>
                        <DemoCode data={codes['popover_base']}/>
                    </Card>
                </Space>

                <Space id="popover_align" dir="v">
                    <Card bordered>
                        <Space dir="v" align="center">
                            <Space dir="v" style={{width: '500px'}}>
                                <Space dir="h" align="center" justify="center" size={30}>
                                    <Popover content="Content" trigger="click" align="topLeft" arrow>
                                        <Button style={style}>Top Left</Button>
                                    </Popover>
                                    <Popover content="Content" trigger="click" align="top" arrow>
                                        <Button style={style}>Top Center</Button>
                                    </Popover>
                                    <Popover content="Content" trigger="click" align="topRight" arrow>
                                        <Button style={style}>Top Right</Button>
                                    </Popover>
                                </Space>
                                <BothSide>
                                    <Space dir="v">
                                        <Popover content={<div><div>Content</div><div>Content</div><div>Content</div></div>} trigger="click" align="leftTop" arrow>
                                            <Button>Left Top</Button>
                                        </Popover>
                                        <Popover content={<div><div>Content</div><div>Content</div><div>Content</div></div>} trigger="click" align="left" arrow>
                                            <Button>Left Center</Button>
                                        </Popover>
                                        <Popover content={<div><div>Content</div><div>Content</div><div>Content</div></div>} trigger="click" align="leftBottom" arrow>
                                            <Button>Left Bottom</Button>
                                        </Popover>
                                    </Space>
                                    <Space dir="v">
                                        <Popover content={<div><div>Content</div><div>Content</div><div>Content</div></div>} trigger="click" align="rightTop" arrow>
                                            <Button>Right Top</Button>
                                        </Popover>
                                        <Popover content={<div><div>Content</div><div>Content</div><div>Content</div></div>} trigger="click" align="right" arrow>
                                            <Button>Right Center</Button>
                                        </Popover>
                                        <Popover content={<div><div>Content</div><div>Content</div><div>Content</div></div>} trigger="click" align="rightBottom" arrow>
                                            <Button>Right Bottom</Button>
                                        </Popover>
                                    </Space>
                                </BothSide>
                                <Space dir="h" align="center" justify="center" size={30}>
                                    <Popover content="Content" trigger="click" align="bottomLeft" arrow>
                                        <Button style={style}>Bottom Left</Button>
                                    </Popover>
                                    <Popover content="Content" trigger="click" align="bottom" arrow>
                                        <Button style={style}>Bottom Center</Button>
                                    </Popover>
                                    <Popover content="Content" trigger="click" align="bottomRight" arrow>
                                        <Button style={style}>Bottom Right</Button>
                                    </Popover>
                                </Space>
                            </Space>
                        </Space>
                        <Divider align="left"><Text type="primary">位置</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            支持12个不同的方向显示，具体配置可查看API。
                        </Paragraph>
                        <DemoCode data={codes['popover_align']}/>
                    </Card>
                </Space>

                <Space id="popover_controller" dir="v">
                    <Card bordered>
                        <Space dir="v">
                            <div>
                                <Popover visible={[visible, setVisible]} theme="light" content={<div>
                                    <div>content!content!content!</div>
                                    <div>content!content!content!</div>
                                    <div>content!content!content!</div>
                                    <div>content!content!content!</div>
                                    <Button type="text" size="small" onClick={() => {
                                        setVisible(false);
                                    }}>Close</Button>
                                </div>} arrow trigger="click">
                                    <span>Click</span>
                                </Popover>

                                <div>
                                <Popover theme="light" align="topRight" content={<Space dir="v" style={{width: '150px'}}>
                                    <div><Icon name="help-circle" color="var(--cui-warning-color)"/> <Text>确认用户信息</Text></div>
                                    <div>是否确认删除该信息</div>
                                </Space>} arrow confirm onOk={() => {
                                    console.log(1);
                                    return new Promise((resolve) => {
                                        setTimeout(() => {
                                            resolve(false);
                                        }, 2000)
                                    });
                                }}>
                                    <span>confirm</span>
                                </Popover>
                                </div>
                            </div>
                        </Space>
                        <Divider align="left"><Text type="primary">可控</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            visible属性为可控属性
                        </Paragraph>
                        <DemoCode data={codes['popover_controller']}/>
                    </Card>
                </Space>

                <Space dir="v" size={24} id="comp_api">
                    <Title type="primary" heading={3}>API</Title>
                    <Space id="comp_props" dir="v">
                        <Title type="primary" heading={4}>Popover Props</Title>
                        <Table columns={propsColumns} data={propsData} border size="small" />
                    </Space>
                </Space>
            </Space>
        </div>

        <CompAnchor data={anchorData}/>
    </>
}
