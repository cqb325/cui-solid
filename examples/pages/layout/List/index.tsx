import { List } from "@/components/List";
import { For } from "solid-js";
import { Avatar } from "@/components/Avatar";
import { Space } from "@/components/Layout";
import { Button } from "@/components/Button";

import img from '../../../assets/images/avatar.png';
import { Title } from "@/components/Typography/Title";
import { Card } from "@/components/Card";
import { Divider } from "@/components/Divider";
import { Paragraph } from "@/components/Typography/Paragraph";
import { Text } from "@/components/Typography/Text";
import { Table } from "@/components/Table";
import { anchorData, codes, itemPropsData, propsData } from "./config";
import { CompAnchor } from "../../common/CompAnchor";
import { propsColumns } from "../../common/columns";
import { hljs, useDirective } from "../../common/hljs";
import { DemoCode } from "../../common/code";
useDirective(hljs);

function ListDemo () {
    const data = [
        {id: '1', desc: '这是一段文本。', content: ''},
        {id: '2', desc: '这是一段文本。', content: ''},
        {id: '3', desc: '这是一段文本。', content: ''}
    ];
    return <>
        <div class="sys-ctx-main-left" use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    List 列表
                </Title>
                <Space id="list_base" dir="v">
                    <Card bordered>
                        <List border onSelect={(item: any) => {
                            console.log(item);
                        }} head="Header" foot="Footer">
                            <For each={data}>
                                {(item) => {
                                    return <List.Item id={item.id} desc={item.desc} content={item.content} data={item} />
                                }}
                            </For>
                        </List>

                        <Divider align="left"><Text type="primary">基础用法</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            默认列表, <Text code>head</Text> <Text code>foot</Text> 使用 <Text code>Slot</Text> 名称为 <Text code>head</Text>、<Text code>foot</Text>
                        </Paragraph>
                        <DemoCode data={codes['list_base']}/>
                    </Card>
                </Space>


                <Space id="list_size" dir="v">
                    <Card bordered>
                        <List border size="small" onSelect={(item: any) => {
                            console.log(item);
                        }} head="Header" foot="Footer">
                            <For each={data}>
                                {(item) => {
                                    return <List.Item id={item.id} desc={item.desc} data={item} />
                                }}
                            </For>
                        </List>

                        <Divider align="left"><Text type="primary">列表尺寸</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            size可设置为small
                        </Paragraph>
                        <DemoCode data={codes['list_size']}/>
                    </Card>
                </Space>


                <Space id="list_complex" dir="v">
                    <Card bordered>
                        <List border head="Header" foot="Footer">
                            <For each={data}>
                                {(item) => {
                                    return <List.Item avatar={<Avatar src={img}/>}
                                        id={item.id} title="Title" desc={item.desc} data={item} actions={<Space>
                                            <Button type="text" size="small" onClick={() => {console.log(item);
                                            }}>Edit</Button>
                                            <Button type="text" size="small">More</Button>
                                        </Space>}>
                                            具体内容具体内容具体内容具体内容具体内容具体内容具体内容具体内容具体内容具体内容具体内容
                                            具体内容具体内容具体内容具体内容具体内容具体内容
                                            具体内容具体内容具体内容具体内容
                                        </List.Item>
                                }}
                            </For>
                        </List>

                        <Divider align="left"><Text type="primary">基础列表</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            带有图标、标题、描述的基础列表。也可以带有列表操作组。
                        </Paragraph>
                        <DemoCode data={codes['list_complex']}/>
                    </Card>
                </Space>


                <Space dir="v" size={24} id="comp_api">
                    <Title type="primary" heading={3}>API</Title>
                    <Space id="comp_props" dir="v">
                        <Title type="primary" heading={4}>List Props</Title>
                        <Table columns={propsColumns} data={propsData} border size="small" />
                    </Space>

                    <Space id="comp_item_props" dir="v">
                        <Title type="primary" heading={4}>List.Item Props</Title>
                        <Table columns={propsColumns} data={itemPropsData} border size="small" />
                    </Space>
                </Space>

            </Space>
        </div>

        <CompAnchor data={anchorData}/>
    </>
}

export default ListDemo;
