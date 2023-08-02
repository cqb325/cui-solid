import { View, VView, HView, Space } from "@/components/Layout"
import { Accordion } from "@/components/Accordion";
import { Icon } from "@/components/Icon";
import { Button } from "@/components/Button";
import { createSignal } from "solid-js";
import { BothSide } from "@/components/Layout";
import { Tag } from "@/components/Tag";
// import FlexAccordion from "../../components/FlexAccordion";
import '../../layout/demo.less';
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

const centerStyle = {
    'justify-content': 'center'
}

function AccordionDemo () {
    const [activeKey, setActiveKey] = createSignal(['a2']);
    // const foreceUpdate = useForceUpdate();

    return <>
        <div class='sys-ctx-main-left' use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    Accordion 手风琴面板
                </Title>
                <Space id="accordion_base" dir="v">
                    <Card bordered>
                        <HView class="components-layout-demo" size="450px">
                            <View size="250px" style={{'text-align': 'initial', 'box-shadow': '2px 0 8px 0 rgba(29, 35, 41, 0.05)'}} class="layout-demo-sider">
                                <Accordion onSelect={(name: string, open: boolean, v: any) => {
                                    console.log(name, open, v);
                                }}>
                                    <Accordion.Item name="a1" title="Title1" icon={<Icon name='dashboard'/>}>content1</Accordion.Item>
                                    <Accordion.Item name="a2" title={<BothSide>
                                        <span>Title2</span>
                                        <Tag size='small' theme='success'>1234</Tag>
                                    </BothSide>} icon={<Icon name='cog'/>}>
                                        <p>content2</p>
                                        <p>content2</p>
                                        <p>content2</p>
                                        <p>content2</p>
                                    </Accordion.Item>
                                </Accordion>
                            </View>
                            <VView style={centerStyle}>
                                <View class='layout-demo-header' size="64px" style={centerStyle}></View>
                                <View style={centerStyle}></View>
                                <View class='layout-demo-header' size="64px" style={centerStyle}></View>
                            </VView>
                        </HView>
                        <Divider align="left"><Text type="primary">基础用法</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            基础用法
                        </Paragraph>
                        <DemoCode data={codes['accordion_base']}/>
                    </Card>
                </Space>


                <Space id="accordion_multi" dir="v">
                    <Card bordered>
                        <VView size="300px">
                            <HView class="components-layout-demo" size="450px">
                                <View size="250px" style={{'text-align': 'initial', overflow: 'auto'}} class="layout-demo-sider">
                                    <Accordion activeKey={[activeKey, setActiveKey]} multi onSelect={(name: string, open: boolean, v: any) => {
                                        console.log(name, open, v);
                                    }}>
                                        <Accordion.Item name="a1" title="Title1" icon={<Icon name='dashboard'/>}>content1</Accordion.Item>
                                        <Accordion.Item name="a2" title="Title2" icon={<Icon name='cog'/>}>
                                            <p>content2</p>
                                            <p>content2</p>
                                            <p>content2</p>
                                            <p>content2</p>
                                        </Accordion.Item>
                                        <Accordion.Item name="a3" title="Title3" icon={<Icon name='flag'/>}>
                                            <p>content3</p>
                                            <p>content3</p>
                                            <p>content3</p>
                                            <p>content3</p>
                                        </Accordion.Item>
                                    </Accordion>
                                </View>
                                <VView style={centerStyle}>
                                    <View class='layout-demo-header' size="64px" style={centerStyle}></View>
                                    <View style={centerStyle}>
                                        <Button onClick={() => {
                                            setActiveKey(['a1']);
                                        }}>更新</Button>
                                    </View>
                                    <View class='layout-demo-header' size="64px" style={centerStyle}></View>
                                </VView>
                            </HView>
                        </VView>
                        <Divider align="left"><Text type="primary">多选</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            设置 <Text code>multi</Text> 属性可以展开多个面板<br/>
                            <Text code>activeKey</Text> 属性为可控展开面板属性
                        </Paragraph>
                        <DemoCode data={codes['accordion_multi']}/>
                    </Card>
                </Space>


                <Space id="accordion_flex" dir="v">
                    <Card bordered>
                        <VView size="300px">
                            <HView class="components-layout-demo" size="450px">
                                <View size="250px" style={{'text-align': 'initial'}} class="layout-demo-sider">
                                    <Accordion activeKey='a1' flex onSelect={(name: string, open: boolean, v: any) => {
                                        console.log(name, open, v);
                                    }}>
                                        <Accordion.Item name="a1" title="Title1" icon={<Icon name='dashboard'/>}>content1</Accordion.Item>
                                        <Accordion.Item name="a2" title="Title2" icon={<Icon name='cog'/>}>
                                            <p>content2</p>
                                            <p>content2</p>
                                            <p>content2</p>
                                            <p>content2</p>
                                        </Accordion.Item>
                                        <Accordion.Item name="a3" title="Title3" icon={<Icon name='flag'/>}>
                                            <p>content3</p>
                                            <p>content3</p>
                                            <p>content3</p>
                                            <p>content3</p>
                                        </Accordion.Item>
                                    </Accordion>
                                </View>
                                <VView style={centerStyle}>
                                    <View class='layout-demo-header' size="64px" style={centerStyle}></View>
                                    <View style={centerStyle}></View>
                                    <View class='layout-demo-header' size="64px" style={centerStyle}></View>
                                </VView>
                            </HView>
                        </VView>
                        <Divider align="left"><Text type="primary">占满容器</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            设置 <Text code>flex</Text> 属性可以将手风琴占满容器
                        </Paragraph>
                        <DemoCode data={codes['accordion_flex']}/>
                    </Card>
                </Space>


                <Space dir="v" size={24} id="comp_api">
                    <Title type="primary" heading={3}>API</Title>
                    <Space id='comp_props' dir="v">
                        <Title type="primary" heading={4}>Accordion Props</Title>
                        <Table columns={propsColumns} data={propsData} border size='small' />
                    </Space>

                    <Space id='comp_item_props' dir="v">
                        <Title type="primary" heading={4}>Accordion.Item Props</Title>
                        <Table columns={propsColumns} data={itemPropsData} border size='small' />
                    </Space>
                </Space>
            </Space>
        </div>
        
        <CompAnchor data={anchorData}/>
    </>
}

export default AccordionDemo;
