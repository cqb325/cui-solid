import { Space } from "@/components/Layout";
import { Tag } from "@/components/Tag";
import { TagGroup } from "@/components/TagGroup";
import { Avatar } from "@/components/Avatar";
import { Button } from "@/components/Button";
import { createSignal } from "solid-js";
import { Title } from "@/components/Typography/Title";
import { Card } from "@/components/Card";
import { Divider } from "@/components/Divider";
import { Paragraph } from "@/components/Typography/Paragraph";
import { Text } from "@/components/Typography/Text";
import { Table } from "@/components/Table";
import { anchorData, codes, eventsData, propsData } from "./config";
import { CompAnchor } from "../../common/CompAnchor";
import { eventsColumns, propsColumns } from "../../common/columns";
import { hljs, useDirective } from "../../common/hljs";
import { DemoCode } from "../../common/code";
useDirective(hljs);

export default function TagPage () {
    const [visible, setVisible] = createSignal(true);

    return <>
        <div class="sys-ctx-main-left" use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    Tag 标签
                </Title>
                <Space id="tag_base" dir="v">
                    <Card bordered>
                        <Space dir="h">
                            <Tag>标签一</Tag>
                            <Tag border>标签二</Tag>
                            <Tag closable>标签三</Tag>
                        </Space>
                        <Divider align="left"><Text type="primary">基础用法</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            简单的展示，添加属性closable可以关闭标签。<br/>
                            点击关闭标签时，会触发 onClose 事件。<br/>
                            border 可以设置边框
                        </Paragraph>
                        <DemoCode data={codes['tag_base']}/>
                    </Card>
                </Space>

                <Space id="tag_type" dir="v">
                    <Card bordered>
                        <Space dir="h">
                            <Tag>标签一</Tag>
                            <Tag value={10}>Value</Tag>
                            <Tag theme="primary" circle>Circle</Tag>
                            <Tag theme="primary" border avatar={<Avatar>U</Avatar>}>Avatar</Tag>
                        </Space>
                        <Divider align="left"><Text type="primary">标签类型</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            value属性可以设置具备显示值的标签<br/>
                            设置circle可以生成圆角标签<br/>
                            设置avatar可以生成带头像的标签
                        </Paragraph>
                        <DemoCode data={codes['tag_type']}/>
                    </Card>
                </Space>


                <Space id="tag_theme" dir="v">
                    <Card bordered>
                        <Space dir="v">
                            <Space dir="h">
                                <Tag>default tag</Tag>
                                <Tag theme="primary">PRIMARY</Tag>
                                <Tag theme="danger">中文</Tag>
                                <Tag theme="warning">warning</Tag>
                                <Tag theme="success">success</Tag>
                                <Tag theme="info">Info</Tag>
                                <Tag theme="magenta">magenta</Tag>
                                <Tag theme="red">red</Tag>
                                <Tag theme="volcano">volcano</Tag>
                                <Tag theme="orange">orange</Tag>
                            </Space>
                            <Space>
                                <Tag theme="gold">gold</Tag>
                                <Tag theme="yellow">yellow</Tag>
                                <Tag theme="lime">lime</Tag>
                                <Tag theme="green">green</Tag>
                                <Tag theme="cyan">cyan</Tag>
                                <Tag theme="blue">blue</Tag>
                                <Tag theme="geekblue">geekblue</Tag>
                                <Tag theme="purple">purple</Tag>
                            </Space>
                        </Space>
                        <Divider align="left"><Text type="primary">内置样式</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            通过设置theme选取内置样式 <Text code>primary</Text> <Text code>danger</Text> <Text code>warning</Text>
                            <Text code>success</Text> <Text code>info</Text> <Text code>magenta</Text>
                            <Text code>red</Text> <Text code>volcano</Text> <Text code>orange</Text>
                            <Text code>gold</Text> <Text code>yellow</Text> <Text code>lime</Text>
                            <Text code>green</Text> <Text code>cyan</Text> <Text code>blue</Text>
                            <Text code>geekblue</Text> <Text code>purple</Text>
                        </Paragraph>
                        <DemoCode data={codes['tag_theme']}/>
                    </Card>
                </Space>

                <Space id="tag_closeable" dir="v">
                    <Card bordered>
                        <Space dir="h">
                            <Tag closable>标签一</Tag>
                            <Tag value={10} closable>Value</Tag>
                            <Tag theme="primary" circle closable>Circle</Tag>
                            <Tag theme="primary" closable avatar={<Avatar>U</Avatar>}>Avatar</Tag>
                        </Space>
                        <Divider align="left"><Text type="primary">可关闭</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            设置closable属性可以关闭标签
                        </Paragraph>
                        <DemoCode data={codes['tag_closeable']}/>
                    </Card>
                </Space>

                <Space id="tag_size" dir="v">
                    <Card bordered>
                        <Space dir="h">
                            <Tag size="large">标签一</Tag>
                            <Tag theme="primary">标签二</Tag>
                        </Space>
                        <Divider align="left"><Text type="primary">尺寸</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            size属性支持large
                        </Paragraph>
                        <DemoCode data={codes['tag_size']}/>
                    </Card>
                </Space>

                <Space id="tag_control" dir="v">
                    <Card bordered>
                        <Space dir="h">
                            <Tag theme="primary" closable visible={[visible, setVisible]}>标签一</Tag>
                            <Button size="small" onClick={() => {
                                setVisible(!visible());
                            }}>关闭/显示</Button>
                        </Space>
                        <Divider align="left"><Text type="primary">可控标签</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            closable为true的情况下，visible支持显示状态可控
                        </Paragraph>
                        <DemoCode data={codes['tag_control']}/>
                    </Card>
                </Space>


                <Space id="tag_group" dir="v">
                    <Card bordered>
                        <Space dir="h">
                            <Space dir="v">
                                <div style={{'background-color': 'var(--cui-color-fill-0)', padding: '5px'}}>
                                    <TagGroup data={[
                                        {id: '1', title: '标签一'},
                                        {id: '2', title: '标签二'},
                                    ]}/>
                                </div>
                                <div style={{'background-color': 'var(--cui-color-fill-0)', padding: '5px'}}>
                                    <TagGroup size="large" data={[
                                        {id: '1', title: '标签一'},
                                        {id: '2', title: '标签二'},
                                    ]}/>
                                </div>
                                <div style={{'background-color': 'var(--cui-color-fill-0)', padding: '5px'}}>
                                    <TagGroup data={[
                                        {id: '1', title: '标签一'},
                                        {id: '2', title: '标签二'},
                                        {id: '3', title: '标签三'},
                                        {id: '4', title: '标签四'},
                                    ]} closable max={2}/>
                                </div>
                            </Space>
                        </Space>
                        <Divider align="left"><Text type="primary">标签组</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        标签组
                        </Paragraph>
                        <DemoCode data={codes['tag_group']}/>
                    </Card>
                </Space>

                <Space dir="v" size={24} id="comp_api">
                    <Title type="primary" heading={3}>API</Title>
                    <Space id="comp_props" dir="v">
                        <Title type="primary" heading={4}>Tag Props</Title>
                        <Table columns={propsColumns} data={propsData} border size="small" />
                    </Space>

                    <Space id="comp_events" dir="v">
                        <Title type="primary" heading={4}>Tag Events</Title>
                        <Table columns={eventsColumns} data={eventsData} border size="small" />
                    </Space>
                </Space>
            </Space>
        </div>

        <CompAnchor data={anchorData}/>
    </>
}
