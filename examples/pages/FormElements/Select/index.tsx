import { BothSide, Space } from "@/components/Layout";
import { Input } from "@/components/FormElements/Input";
import { Icon } from "@/components/Icon";
import { Button } from "@/components/Button";
import { For, createSignal } from "solid-js";
import { Title } from "@/components/Typography/Title";
import { Card } from "@/components/Card";
import { Divider } from "@/components/Divider";
import { Paragraph } from "@/components/Typography/Paragraph";
import { Text } from "@/components/Typography/Text";
import { Row } from "@/components/Row";
import { Col } from "@/components/Col";
import { Table } from "@/components/Table";
import { eventsColumns, propsColumns } from "../../common/columns";
import { anchorData, codes, eventsData, optionPropsData, propsData } from "./config";
import { Option, OptionGroup } from "@/components/FormElements/Select";
import { CompAnchor } from "../../common/CompAnchor";
import { hljs, useDirective } from "../../common/hljs";
import { DemoCode } from "../../common/code";
useDirective(hljs);

export default function SelectPage () {
    const [city, setCity] = createSignal<number>();

    let select;
    const largeArray = new Array(1000).fill(0).map((_, index) => ({value: index, num: 1 + Math.round(Math.random() * 20) }))
    return <>
        <div class='sys-ctx-main-left' use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    Select 选择框
                </Title>
                <Space id="select_base" dir="v">
                    <Card bordered>
                        <Input type='select'>
                            <Option value={1} label="北京"></Option>
                            <Option value={2} label="上海"></Option>
                            <Option value={3} label="杭州"></Option>
                            <Option value={4} label="武汉"></Option>
                            <Option value={5} label="天津"></Option>
                        </Input>
                        <Divider align="left"><Text type="primary">基础用法</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            基础用法
                        </Paragraph>
                        <DemoCode data={codes['select_base']}/>
                    </Card>
                </Space>

                <Space id="select_disabled" dir="v">
                    <Card bordered>
                        <Input type='select' disabled/>
                        <Input type='select'>
                            <Option value={1} label="北京"></Option>
                            <Option value={2} disabled label="上海"></Option>
                            <Option value={3} label="杭州"></Option>
                            <Option value={4} label="武汉"></Option>
                            <Option value={5} label="天津"></Option>
                        </Input>
                        <Divider align="left"><Text type="primary">禁用</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            使用disabled禁用选择框
                        </Paragraph>
                        <DemoCode data={codes['select_disabled']}/>
                    </Card>
                </Space>

                <Space id="select_size" dir="v">
                    <Card bordered>
                        <Row>
                            <Col grid={0.33}>
                                <Input type='select' size='large'>
                                    <Option value={1} label="北京"></Option>
                                    <Option value={2} label="上海"></Option>
                                    <Option value={3} label="杭州"></Option>
                                    <Option value={4} label="武汉"></Option>
                                    <Option value={5} label="天津"></Option>
                                </Input>
                            </Col>
                            <Col grid={0.33}>
                                <Input type='select'>
                                    <Option value={1} label="北京"></Option>
                                    <Option value={2} label="上海"></Option>
                                    <Option value={3} label="杭州"></Option>
                                    <Option value={4} label="武汉"></Option>
                                    <Option value={5} label="天津"></Option>
                                </Input>
                            </Col>
                            <Col grid={0.33}>
                                <Input type='select' size='small'>
                                    <Option value={1} label="北京"></Option>
                                    <Option value={2} label="上海"></Option>
                                    <Option value={3} label="杭州"></Option>
                                    <Option value={4} label="武汉"></Option>
                                    <Option value={5} label="天津"></Option>
                                </Input>
                            </Col>
                        </Row>
                        <Divider align="left"><Text type="primary">尺寸</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            size 支持small和large
                        </Paragraph>
                        <DemoCode data={codes['select_size']}/>
                    </Card>
                </Space>

                <Space id="select_clearable" dir="v">
                    <Card bordered>
                        <Input type='select' clearable>
                            <Option value={1} label="北京"></Option>
                            <Option value={2} label="上海"></Option>
                            <Option value={3} label="杭州"></Option>
                            <Option value={4} label="武汉"></Option>
                            <Option value={5} label="天津"></Option>
                        </Input>
                        <Divider align="left"><Text type="primary">可清空</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            设置 clearable 后选择框选择后可清空
                        </Paragraph>
                        <DemoCode data={codes['select_clearable']}/>
                    </Card>
                </Space>


                <Space id="select_multi" dir="v">
                    <Card bordered>
                        <Input type='select' multi style={{'width': '200px'}}>
                            <Option value={1} label="北京"></Option>
                            <Option value={2} label="上海"></Option>
                            <Option value={3} label="杭州"></Option>
                            <Option value={4} label="武汉"></Option>
                            <Option value={5} label="天津"></Option>
                        </Input>
                        <Divider align="left"><Text type="primary">多选</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            设置 multi 选择框可进行多选
                        </Paragraph>
                        <DemoCode data={codes['select_multi']}/>
                    </Card>
                </Space>


                <Space id="select_showmax" dir="v">
                    <Card bordered>
                        <Input type='select' multi showMax={2}>
                            <Option value={1} label="北京"></Option>
                            <Option value={2} label="上海"></Option>
                            <Option value={3} label="杭州"></Option>
                            <Option value={4} label="武汉"></Option>
                            <Option value={5} label="天津"></Option>
                        </Input>
                        <Divider align="left"><Text type="primary">显示个数</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            多选场景下可限制最多显示个数， 超出的显示n+
                        </Paragraph>
                        <DemoCode data={codes['select_showmax']}/>
                    </Card>
                </Space>


                <Space id="select_valueClosable" dir="v">
                    <Card bordered>
                        <Input type='select' multi showMax={2} valueClosable>
                            <Option value={1} label="北京"></Option>
                            <Option value={2} label="上海"></Option>
                            <Option value={3} label="杭州"></Option>
                            <Option value={4} label="武汉"></Option>
                            <Option value={5} label="天津"></Option>
                        </Input>
                        <Divider align="left"><Text type="primary">值可关闭</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            设置 valueClosable 选中的值可消除
                        </Paragraph>
                        <DemoCode data={codes['select_valueClosable']}/>
                    </Card>
                </Space>


                <Space id="select_group" dir="v">
                    <Card bordered>
                        <Input type='select' clearable >
                            <OptionGroup label='直辖市' value={1}>
                                <Option value={11} label='北京'/>
                                <Option value={5} label='天津'/>
                                <Option value={2} label='上海'/>
                            </OptionGroup>
                            <OptionGroup label='浙江' value={3}>
                                <Option value={31} label='杭州'/>
                            </OptionGroup>
                            <Option value={4} label='武汉'/>
                        </Input>
                        <Divider align="left"><Text type="primary">分组显示</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            设置 data 中使用children进行分组
                        </Paragraph>
                        <DemoCode data={codes['select_group']}/>
                    </Card>
                </Space>


                <Space id="select_filter" dir="v">
                    <Card bordered>
                        <Input type='select' clearable filter>
                            <Option value={1} label="北京"></Option>
                            <Option value={2} label="上海"></Option>
                            <Option value={3} label="杭州"></Option>
                            <Option value={4} label="武汉"></Option>
                            <Option value={5} label="天津"></Option>
                        </Input>
                        <Divider align="left"><Text type="primary">过滤</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            设置 filter 支持过滤选择
                        </Paragraph>
                        <DemoCode data={codes['select_filter']}/>
                    </Card>
                </Space>


                <Space id="select_renderOption" dir="v">
                    <Card bordered>
                        <Input type='select' clearable renderOption={(item: any) => {
                            return <BothSide>
                                <div>{item.label}</div>
                                <div>{item.value}</div>
                            </BothSide>
                        }}>
                            <Option value={1} label="北京"></Option>
                            <Option value={2} label="上海"></Option>
                            <Option value={3} label="杭州"></Option>
                            <Option value={4} label="武汉"></Option>
                            <Option value={5} label="天津"></Option>
                        </Input>
                        <Divider align="left"><Text type="primary">自定义渲染</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                        renderOption 属性可以自定义选项的渲染方式
                        </Paragraph>
                        <DemoCode data={codes['select_renderOption']}/>
                    </Card>
                </Space>


                <Space id="select_prefix" dir="v">
                    <Card bordered>
                        <Input type='select' clearable prefix={<Icon name='tag'/>}>
                            <Option value={1} label="北京"></Option>
                            <Option value={2} label="上海"></Option>
                            <Option value={3} label="杭州"></Option>
                            <Option value={4} label="武汉"></Option>
                            <Option value={5} label="天津"></Option>
                        </Input>
                        <Divider align="left"><Text type="primary">前缀</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                        prefix 属性可以添加前缀
                        </Paragraph>
                        <DemoCode data={codes['select_prefix']}/>
                    </Card>
                </Space>

                <Space id="select_emptyOption" dir="v">
                    <Card bordered>
                        <Input type='select' clearable prefix={<Icon name='tag'/>} emptyOption='全部'>
                            <Option value={1} label="北京"></Option>
                            <Option value={2} label="上海"></Option>
                            <Option value={3} label="杭州"></Option>
                            <Option value={4} label="武汉"></Option>
                            <Option value={5} label="天津"></Option>
                        </Input>
                        <Divider align="left"><Text type="primary">空选项</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                        emptyOption 支持空选项,并指定文案
                        </Paragraph>
                        <DemoCode data={codes['select_emptyOption']}/>
                    </Card>
                </Space>


                <Space id="select_control" dir="v">
                    <Card bordered>
                        <Space>
                            <Input type='select' value={[city, setCity]} clearable emptyOption='全部' onChange={(v: any) => {
                                console.log(v);
                            }}>
                                <Option value={1} label="北京"></Option>
                                <Option value={2} label="上海"></Option>
                                <Option value={3} label="杭州"></Option>
                                <Option value={4} label="武汉"></Option>
                                <Option value={5} label="天津"></Option>
                            </Input>
                            <Button type='primary' onClick={() => {
                                setCity(2);
                            }}>改变值</Button>
                        </Space>
                        <Divider align="left"><Text type="primary">可控</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                        value 为可控属性
                        </Paragraph>
                        <DemoCode data={codes['select_control']}/>
                    </Card>
                </Space>

                <Space id="select_largelist" dir="v">
                    <Card bordered>
                        <Input type='select' filter>
                            <For each={largeArray}>
                                {(item, index) => {
                                    return <Option value={item.value} label={`${new Array(item.num).fill(true).map(() => 'Row').join(" ")} Row ` + index()}></Option>
                                }}
                            </For>
                        </Input>
                        <Divider align="left"><Text type="primary">超大列表</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            支持超大列表
                        </Paragraph>
                        <DemoCode data={codes['select_largelist']}/>
                    </Card>
                </Space>

                <Space dir="v" size={24} id="comp_api">
                    <Title type="primary" heading={3}>API</Title>
                    <Space id='comp_props' dir="v">
                        <Title type="primary" heading={4}>Select Props</Title>
                        <Table columns={propsColumns} data={propsData} border size='small' />
                    </Space>
                    <Space id='comp_props' dir="v">
                        <Title type="primary" heading={4}>Option Props</Title>
                        <Table columns={propsColumns} data={optionPropsData} border size='small' />
                    </Space>
                    <Space id='comp_events' dir="v">
                        <Title type="primary" heading={4}>Events</Title>
                        <Table columns={eventsColumns} data={eventsData} border size="small" />
                    </Space>
                </Space>
            </Space>
        </div>

        <CompAnchor data={anchorData}/>
    </>
}