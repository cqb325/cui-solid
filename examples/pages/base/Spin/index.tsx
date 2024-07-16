import { Spin } from "@/components/Spin"
import { Button } from "@/components/Button"
import { createSignal, Show } from "solid-js"
import { Space } from "@/components/Layout";
import { Title } from "@/components/Typography/Title";
import { Card } from "@/components/Card";
import { Divider } from "@/components/Divider";
import { Text } from "@/components/Typography/Text";
import { Paragraph } from "@/components/Typography/Paragraph";
import { Table } from "@/components/Table";
import { propsData, anchorData, codes } from "./config";
import { CompAnchor } from "../../common/CompAnchor";
import { propsColumns } from "../../common/columns";
import { hljs, useDirective } from "../../common/hljs";
import { DemoCode } from "../../common/code";
useDirective(hljs);

export default function SpinPage () {
    const [loading, setLoading] = createSignal(true);
    return <>
        <div class="sys-ctx-main-left" use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    Spin 加载中
                </Title>
                <Space id="spin_base" dir="v">
                    <Card bordered>
                        <Space dir="v">
                            <Card title="卡片" style={{width: '300px', height: '300px', border: '1px solid #ccc', position: 'relative'}}>
                                <div>卡片内容卡片内容</div>
                                <div>卡片内容卡片内容</div>
                                <div>卡片内容卡片内容</div>
                                <div>卡片内容卡片内容</div>
                                <div>卡片内容卡片内容</div>
                                <div>卡片内容卡片内容</div>
                                <Spin type="pulse" />
                            </Card>

                            <Card title="卡片" style={{width: '300px', height: '300px', border: '1px solid #ccc', position: 'relative'}}>
                                <div>卡片内容卡片内容</div>
                                <div>卡片内容卡片内容</div>
                                <div>卡片内容卡片内容</div>
                                <div>卡片内容卡片内容</div>
                                <div>卡片内容卡片内容</div>
                                <div>卡片内容卡片内容</div>
                                <Spin type="gear" />
                            </Card>

                            <Card title="卡片" style={{width: '300px', height: '300px', border: '1px solid #ccc', position: 'relative'}}>
                                <div>卡片内容卡片内容</div>
                                <div>卡片内容卡片内容</div>
                                <div>卡片内容卡片内容</div>
                                <div>卡片内容卡片内容</div>
                                <div>卡片内容卡片内容</div>
                                <div>卡片内容卡片内容</div>
                                <Spin type="oval" />
                            </Card>

                            <Card title="卡片" style={{width: '300px', height: '300px', border: '1px solid #ccc', position: 'relative'}}>
                                <div>卡片内容卡片内容</div>
                                <div>卡片内容卡片内容</div>
                                <div>卡片内容卡片内容</div>
                                <div>卡片内容卡片内容</div>
                                <div>卡片内容卡片内容</div>
                                <div>卡片内容卡片内容</div>
                                <Spin type="dot" size="small"/>
                            </Card>
                        </Space>
                        <Divider align="left"><Text type="primary">基础用法</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            Spin的父组件需要设置position为 <Text code>relative/absolute/fixed</Text>
                        </Paragraph>
                        <Paragraph type="secondary" spacing="extended">
                            Spin的type支持 <Text code>pulse/gear/oval</Text> 默认为 pulse
                        </Paragraph>
                        <DemoCode data={codes['spin_base']}/>
                    </Card>
                </Space>

                <Space id="spin_control" dir="v">
                    <Card bordered>
                        <Space dir="v">
                            <Card title="卡片" style={{width: '300px', height: '300px', border: '1px solid #ccc', position: 'relative'}}>
                                <div>卡片内容卡片内容</div>
                                <div>卡片内容卡片内容</div>
                                <div>卡片内容卡片内容</div>
                                <div>卡片内容卡片内容</div>
                                <div>卡片内容卡片内容</div>
                                <div>卡片内容卡片内容</div>
                                <Show when={loading()}>
                                    <Spin title="加载中" />
                                </Show>
                            </Card>
                            <div>
                                <Button type="primary" onClick={() => {
                                    setLoading(!loading());
                                }}>Toggle</Button>
                            </div>
                        </Space>
                        <Divider align="left"><Text type="primary">可控</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            可以设置title属性修改文案，默认为loading...
                        </Paragraph>
                        <DemoCode data={codes['spin_control']}/>
                    </Card>
                </Space>

                <Space dir="v" size={24} id="comp_api">
                    <Title type="primary" heading={3}>API</Title>
                    <Space id="comp_props" dir="v">
                        <Title type="primary" heading={4}>Spin Props</Title>
                        <Table columns={propsColumns} data={propsData} border size="small" />
                    </Space>
                </Space>
            </Space>
        </div>

        <CompAnchor data={anchorData}/>
    </>
}
