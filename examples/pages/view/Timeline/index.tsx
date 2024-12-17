import { Card } from "@/components/Card";
import { Divider } from "@/components/Divider";
import { Space } from "@/components/Layout";
import { Table } from "@/components/Table";
import { Timeline } from "@/components/Timeline";
import { Paragraph } from "@/components/Typography/Paragraph";
import { Text } from "@/components/Typography/Text";
import { Title } from "@/components/Typography/Title";
import { CompAnchor } from "../../common/CompAnchor";
import { propsColumns } from "../../common/columns";
import { anchorData, codes, itemPropsData, propsData } from "./config";
import './style.less'
import { hljs, useDirective } from "../../common/hljs";
import { DemoCode } from "../../common/code";
import { F7Tree } from "cui-solid-icons/f7";
useDirective(hljs);

export default function TimelinePage () {
    return <>
        <div class="sys-ctx-main-left" use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    Timeline 时间轴
                </Title>
                <Space id="timeline_base" dir="v">
                    <Card bordered>
                        <Timeline>
                            <Timeline.Item>
                                <label class="time">1976年</label>
                                <span class="content">Apple I 问世</span>
                            </Timeline.Item>
                            <Timeline.Item>
                                <label class="time">1984年</label>
                                <span class="content">发布 Macintosh</span>
                            </Timeline.Item>
                            <Timeline.Item>
                                <label class="time">2007年</label>
                                <span class="content">发布 iPhone</span>
                            </Timeline.Item>
                            <Timeline.Item>
                                <label class="time">2010年</label>
                                <span class="content">发布 iPad</span>
                            </Timeline.Item>
                        </Timeline>
                        <Divider align="left"><Text type="primary">基础用法</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        基础用法
                        </Paragraph>
                        <DemoCode data={codes['timeline_base']}/>
                    </Card>
                </Space>
                <Space id="timeline_color" dir="v">
                    <Card bordered>
                        <Timeline>
                            <Timeline.Item color="green">发布1.0版本</Timeline.Item>
                            <Timeline.Item color="green">发布2.0版本</Timeline.Item>
                            <Timeline.Item color="red">严重故障</Timeline.Item>
                            <Timeline.Item color="blue">发布3.0版本</Timeline.Item>
                        </Timeline>
                        <Divider align="left"><Text type="primary">颜色</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            用各种颜色来标识不同状态，可以使用green、red、blue、yellow或自定义的颜色，默认是 blue 。
                        </Paragraph>
                        <DemoCode data={codes['timeline_color']}/>
                    </Card>
                </Space>

                <Space id="timeline_fill" dir="v">
                    <Card bordered>
                        <Timeline>
                            <Timeline.Item color="green" fill>发布1.0版本</Timeline.Item>
                            <Timeline.Item color="green" fill>发布2.0版本</Timeline.Item>
                            <Timeline.Item color="red" fill>严重故障</Timeline.Item>
                            <Timeline.Item color="blue" fill>发布3.0版本</Timeline.Item>
                        </Timeline>
                        <Divider align="left"><Text type="primary">填充</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            设置fill可以将color填充节点
                        </Paragraph>
                        <DemoCode data={codes['timeline_fill']}/>
                    </Card>
                </Space>

                <Space id="timeline_alternate" dir="v">
                    <Card bordered>
                        <Timeline mode="alternate">
                            <Timeline.Item time="2023-01-01 12:00:00">
                                <label class="time">第一个节点内容</label>
                                <span class="content">描述信息</span>
                            </Timeline.Item>
                            <Timeline.Item time="2023-01-02 12:00:00">
                                <label class="time">第二个节点内容</label>
                                <span class="content">描述信息</span>
                            </Timeline.Item>
                            <Timeline.Item time="2023-01-03 12:00:00">
                                <label class="time">第三个节点内容</label>
                                <span class="content">描述信息</span>
                            </Timeline.Item>
                            <Timeline.Item time="2023-01-04 12:00:00">
                                <label class="time">第四个节点内容</label>
                                <span class="content">描述信息</span>
                            </Timeline.Item>
                            <Timeline.Item time="2023-01-05 12:00:00">
                                <label class="time">第五个节点内容</label>
                                <span class="content">描述信息</span>
                            </Timeline.Item>
                        </Timeline>
                        <Divider align="left"><Text type="primary">交替</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            设置 <Text code>mode='alternate'</Text> 可以交替显示时间轴内容
                        </Paragraph>
                        <DemoCode data={codes['timeline_alternate']}/>
                    </Card>
                </Space>

                <Space id="timeline_right" dir="v">
                    <Card bordered>
                        <Timeline mode="right">
                            <Timeline.Item time="2023-01-01 12:00:00">
                                <label class="time">第一个节点内容</label>
                                <span class="content">描述信息</span>
                            </Timeline.Item>
                            <Timeline.Item time="2023-01-02 12:00:00">
                                <label class="time">第二个节点内容</label>
                                <span class="content">描述信息</span>
                            </Timeline.Item>
                            <Timeline.Item time="2023-01-03 12:00:00">
                                <label class="time">第三个节点内容</label>
                                <span class="content">描述信息</span>
                            </Timeline.Item>
                        </Timeline>
                        <Divider align="left"><Text type="primary">靠右</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            设置 <Text code>mode='right'</Text> 可以渲染靠右的时间轴
                        </Paragraph>
                        <DemoCode data={codes['timeline_right']}/>
                    </Card>
                </Space>

                <Space id="timeline_center" dir="v">
                    <Card bordered>
                        <Timeline mode="center">
                            <Timeline.Item time="2023-01-01 12:00:00">
                                <label class="time">第一个节点内容</label>
                                <span class="content">描述信息</span>
                            </Timeline.Item>
                            <Timeline.Item time="2023-01-02 12:00:00">
                                <label class="time">第二个节点内容</label>
                                <span class="content">描述信息</span>
                            </Timeline.Item>
                            <Timeline.Item time="2023-01-03 12:00:00">
                                <label class="time">第三个节点内容</label>
                                <span class="content">描述信息</span>
                            </Timeline.Item>
                        </Timeline>
                        <Divider align="left"><Text type="primary">时间节点靠左</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            设置 <Text code>mode='center'</Text> 可以将时间靠左显示
                        </Paragraph>
                        <DemoCode data={codes['timeline_center']}/>
                    </Card>
                </Space>


                <Space id="timeline_icon" dir="v">
                    <Card bordered>
                        <Timeline>
                            <Timeline.Item color="green" icon={<F7Tree size={13}/>}>发布1.0版本</Timeline.Item>
                            <Timeline.Item color="green">发布2.0版本</Timeline.Item>
                            <Timeline.Item color="red">严重故障</Timeline.Item>
                            <Timeline.Item color="blue">发布3.0版本</Timeline.Item>
                        </Timeline>
                        <Divider align="left"><Text type="primary">自定义轴点</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            自定义轴点的内容，一个图标。
                        </Paragraph>
                        <DemoCode data={codes['timeline_icon']}/>
                    </Card>
                </Space>


                <Space dir="v" size={24} id="comp_api">
                    <Title type="primary" heading={3}>API</Title>
                    <Space id="comp_props" dir="v">
                        <Title type="primary" heading={4}>Timeline Props</Title>
                        <Table columns={propsColumns} data={propsData} border size="small" />
                    </Space>
                    <Space id="comp_itemprops" dir="v">
                        <Title type="primary" heading={4}>Timeline.Item Props</Title>
                        <Table columns={propsColumns} data={itemPropsData} border size="small" />
                    </Space>
                </Space>
            </Space>
        </div>

        <CompAnchor data={anchorData}/>
    </>
}
