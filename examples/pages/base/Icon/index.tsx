import { Space, View } from "@/components/Layout";
import { Icon } from "@/components/Icon";
import { Row } from "@/components/Row";
import { Col } from "@/components/Col";
import { Input } from "@/components/FormElements/Input";
import { Text } from "@/components/Typography/Text";
import { CompAnchor } from "../../common/CompAnchor";
import { createEffect, createSignal } from "solid-js";
import './icon.less';
import data from "./icons.json";
import { Title } from "@/components/Typography/Title";
import { Card } from "@/components/Card";
import { Divider } from "@/components/Divider";
import { Paragraph } from "@/components/Typography/Paragraph";
import { Table } from "@/components/Table";
import { propsData, anchorData, codes } from "./config";
import { propsColumns } from "../../common/columns";
import { hljs, useDirective } from "../../common/hljs";
import { DemoCode } from "../../common/code";
useDirective(hljs);

export default function IconPage() {
    const [keyword, setKeyword] = createSignal('');
    const [showData, setShowData] = createSignal(data);
    createEffect(() => {
        const newData = data.filter((item: any) => {
            return (item.name.indexOf(keyword()) > -1)
        });
        setShowData(newData);
    });
    return <>
        <div class='sys-ctx-main-left' use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    Icon 图标
                </Title>
                <Space id="icon_size" dir="v">
                    <Card bordered>
                        <Space dir="h" align="center">
                            <Icon name='box1' />
                            <Icon name='loader' size={16}/>
                            <Icon name='thumbs-up' size={24}/>
                        </Space>
                        <Divider align="left"><Text type="primary">图标大小</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            通过设置 <Text code>size</Text> 可以设置图标大小,默认14px
                        </Paragraph>
                        <DemoCode data={codes['icon_size']}/>
                    </Card>
                </Space>
                <Space id="icon_color" dir="v">
                    <Card bordered>
                        <Space dir="h" align="center">
                            <Icon name='box1' color="#52c41a"/>
                            <Icon name='loader' color="#ff4d4f"/>
                            <Icon name='thumbs-up' color="#1890ff"/>
                        </Space>
                        <Divider align="left"><Text type="primary">图标颜色</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            通过设置 <Text code>color</Text> 可以设置图标颜色
                        </Paragraph>
                        <DemoCode data={codes['icon_color']}/>
                    </Card>
                </Space>
                <Space id="icon_spin" dir="v">
                    <Card bordered>
                        <Space dir="h">
                            <div>
                                <Icon name='cog' spin/>
                                <Icon name='loader' spin/>
                            </div>
                        </Space>
                        <Divider align="left"><Text type="primary">旋转图标</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            通过设置 <Text code>spin</Text> 可以将图标设置为旋转图标
                        </Paragraph>
                        <DemoCode data={codes['icon_spin']}/>
                    </Card>
                </Space>

                <Space dir="v" id="icon_search">
                    <Input value={[keyword, setKeyword]} trigger='input' placeholder='搜索Icon'/>
                    <Row gutter={20} class='cm-icons-row'>
                        {
                            showData().map((item: any) => {
                                return <Col grid={0.25}><Icon name={item.name}/><Text>{item.name}</Text></Col>
                            })
                        }
                    </Row>
                </Space>

                <Space dir="v" size={24} id="comp_api">
                    <Title type="primary" heading={3}>API</Title>
                    <Space id='comp_props' dir="v">
                        <Title type="primary" heading={4}>Icon Props</Title>
                        <Table columns={propsColumns} data={propsData} border size='small' />
                    </Space>
                </Space>
            </Space>
        </div>
        <CompAnchor data={anchorData}/>
    </>
}