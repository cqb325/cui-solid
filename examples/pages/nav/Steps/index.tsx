import { Card, Divider, Paragraph, Space, Text, Title, Steps, Button, Icon, Table } from "@/components";
import { hljs, useDirective } from "../../common/hljs";
import { DemoCode } from "../../common/code";
import { createSignal } from "solid-js";
import { propsColumns } from "../../common/columns";
import { anchorData, codes, itempropsData, propsData } from "./config";
import { CompAnchor } from "../../common/CompAnchor";
useDirective(hljs);

export default function StepsPage () {
    const [current, setCurrent] = createSignal(0);
    return <>
        <div class='sys-ctx-main-left' use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    Steps 步骤
                </Title>
                <Space id="steps_base" dir="v">
                    <Card bordered>
                        <Space dir="v">
                            <Steps current={current()}>
                                <Steps.Step title='First' description='This is a description.' />
                                <Steps.Step title='Second' description='This is a description.' />
                                <Steps.Step title='Third' description='This is a description.' />
                            </Steps>
                            <Space dir="h">
                                <Button type="primary" onClick={() => {
                                    setCurrent(current() - 1);
                                }}>Prev</Button>
                                <Button type="primary" onClick={() => {
                                    setCurrent(current() + 1);
                                }}>Next</Button>
                            </Space>
                        </Space>

                        <Divider align="left"><Text type="primary">基础用法</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            基础用法
                        </Paragraph>
                        <DemoCode data={codes['steps_base']}/>
                    </Card>
                </Space>

                <Space id="steps_mini" dir="v">
                    <Card bordered>
                        <Space dir="v">
                            <Steps current={current()} size="small">
                                <Steps.Step title='First' description='This is a description.' />
                                <Steps.Step title='Second' description='This is a description.' />
                                <Steps.Step title='Third' description='This is a description.' />
                            </Steps>
                        </Space>
                        <Divider align="left"><Text type="primary">迷你型</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            迷你型
                        </Paragraph>
                        <DemoCode data={codes['steps_mini']}/>
                    </Card>
                </Space>

                <Space id="steps_v" dir="v">
                    <Card bordered>
                        <Space dir="v">
                            <Steps current={current()} dir="v">
                                <Steps.Step title='First' description='This is a description.' />
                                <Steps.Step title='Second' description='This is a description.' />
                                <Steps.Step title='Third' description='This is a description.' />
                            </Steps>
                        </Space>
                        <Divider align="left"><Text type="primary">垂直步骤</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            dir='v' 垂直步骤
                        </Paragraph>
                        <DemoCode data={codes['steps_v']}/>
                    </Card>
                </Space>

                <Space id="steps_icon" dir="v">
                    <Card bordered>
                        <Space dir="v">
                            <Steps current={current()}>
                                <Steps.Step title='已完成'/>
                                <Steps.Step title='进行中' status='process' icon={<Icon name='cog' size={26}/>}/>
                                <Steps.Step title='错误' status="error"/>
                                <Steps.Step title='告警' status="warning"/>
                                <Steps.Step title='等待' status="wait" icon={<Icon name='lock' size={26}/>}/>
                            </Steps>
                        </Space>
                        <Divider align="left"><Text type="primary">状态和图标</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            status 支持 finished process error warning wait 其中finished状态、warning和error状态有默认图标
                        </Paragraph>
                        <DemoCode data={codes['steps_icon']}/>
                    </Card>
                </Space>

                <Space dir="v" size={24} id="comp_api">
                    <Title type="primary" heading={3}>API</Title>
                    <Space id='comp_props' dir="v">
                        <Title type="primary" heading={4}>Steps Props</Title>
                        <Table columns={propsColumns} data={propsData} border size='small' />
                    </Space>

                    <Space id='comp_itemprops' dir="v">
                        <Title type="primary" heading={4}>Step Props</Title>
                        <Table columns={propsColumns} data={itempropsData} border size='small' />
                    </Space>
                </Space>
            </Space>
        </div>

        <CompAnchor data={anchorData}/>
    </>
}