import { notice } from "@/components/Notice"
import { Button } from "@/components/Button"
import { Space } from "@/components/Layout"
import { Card } from "@/components/Card";
import { Title } from "@/components/Typography/Title";
import { Divider } from "@/components/Divider";
import { Paragraph } from "@/components/Typography/Paragraph";
import { Text } from "@/components/Typography/Text";
import { Table } from "@/components/Table";
import { anchorData, codes, eventsData, propsData } from "./config";
import { eventsColumns, propsColumns } from "../../common/columns";
import { CompAnchor } from "../../common/CompAnchor";
import { hljs, useDirective } from "../../common/hljs";
import { DemoCode } from "../../common/code";
useDirective(hljs);

export default function NoticePage () {
    return <>
        <div class="sys-ctx-main-left" use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    Notice 通知
                </Title>
                <Space id="notice_base" dir="v">
                    <Card bordered>
                        <Space dir="h">
                            <Button onClick={() => {
                                notice.info({
                                    title: '提示',
                                    content: '提示内容',
                                });
                            }}>消息</Button>
                        </Space>
                        <Divider align="left"><Text type="primary">基础用法</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            基础用法，notice 为全局对象
                        </Paragraph>
                        <DemoCode data={codes['notice_base']}/>
                    </Card>
                </Space>

                <Space id="notice_type" dir="v">
                    <Card bordered>
                        <Space dir="h">
                            <Button onClick={() => {
                                notice.info({
                                    title: '提示',
                                    duration: 0,
                                    content: '提示内容',
                                });
                            }}>消息</Button>
                            <Button type="success" onClick={() => {
                                notice.success({
                                    title: '提示',
                                    duration: 0,
                                    content: '成功信息',
                                });
                            }}>成功</Button>
                            <Button type="warning" onClick={() => {
                                notice.warning({
                                    title: '告警',
                                    duration: 0,
                                    content: '告警事件2023年3月24日11:40:29',
                                });
                            }}>告警</Button>
                            <Button type="error" onClick={() => {
                                notice.error({
                                    title: '错误',
                                    duration: 0,
                                    content: '事件提交失败',
                                });
                            }}>错误</Button>
                            <Button type="default" onClick={() => {
                                notice.help({
                                    title: '帮助',
                                    duration: 0,
                                    content: 'ls 命令',
                                });
                            }}>帮助</Button>
                        </Space>
                        <Divider align="left"><Text type="primary">不同类型的通知</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            notice 不同的通知 可以使用不通的方法触发，包含 <Text code>info</Text>、<Text code>success</Text>
                            <Text code>warning</Text>、<Text code>error</Text>、<Text code>help</Text>
                        </Paragraph>
                        <DemoCode data={codes['notice_type']}/>
                    </Card>
                </Space>


                <Space id="notice_dock" dir="v">
                    <Card bordered>
                        <Space dir="h">
                            <Button onClick={() => {
                                notice.info({
                                    title: '提示',
                                    content: '提示内容',
                                    dock: 'bottomRight'
                                });
                            }}>右下角</Button>

                            <Button onClick={() => {
                                notice.info({
                                    title: '提示',
                                    content: '提示内容',
                                    dock: 'topLeft'
                                });
                            }}>左上角</Button>

                            <Button onClick={() => {
                                notice.info({
                                    title: '提示',
                                    content: '提示内容',
                                    dock: 'bottomLeft'
                                });
                            }}>左下角</Button>
                        </Space>
                        <Divider align="left"><Text type="primary">位置</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            dock 属性定义通知出现的位置， 支持 <Text code>topRight(默认)</Text> <Text code>bottomRight</Text>
                            <Text code>topLeft</Text> <Text code>bottomLeft</Text>
                        </Paragraph>
                        <DemoCode data={codes['notice_dock']}/>
                    </Card>
                </Space>

                <Space dir="v" size={24} id="comp_api">
                    <Title type="primary" heading={3}>API</Title>
                    <Space id="comp_props" dir="v">
                        <Title type="primary" heading={4}>Notice Props</Title>
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
