import { createSignal } from "solid-js";
import { Button } from "@/components/Button";
import { Text } from "@/components/Typography/Text";
import { Space } from "@/components/Layout";
import dayjs from "dayjs";
import { Title } from "@/components/Typography/Title";
import { Card } from "@/components/Card";
import { Divider } from "@/components/Divider";
import { Paragraph } from "@/components/Typography/Paragraph";
import { Input } from "@/components/FormElements/Input";
import { Row } from "@/components/Row";
import { Col } from "@/components/Col";
import { Table } from "@/components/Table";
import { eventsColumns, propsColumns } from "../../common/columns";
import { anchorData, codes, eventsData, propsData } from "./config";
import { CompAnchor } from "../../common/CompAnchor";
import { hljs, useDirective } from "../../common/hljs";
import { DemoCode } from "../../common/code";
useDirective(hljs);

export default function TimepickerPage () {
    const [time, setTime] = createSignal('');
    return <>
        <div class='sys-ctx-main-left' use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    Timepicker 时间选择
                </Title>
                <Space id="time_base" dir="v">
                    <Card bordered>
                        <Input type='time'/>
                        <Divider align="left"><Text type="primary">基础用法</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            基础用法
                        </Paragraph>
                        <DemoCode data={codes['time_base']}/>
                    </Card>
                </Space>

                <Space id="time_disabled" dir="v">
                    <Card bordered>
                        <Input type='time' value='22:35:11' disabled/>
                        <Divider align="left"><Text type="primary">可禁用</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                        使用disabled禁用
                        </Paragraph>
                        <DemoCode data={codes['time_disabled']}/>
                    </Card>
                </Space>


                <Space id="time_size" dir="v">
                    <Card bordered>
                        <Row gutter={20}>
                            <Col grid={0.33}>
                                <Input type='time' value='22:35:11' size='large'/>
                            </Col>
                            <Col grid={0.33}>
                                <Input type='time' value='22:35:11' />
                            </Col>
                            <Col grid={0.33}>
                                <Input type='time' value='22:35:11' size='small'/>
                            </Col>
                        </Row>
                        <Divider align="left"><Text type="primary">尺寸</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                        size 支持small和large
                        </Paragraph>
                        <DemoCode data={codes['time_size']}/>
                    </Card>
                </Space>


                <Space id="time_clearable" dir="v">
                    <Card bordered>
                        <Input type='time' value='22:35:11' clearable/>
                        <Divider align="left"><Text type="primary">可清空</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                        设置 clearable 选择后可清空
                        </Paragraph>
                        <DemoCode data={codes['time_clearable']}/>
                    </Card>
                </Space>


                <Space id="time_format" dir="v">
                    <Card bordered>
                        <Input type='time' value='22:35:11' clearable format="HH时mm分ss秒"/>
                        <Divider align="left"><Text type="primary">格式化</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                        通过 format 可自定义时间显示格式，格式同dayjs
                        </Paragraph>
                        <DemoCode data={codes['time_format']}/>
                    </Card>
                </Space>


                <Space id="time_step" dir="v">
                    <Card bordered>
                        <Input type='time' hourStep={2} minuteStep={5} secondStep={15}/>
                        <Divider align="left"><Text type="primary">步长</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                        hourStep、minuteStep、secondStep 可分别设置小时分钟秒的显示步长
                        </Paragraph>
                        <DemoCode data={codes['time_step']}/>
                    </Card>
                </Space>


                <Space id="time_head" dir="v">
                    <Card bordered>
                        <Input type='time' header={'开始时间'} footer='底部'/>
                        <Divider align="left"><Text type="primary">头部底部</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                        header/footer 可分别设置头部显示内容和底部显示内容
                        </Paragraph>
                        <DemoCode data={codes['time_head']}/>
                    </Card>
                </Space>

                <Space id="time_disable_time" dir="v">
                    <Card bordered>
                        <Input type='time' disabledTime={(num: number, type: string) => {
                            if ((type === 'minute' || type === 'second') && num % 3 === 0) {
                                return true;
                            }
                            return false;
                        }}/>
                        <Divider align="left"><Text type="primary">不可用时间</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                        header/footer 可分别设置头部显示内容和底部显示内容
                        </Paragraph>
                        <DemoCode data={codes['time_disable_time']}/>
                    </Card>
                </Space>


                <Space id="time_range" dir="v">
                    <Card bordered>
                        <Input type='timeRange' format="HH时mm分ss秒"/>
                        <Divider align="left"><Text type="primary">时间范围</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                        type 支持time和timeRange， timeRange为时间范围选择
                        </Paragraph>
                        <DemoCode data={codes['time_range']}/>
                    </Card>
                </Space>


                <Space id="time_trigger" dir="v">
                    <Card bordered>
                        <Input type='time' value={[time, setTime]} trigger={() => {
                            return <Button type='primary' >
                                {time() ? dayjs(time()).format('HH:mm:ss') : '请选择时间'}
                            </Button>
                        }}/>
                        <Divider align="left"><Text type="primary">触发元素</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                        通过trigger可设置自定义触发元素
                        </Paragraph>
                        <DemoCode data={codes['time_trigger']}/>
                    </Card>
                </Space>


                <Space dir="v" size={24} id="comp_api">
                    <Title type="primary" heading={3}>API</Title>
                    <Space id='comp_props' dir="v">
                        <Title type="primary" heading={4}>TimePicker Props</Title>
                        <Table columns={propsColumns} data={propsData} border size='small' />
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