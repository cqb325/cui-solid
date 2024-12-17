import { createSignal } from "solid-js";
import type { ButtonProps } from "@/components/Button";
import { Button } from "@/components/Button";
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
import { F7AntFill, F7Cat, F7HifispeakerFill, F7Plus, F7Search, F7Trash } from "cui-solid-icons/f7";
import { RadioGroup, Switch } from "@/components";
import { FeatherChevronRight, FeatherPlus, FeatherSearch } from "cui-solid-icons/feather";
useDirective(hljs);

const ButtonPage = () => {
    const [loading, setLoading] = createSignal(false);
    const [theme, setTheme] = createSignal<ButtonProps['theme']>('solid');
    const [theme2, setTheme2] = createSignal<ButtonProps['theme']>('solid');
    const [disabled, setDisabled] = createSignal<boolean>(true);
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
                                <Button type="secondary">Secondary</Button>
                                <Button type="tertiary">Tertiary</Button>
                                <Button type="success">Success</Button>
                            </Space>
                            <Space dir="h">
                                <Button type="error">Error</Button>
                                <Button type="danger">Danger</Button>
                                <Button type="warning">Warning</Button>
                                <Button type="default">Default</Button>
                            </Space>
                        </Space>
                        <Divider align="left"><Text type="primary">按钮类型</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            通过设置 type 为 primary、secondary、tertiary、success、warning、error、danger、default 创建不同样式的按钮，不设置为默认样式。
                        </Paragraph>
                    </Card>
                </div>


                <div id="button_theme">
                    <Card bordered>
                        <Space dir="v" size={24} inline align="baseline">
                            <RadioGroup stick value={[theme, setTheme]} data={[{value: 'solid', label: 'Solid'}, {value: 'light', label: 'light'},
                                {value: 'borderless', label: 'borderless'}, {value: 'outline', label: 'outline'},
                                {value: 'dashed', label: 'dashed'}
                            ]}/>
                            <Space dir="h">
                                <Button theme={theme()} type="primary">Primary</Button>
                                <Button theme={theme()} type="secondary">Secondary</Button>
                                <Button theme={theme()} type="tertiary">Tertiary</Button>
                                <Button theme={theme()} type="success">Success</Button>
                            </Space>
                            <Space dir="h">
                                <Button theme={theme()} type="error">Error</Button>
                                <Button theme={theme()} type="danger">Danger</Button>
                                <Button theme={theme()} type="warning">Warning</Button>
                                <Button theme={theme()} type="default">Default</Button>
                            </Space>
                        </Space>
                        <Divider align="left"><Text type="primary">样式</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            theme="solid/light/borderless/outline/dashed"
                        </Paragraph>
                    </Card>
                </div>

                <div id="button_disabled">
                    <Card bordered>
                        <Space dir="v" size={24} inline align="baseline">
                            <RadioGroup stick value={[theme, setTheme]} data={[{value: 'solid', label: 'Solid'}, {value: 'light', label: 'light'},
                                {value: 'borderless', label: 'borderless'}, {value: 'outline', label: 'outline'},
                                {value: 'dashed', label: 'dashed'}
                            ]}/>
                            <Space>禁用: <Switch checked={[disabled, setDisabled]} /></Space>
                            <Space dir="h">
                                <Button theme={theme()} disabled={disabled()} type="primary">Primary</Button>
                                <Button theme={theme()} disabled={disabled()} type="secondary">Secondary</Button>
                                <Button theme={theme()} disabled={disabled()} type="tertiary">Tertiary</Button>
                                <Button theme={theme()} disabled={disabled()} type="success">Success</Button>
                            </Space>
                            <Space dir="h">
                                <Button theme={theme()} disabled={disabled()} type="error">Error</Button>
                                <Button theme={theme()} disabled={disabled()} type="danger">Danger</Button>
                                <Button theme={theme()} disabled={disabled()} type="warning">Warning</Button>
                                <Button theme={theme()} disabled={disabled()} type="default">Default</Button>
                            </Space>
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
                                <Button size="small" icon={<FeatherChevronRight/>}>To Right</Button>
                            </Space>
                            <Space dir="h">
                                <Button type="primary" size="large" icon={<F7Search />}>SEARCH</Button>
                                <Button type="primary" size="large" icon={<F7Search />} />
                                <Button type="primary" size="large" shape="circle" icon={<F7Search />} />
                            </Space>
                            <Space dir="h">
                                <Button type="primary" size="small" icon={<F7Search />}>SEARCH</Button>
                                <Button type="primary" size="small" shape="circle" icon={<F7Search />} />
                                <Button type="primary" size="small" icon={<F7Search />} />
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
                            <Button type="primary" icon={<F7Search />}>普通按钮</Button>
                            <Button type="primary" shape="round" icon={<F7Search />}>圆角按钮</Button>
                            <Button type="primary" shape="circle" icon={<F7Search />} />
                            <Button type="success" size="large" shape="round">Success</Button>
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
                                <Button type="primary" icon={<F7Search />} />
                                <Button type="default" icon={<F7Search />} />
                                <Button theme="dashed" icon={<F7Plus />} />
                                <Button type="primary" shape="circle" icon={<F7Search />} />
                            </Space>
                            <Space dir="h" align="center">
                                <Button type="primary" icon={<F7Search />}>Search</Button>
                                <Button type="primary" icon={<F7Search />} iconAlign="right">Search</Button>
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
                                <Button type="success" loading size="small" shape="circle" />
                            </Space>
                            <Space dir="h">
                                <Button type="primary" loading>Loading</Button>
                                <Button type="primary" loading={loading()} icon={<FeatherPlus/>} onClick={() => {
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


                <div id="button_block">
                    <Card bordered>
                        <Space dir="v">
                            <Space dir="h" align="center" style={{width: '400px'}}>
                                <Button type="primary" block>block button</Button>
                            </Space>
                        </Space>
                        <Divider align="left"><Text type="primary">块状</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            block
                        </Paragraph>
                        <DemoCode data={codes['button_loading']}/>
                    </Card>
                </div>

                <div id="button_group">
                    <Card bordered>
                        <Space dir="v" align="baseline">
                            <Space dir="h">
                                <ButtonGroup theme="solid" type="primary">
                                    <Button>拷贝</Button>
                                    <Button>复制</Button>
                                    <Button>粘贴</Button>
                                </ButtonGroup>
                            </Space>
                            <Space dir="h">
                                <ButtonGroup theme="light" type="secondary">
                                    <Button>拷贝</Button>
                                    <Button>复制</Button>
                                    <Button>粘贴</Button>
                                </ButtonGroup>
                            </Space>
                            <Space dir="h">
                                <ButtonGroup theme="outline" type="tertiary">
                                    <Button>拷贝</Button>
                                    <Button>复制</Button>
                                    <Button>粘贴</Button>
                                </ButtonGroup>
                            </Space>
                            <Space dir="h">
                                <ButtonGroup theme="light" type="default">
                                    <Button>拷贝</Button>
                                    <Button>复制</Button>
                                    <Button>粘贴</Button>
                                </ButtonGroup>
                            </Space>

                            <ButtonGroup type="primary" size="small">
                                <Button>Copy</Button>
                                <Button>Paste</Button>
                                <Button>Search</Button>
                            </ButtonGroup>
                            <ButtonGroup type="primary" size="large">
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
                                <Button icon={<F7AntFill />} />
                                <Button icon={<F7Cat />} />
                                <Button icon={<F7HifispeakerFill />} />
                            </ButtonGroup>
                            <ButtonGroup type="default" size="large">
                                <Button icon={<F7AntFill/>} />
                                <Button icon={<F7Cat/>} />
                                <Button icon={<F7HifispeakerFill />} />
                            </ButtonGroup>
                            <ButtonGroup type="default" disabled>
                                <Button icon={<F7AntFill/>} />
                                <Button icon={<F7Cat />} />
                                <Button icon={<F7HifispeakerFill />} />
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
