import { Button } from "@/components/Button"
import { Card } from "@/components/Card"
import { Divider } from "@/components/Divider"
import { BothSide, Space } from "@/components/Layout"
import { Table } from "@/components/Table"
import { Tooltip } from "@/components/Tooltip"
import { Paragraph } from "@/components/Typography/Paragraph"
import { Text } from "@/components/Typography/Text"
import { Title } from "@/components/Typography/Title"
import { CompAnchor } from "../../common/CompAnchor"
import { propsColumns } from "../../common/columns"
import { anchorData, codes, propsData } from "./config"
import { hljs, useDirective } from "../../common/hljs";
import { DemoCode } from "../../common/code";
import type { JSX } from "solid-js"
useDirective(hljs);

export default function TooltipPage () {
    const style:JSX.CSSProperties = {width: '120px', 'text-align': 'center'}

    return <>
        <div class="sys-ctx-main-left" use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    Tooltip 文字提示
                </Title>
                <Space id="tooltip_base" dir="v">
                    <Card bordered>
                        <Space dir="h">
                            <Tooltip content={<p>CSS 是开放 Web 的核心语言之一，并根据 W3C 规范在 Web 浏览器中进行了标准化。</p>}>
                                <span>mouse over show tips</span>
                            </Tooltip>
                        </Space>
                        <Divider align="left"><Text type="primary">基础用法</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            简单的展示，添加属性closable可以关闭标签。<br/>
                            点击关闭标签时，会触发 onClose 事件。
                        </Paragraph>
                        <DemoCode data={codes['tooltip_base']}/>
                    </Card>
                </Space>


                <Space id="popover_align" dir="v">
                    <Card bordered>
                        <Space dir="v" align="center">
                            <Space dir="v" style={{width: '500px'}}>
                                <Space dir="h" align="center" justify="center" size={30}>
                                    <Tooltip content="Content" align="topLeft">
                                        <Button style={style}>Top Left</Button>
                                    </Tooltip>
                                    <Tooltip content="Content" align="top">
                                        <Button style={style}>Top Center</Button>
                                    </Tooltip>
                                    <Tooltip content="Content" align="topRight">
                                        <Button style={style}>Top Right</Button>
                                    </Tooltip>
                                </Space>
                                <BothSide>
                                    <Space dir="v">
                                        <Tooltip content={<div><div>Content</div><div>Content</div><div>Content</div></div>} align="leftTop">
                                            <Button>Left Top</Button>
                                        </Tooltip>
                                        <Tooltip content={<div><div>Content</div><div>Content</div><div>Content</div></div>} align="left">
                                            <Button>Left Center</Button>
                                        </Tooltip>
                                        <Tooltip content={<div><div>Content</div><div>Content</div><div>Content</div></div>} align="leftBottom">
                                            <Button>Left Bottom</Button>
                                        </Tooltip>
                                    </Space>
                                    <Space dir="v">
                                        <Tooltip content={<div><div>Content</div><div>Content</div><div>Content</div></div>} align="rightTop">
                                            <Button>Right Top</Button>
                                        </Tooltip>
                                        <Tooltip content={<div><div>Content</div><div>Content</div><div>Content</div></div>} align="right">
                                            <Button>Right Center</Button>
                                        </Tooltip>
                                        <Tooltip content={<div><div>Content</div><div>Content</div><div>Content</div></div>} align="rightBottom">
                                            <Button>Right Bottom</Button>
                                        </Tooltip>
                                    </Space>
                                </BothSide>
                                <Space dir="h" align="center" justify="center" size={30}>
                                    <Tooltip content="Content" align="bottomLeft">
                                        <Button style={style}>Bottom Left</Button>
                                    </Tooltip>
                                    <Tooltip content="Content" align="bottom">
                                        <Button style={style}>Bottom Center</Button>
                                    </Tooltip>
                                    <Tooltip content="Content" align="bottomRight">
                                        <Button style={style}>Bottom Right</Button>
                                    </Tooltip>
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

                <Space id="tooltip_multi" dir="v">
                    <Card bordered>
                        <Space dir="h">
                            <Tooltip content={<div>
                                <Paragraph style={{color: '#fff'}}>Tip Content</Paragraph>
                                <Paragraph style={{color: '#fff'}}>自定义多行内容</Paragraph>
                            </div>}>
                                <span>show tips</span>
                            </Tooltip>
                        </Space>
                        <Divider align="left"><Text type="primary">多行内容</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            content内容为自定义JSX标签，可以编辑复杂内容。
                        </Paragraph>
                        <DemoCode data={codes['tooltip_multi']}/>
                    </Card>
                </Space>

                <Space id="tooltip_disabled" dir="v">
                    <Card bordered>
                        <Space dir="h">
                            <Tooltip disabled content={<div>
                                <Paragraph style={{color: '#fff'}}>Tip Content</Paragraph>
                            </div>}>
                                <span>show tips</span>
                            </Tooltip>
                        </Space>
                        <Divider align="left"><Text type="primary">禁用</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            设置disabled可以禁用提示。
                        </Paragraph>
                        <DemoCode data={codes['tooltip_disabled']}/>
                    </Card>
                </Space>

                <Space id="tooltip_theme" dir="v">
                    <Card bordered>
                        <Space dir="h">
                            <Tooltip theme="light" content={<div>
                                <Paragraph>Tip Content</Paragraph>
                            </div>}>
                                <span>show tips</span>
                            </Tooltip>

                            <Tooltip content={<div>
                                <Paragraph style={{color: '#fff'}}>Tip Content</Paragraph>
                            </div>}>
                                <span>show tips</span>
                            </Tooltip>
                        </Space>
                        <Divider align="left"><Text type="primary">样式</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            通过设置 theme 切换显示样式, 支持light和dark 默认dark
                        </Paragraph>
                        <DemoCode data={codes['tooltip_theme']}/>
                    </Card>
                </Space>

                <Space dir="v" size={24} id="comp_api">
                    <Title type="primary" heading={3}>API</Title>
                    <Space id="comp_props" dir="v">
                        <Title type="primary" heading={4}>Tooltip Props</Title>
                        <Table columns={propsColumns} data={propsData} border size="small" />
                    </Space>
                </Space>
            </Space>
        </div>

        <CompAnchor data={anchorData}/>
    </>
}
