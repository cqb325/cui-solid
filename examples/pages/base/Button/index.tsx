import { createSignal } from "solid-js";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { Space } from "@/components/Layout/Space";
import { ButtonGroup } from "@/components/ButtonGroup";
import { Title } from "@/components/Typography/Title";
import { Card } from "@/components/Card";
import { Text } from "@/components/Typography/Text";
import { Divider } from "@/components/Divider";
import { Paragraph } from "@/components/Typography/Paragraph";
import { Table } from "@/components/Table";
import { CompAnchor } from "../../common/CompAnchor";
import { propsData, eventsData, groupData, anchorData, codes } from "./config";
import { eventsColumns, propsColumns } from "../../common/columns";
import { hljs, useDirective } from "../../common/hljs";
import { DemoCode } from "../../common/code";
useDirective(hljs);

const ButtonPage = () => {
    const [loading, setLoading] = createSignal(false);
    return <>
        <div class="sys-ctx-main-left" use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    Button 按钮
                </Title>
                <div id="button_type">
                    <Card bordered>
                        <Space dir="v">
                            <Space dir="h">
                                <Button type="primary">Primary</Button>
                                <Button type="success">Success</Button>
                                <Button type="error">Error</Button>
                                <Button type="warning">Warning</Button>
                            </Space>
                            <Space dir="h">
                                <Button type="default">Default</Button>
                                <Button type="text">Text Button</Button>
                                <Button type="link">LINK</Button>
                                <Button type="dashed">Dashed BUTTON</Button>
                            </Space>
                        </Space>
                        <Divider align="left"><Text type="primary">按钮类型</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            通过设置 type 为 primary、success、warning、error、default、dashed、text、link 创建不同样式的按钮，不设置为默认样式。
                        </Paragraph>
                        <DemoCode data={codes['button_type']}/>
                    </Card>
                </div>


                <div id="button_danger">
                    <Card bordered>
                        <Space dir="v">
                            <Space dir="h">
                                <Button type="primary" danger>Primary</Button>
                                <Button type="default" danger>Default</Button>
                                <Button type="text" danger>Text Button</Button>
                                <Button type="link" danger>LINK</Button>
                                <Button type="dashed" danger>Dashed BUTTON</Button>
                            </Space>
                        </Space>
                        <Divider align="left"><Text type="primary">危险按钮</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            危险按钮， 通过danger属性设置。
                        </Paragraph>
                        <DemoCode data={codes['button_danger']}/>
                    </Card>
                </div>

                <div id="button_ghost">
                    <Card bordered>
                        <Space dir="h" style={{background: 'var(--cui-color-fill-0)', padding: '10px'}}>
                            <Button type="primary" ghost>PRIMARY</Button>
                            <Button type="success" ghost>SUCCESS</Button>
                            <Button type="error" ghost>ERROR</Button>
                            <Button type="warning" ghost>WARNING</Button>
                            <Button type="default" ghost>DEFAULT</Button>
                            <Button type="dashed" ghost>DASHED</Button>
                            <Button type="primary" danger ghost>DASHED</Button>
                        </Space>
                        <Divider align="left"><Text type="primary">幽灵按钮</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            幽灵按钮将其他按钮的内容反色，背景变为透明，常用在有色背景上。
                        </Paragraph>
                        <DemoCode data={codes['button_ghost']}/>
                    </Card>
                </div>

                <div id="button_disabled">
                    <Card bordered>
                        <Space dir="h">
                            <Button type="primary" disabled>PRIMARY</Button>
                            <Button disabled>Default</Button>
                            <Button type="primary" ghost disabled>Ghost</Button>
                            <Button type="link" disabled>Link</Button>
                            <Button type="text" disabled>Text</Button>
                            <Button type="dashed" disabled>Dashed</Button>
                            <Button type="primary" disabled danger>Danger</Button>
                        </Space>
                        <Divider align="left"><Text type="primary">禁用按钮</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            通过添加disabled属性可将按钮设置为不可用状态。
                        </Paragraph>
                        <DemoCode data={codes['button_disabled']}/>
                    </Card>
                </div>

                <div id="button_size">
                    <Card bordered>
                        <Space dir="v">
                            <Space dir="h" align="center">
                                <Button type="primary" size="large">LARGE</Button>
                                <Button type="primary">DEFAULT</Button>
                                <Button type="primary" size="small">SMALL</Button>
                            </Space>
                            <Space dir="h">
                                <Button type="primary" size="large" icon={<Icon name="search1"/>}>SEARCH</Button>
                                <Button type="primary" size="large" icon={<Icon name="search1"/>} />
                                <Button type="primary" size="large" circle icon={<Icon name="search1"/>} />
                            </Space>
                            <Space dir="h">
                                <Button type="primary" size="small" icon={<Icon name="search1"/>}>SEARCH</Button>
                                <Button type="primary" size="small" icon={<Icon name="search1"/>} />
                                <Button type="primary" size="small" circle icon={<Icon name="search1"/>} />
                                <Button type="text" size="small">Text</Button>
                            </Space>
                        </Space>
                        <Divider align="left"><Text type="primary">按钮尺寸</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            按钮有三种尺寸：大、默认（中）、小
                        </Paragraph>
                        <Paragraph type="secondary" spacing="extended">
                            通过设置size为large和small将按钮设置为大和小尺寸，不设置为默认（中）尺寸。
                        </Paragraph>
                        <DemoCode data={codes['button_size']}/>
                    </Card>
                </div>

                <div id="button_shaps">
                    <Card bordered>
                        <Space dir="h" align="center">
                            <Button type="primary" icon={<Icon name="search1"/>}>普通按钮</Button>
                            <Button type="primary" round icon={<Icon name="search1"/>}>圆角按钮</Button>
                            <Button type="primary" circle icon={<Icon name="search1"/>} />
                            <Button type="success" size="large" round>Success</Button>
                        </Space>
                        <Divider align="left"><Text type="primary">形状</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            通过设置<Text code>circle</Text>属性，可将按钮置为圆形
                        </Paragraph>
                        <Paragraph type="secondary" spacing="extended">
                            通过设置<Text code>round</Text>属性，可将按钮置为圆角
                        </Paragraph>
                        <DemoCode data={codes['button_icon']}/>
                    </Card>
                </div>

                <div id="button_icon">
                    <Card bordered>
                        <Space dir="v">
                            <Space dir="h" align="center">
                                <Button type="primary" icon={<Icon name="search1"/>} />
                                <Button type="default" icon={<Icon name="search1"/>} />
                                <Button type="dashed" icon={<Icon name="plus"/>} />
                                <Button type="primary" circle icon={<Icon name="search1"/>} />
                            </Space>
                            <Space dir="h" align="center">
                                <Button type="primary" icon={<Icon name="search1"/>}>Search</Button>
                                <Button type="primary" icon={<Icon name="search1"/>} iconAlign="right">Search</Button>
                            </Space>
                        </Space>
                        <Divider align="left"><Text type="primary">图标按钮</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            通过设置<Text code>icon</Text>属性在Button内嵌入一个Icon
                        </Paragraph>
                        <Paragraph type="secondary" spacing="extended">
                            使用Button的<Text code>icon</Text>属性，图标位置将在最左边，通过设置 <Text code>iconAlign</Text> 将按钮放置在后面。
                        </Paragraph>
                        <Paragraph type="secondary" spacing="extended">
                            通过设置<Text code>circle</Text>属性，可将按钮置为圆的形状
                        </Paragraph>
                        <DemoCode data={codes['button_icon']}/>
                    </Card>
                </div>

                <div id="button_loading">
                    <Card bordered>
                        <Space dir="v">
                            <Space dir="h" align="center">
                                <Button type="primary" loading size="small">Sphinx</Button>
                                <Button type="success" loading size="small" />
                                <Button type="success" loading size="small" circle />
                            </Space>
                            <Space dir="h">
                                <Button type="primary" loading>Loading</Button>
                                <Button type="primary" loading={loading()} onClick={() => {
                                    setLoading(true);
                                    setTimeout(() => {
                                        setLoading(false);
                                    }, 2500)
                                }}>Click Load</Button>
                            </Space>
                        </Space>
                        <Divider align="left"><Text type="primary">加载中状态</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            通过添加<Text code>loading</Text>属性可以让按钮处于加载中状态,可点击动态设置
                        </Paragraph>
                        <DemoCode data={codes['button_loading']}/>
                    </Card>
                </div>

                <div id="button_group">
                    <Card bordered>
                        <Space dir="v">
                            <ButtonGroup type="primary">
                                <Button>Copy</Button>
                                <Button>Paste</Button>
                                <Button>Search</Button>
                            </ButtonGroup>
                            <ButtonGroup type="default">
                                <Button>Copy</Button>
                                <Button>Paste</Button>
                                <Button>Search</Button>
                            </ButtonGroup>
                            <ButtonGroup type="default">
                                <Button icon={<Icon name="home"/>} />
                                <Button icon={<Icon name="user"/>} />
                                <Button icon={<Icon name="search1"/>} />
                            </ButtonGroup>
                            <ButtonGroup type="default" size="large">
                                <Button icon={<Icon name="home"/>} />
                                <Button icon={<Icon name="user"/>} />
                                <Button icon={<Icon name="search1"/>} />
                            </ButtonGroup>
                            <ButtonGroup type="default" disabled>
                                <Button icon={<Icon name="home"/>} />
                                <Button icon={<Icon name="user"/>} />
                                <Button icon={<Icon name="search1"/>} />
                            </ButtonGroup>
                        </Space>
                        <Divider align="left"><Text type="primary">按钮组</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            将多个Button放入ButtonGroup内，可实现按钮组合的效果。
                        </Paragraph>
                        <Paragraph type="secondary" spacing="extended">
                            通过设置ButtonGroup的属性<Text code>size</Text>为large和small，可将按钮组尺寸设置为大和小，不设置<Text code>size</Text>，则为默认（中）尺寸。
                        </Paragraph>
                        <Paragraph type="secondary" spacing="extended">
                            通过设置 <Text code>disabled</Text>属性可以禁用按钮组
                        </Paragraph>
                        <DemoCode data={codes['button_group']}/>
                    </Card>
                </div>

                <div id="button_api">
                    <Space dir="v" size={24}>
                        <Title type="primary" heading={3}>API</Title>
                        <Space id="button_props" dir="v">
                            <Title type="primary" heading={4}>Button Props</Title>
                            <Table columns={propsColumns} data={propsData} border size="small" />
                        </Space>
                        <Space id="button_events" dir="v">
                            <Title type="primary" heading={4}>Button Events</Title>
                            <Table columns={eventsColumns} data={eventsData} border size="small" />
                        </Space>
                        <Space id="button_group_props" dir="v">
                            <Title type="primary" heading={4}>ButtonGroup Props</Title>
                            <Table columns={propsColumns} data={groupData} border size="small" />
                        </Space>
                    </Space>
                </div>

            </Space>
        </div>
        <CompAnchor data={anchorData}/>
    </>
}
export default ButtonPage;
