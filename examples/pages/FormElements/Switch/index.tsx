import { Card } from "@/components/Card";
import { Divider } from "@/components/Divider";
import { Input } from "@/components/FormElements/Input";
import { Switch } from "@/components/FormElements/Switch";
import { Space } from "@/components/Layout";
import { message } from "@/components/Message";
import { modal } from "@/components/Modal";
import { Table } from "@/components/Table";
import { Paragraph } from "@/components/Typography/Paragraph";
import { Text } from "@/components/Typography/Text";
import { Title } from "@/components/Typography/Title";
import { CompAnchor } from "../../common/CompAnchor";
import { eventsColumns, propsColumns } from "../../common/columns";
import { anchorData, codes, eventsData, propsData } from "./config";
import { hljs, useDirective } from "../../common/hljs";
import { DemoCode } from "../../common/code";
import { FeatherArrowLeft, FeatherArrowRight, FeatherSettings } from "cui-solid-icons/feather";
useDirective(hljs);

export default function SwitchPage () {
    return <>
        <div class="sys-ctx-main-left" use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    Switch 开关
                </Title>
                <Space id="switch_base" dir="v">
                    <Card bordered>
                        <Switch onChange={(v: boolean) => {
                            message.info({
                                content: '状态改变:' + v,
                                duration: 1
                            });
                        }}/>
                        <Switch round={false}/>
                        <Switch icon={<FeatherSettings color="var(--cui-primary-color)"/>}/>
                        <Switch size="large" icon={[<FeatherArrowLeft size={20} color="var(--cui-color-text-2)"/>, <FeatherArrowRight size={20} color="var(--cui-color-text-2)"/>]}/>
                        <Divider align="left"><Text type="primary">基础用法</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            基础用法
                        </Paragraph>
                        <DemoCode data={codes['switch_base']}/>
                    </Card>
                </Space>


                <Space id="switch_disabled" dir="v">
                    <Card bordered>
                        <Switch disabled/>
                        <Switch disabled size="small"/>
                        <Switch disabled size="large"/>
                        <Divider align="left"><Text type="primary">禁用</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        disabled 进行禁用
                        </Paragraph>
                        <DemoCode data={codes['switch_disabled']}/>
                    </Card>
                </Space>


                <Space id="switch_size" dir="v">
                    <Card bordered>
                        <Space dir="h">
                            <Switch size="large"/>
                            <Switch />
                            <Switch size="small"/>
                        </Space>
                        <Divider align="left"><Text type="primary">尺寸</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        size 支持 large 和 small
                        </Paragraph>
                        <DemoCode data={codes['switch_size']}/>
                    </Card>
                </Space>


                <Space id="switch_loading" dir="v">
                    <Card bordered>
                        <Space dir="h">
                            <Switch size="large" loading/>
                            <Switch loading checked/>
                            <Switch size="small" loading/>
                        </Space>
                        <Divider align="left"><Text type="primary">加载中</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        loading 为加载中状态，不可切换
                        </Paragraph>
                        <DemoCode data={codes['switch_loading']}/>
                    </Card>
                </Space>


                <Space id="switch_label" dir="v">
                    <Card bordered>
                        <Space dir="h">
                            <Switch labels={['开', '关']}/>
                            <Switch labels={['去球场打球', '在家中休息']}/>
                            <Switch labels={['ON', 'OFF']} values={[1, 0]} onChange={(v: number) => {
                                message.info({
                                    content: '值:' + v,
                                    duration: 1
                                });
                            }}/>
                            <Switch labels={['去球场打球', '在家中休息']} colors={['red', 'green']}/>
                        </Space>
                        <Divider align="left"><Text type="primary">文字和值</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        labels 传入数组 修改文案， values 数组修改值
                        </Paragraph>
                        <DemoCode data={codes['switch_label']}/>
                    </Card>
                </Space>


                <Space id="switch_before" dir="v">
                    <Card bordered>
                        <Space dir="h">
                            <Switch onBeforeChange={(checked: boolean) => {
                                return new Promise((resolve) => {
                                    modal.info({
                                        title: '提示',
                                        content: '确认进行切换？',
                                        onOk: () => {
                                            resolve(true);
                                        }
                                    })
                                })
                            }}/>
                        </Space>
                        <Divider align="left"><Text type="primary">阻止切换</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        onBeforeChange 可以在切换之前判断是否需要切换， 返回 false 阻止切换
                        </Paragraph>
                        <DemoCode data={codes['switch_before']}/>
                    </Card>
                </Space>


                <Space dir="v" size={24} id="comp_api">
                    <Title type="primary" heading={3}>API</Title>
                    <Space id="comp_props" dir="v">
                        <Title type="primary" heading={4}>Rate Props</Title>
                        <Table columns={propsColumns} data={propsData} border size="small" />
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
