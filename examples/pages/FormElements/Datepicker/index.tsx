import { Space } from "@/components/Layout";
import { Datepicker } from "@/components/FormElements/DatePicker";
import { Button } from "@/components/Button";
import { createSignal } from "solid-js";
import { Title } from "@/components/Typography/Title";
import { Card } from "@/components/Card";
import { Input } from "@/components/FormElements/Input";
import { Divider } from "@/components/Divider";
import { Text } from "@/components/Typography/Text";
import { Paragraph } from "@/components/Typography/Paragraph";
import { Row } from "@/components/Row";
import { Col } from "@/components/Col";
import dayjs from "dayjs";
import { Table } from "@/components/Table";
import { eventsColumns, propsColumns } from "../../common/columns";
import { anchorData, codes, eventsData, propsData } from "./config";
import { CompAnchor } from "../../common/CompAnchor";
import { hljs, useDirective } from "../../common/hljs";
import { DemoCode } from "../../common/code";
useDirective(hljs);

export default function DatepickerPage () {
    const [value, setValue] = createSignal<Date[]>([dayjs('2023-02-01').toDate(), dayjs('2023-05-15').toDate()]);
    return <>
        <div class='sys-ctx-main-left' use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    Datepicker 日期选择
                </Title>
                <Space id="date_base" dir="v">
                    <Card bordered>
                        <Input type='date'/>
                        <Divider align="left"><Text type="primary">基础用法</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                        基础用法
                        </Paragraph>
                        <DemoCode data={codes['date_base']}/>
                    </Card>
                </Space>

                <Space id="date_disabled" dir="v">
                    <Card bordered>
                        <Datepicker disabled/>
                        <Divider align="left"><Text type="primary">禁用</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                        使用disabled禁用
                        </Paragraph>
                        <DemoCode data={codes['date_disabled']}/>
                    </Card>
                </Space>


                <Space id="date_size" dir="v">
                    <Card bordered>
                        <Row gutter={20}>
                            <Col grid={0.33}>
                                <Datepicker value='2023-05-01' size='large'/>
                            </Col>
                            <Col grid={0.33}>
                                <Datepicker />
                            </Col>
                            <Col grid={0.33}>
                                <Datepicker size='small'/>
                            </Col>
                        </Row>
                        <Divider align="left"><Text type="primary">尺寸</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                        size 支持small和large
                        </Paragraph>
                        <DemoCode data={codes['date_size']}/>
                    </Card>
                </Space>

                <Space id="date_clearable" dir="v">
                    <Card bordered>
                        <Datepicker clearable value='2023-05-01'/>
                        <Divider align="left"><Text type="primary">可清空</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                        设置 clearable 选择后可清空
                        </Paragraph>
                        <DemoCode data={codes['date_clearable']}/>
                    </Card>
                </Space>


                <Space id="date_custom_disable" dir="v">
                    <Card bordered>
                        <Datepicker clearable disabledDate={(date: Date) => {
                            return date.getTime() > Date.now();
                        }}/>
                        <Divider align="left"><Text type="primary">自定义禁用</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                        设置 disabledDate 可自定义禁用的日期
                        </Paragraph>
                        <DemoCode data={codes['date_custom_disable']}/>
                    </Card>
                </Space>


                <Space id="date_month" dir="v">
                    <Card bordered>
                        <Datepicker clearable type='month' onChange={(date: Date) => {
                            console.log(date);
                        }}/>
                        <Divider align="left"><Text type="primary">月份</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                        type = month 为月份选择
                        </Paragraph>
                        <DemoCode data={codes['date_month']}/>
                    </Card>
                </Space>


                <Space id="date_monthRange" dir="v">
                    <Card bordered>
                        <Datepicker clearable type='monthRange' onChange={(dates: Date[]) => {
                            console.log(dates);
                        }}/>
                        <Divider align="left"><Text type="primary">月份范围</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                        type = monthRange 为月份范围选择
                        </Paragraph>
                        <DemoCode data={codes['date_monthRange']}/>
                    </Card>
                </Space>


                <Space id="date_align" dir="v">
                    <Card bordered>
                        <Datepicker clearable align="bottomRight"/>
                        <Divider align="left"><Text type="primary">位置</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                        align 支持 bottomLeft 和 bottomRight 默认为bottomLeft
                        </Paragraph>
                        <DemoCode data={codes['date_align']}/>
                    </Card>
                </Space>


                <Space id="date_dateRange" dir="v">
                    <Card bordered>
                        <Datepicker clearable type="dateRange"/>
                        <Divider align="left"><Text type="primary">日期范围</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                        type = dateRange 为日期范围选择
                        </Paragraph>
                        <DemoCode data={codes['date_dateRange']}/>
                    </Card>
                </Space>


                <Space id="date_stick" dir="v">
                    <Card bordered>
                        <Datepicker clearable type="dateRange" stick/>
                        <Divider align="left"><Text type="primary">月份联动</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                        stick属性月份为联动 默认不联动
                        </Paragraph>
                        <DemoCode data={codes['date_stick']}/>
                    </Card>
                </Space>


                <Space id="date_shortcut" dir="v">
                    <Card bordered>
                        <Datepicker clearable value={[value, setValue]} stick shortCuts={<Space dir="v">
                            <Button type="text" onClick={() => {
                                const now = new Date();
                                const start = new Date();
                                start.setDate(start.getDate() - 6);
                                setValue([start, now]);
                            }}>一周</Button>
                            <Button type="text" onClick={() => {
                                const now = new Date();
                                const start = new Date();
                                start.setDate(start.getDate() - 30);
                                setValue([start, now]);
                            }}>一个月</Button>
                        </Space>} type='dateRange'/>
                        <Divider align="left"><Text type="primary">快捷选择</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                        shortCuts 可以自定义快捷选择面板
                        </Paragraph>
                        <DemoCode data={codes['date_shortcut']}/>
                    </Card>
                </Space>


                <Space id="date_dateTime" dir="v">
                    <Card bordered>
                        <Datepicker clearable type="dateTime" value='2023-04-05 15:35:30'/>
                        <Divider align="left"><Text type="primary">日期时间</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                        type = dateTime 为日期时间选择
                        </Paragraph>
                        <DemoCode data={codes['date_dateTime']}/>
                    </Card>
                </Space>


                <Space id="date_dateTimeRange" dir="v">
                    <Card bordered>
                        <Datepicker clearable type="dateTimeRange" />
                        <Divider align="left"><Text type="primary">日期时间范围</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                        type = dateTimeRange 为日期时间范围选择
                        </Paragraph>
                        <DemoCode data={codes['date_dateTimeRange']}/>
                    </Card>
                </Space>


                <Space id="date_maxRange" dir="v">
                    <Card bordered>
                        <Datepicker clearable type="dateRange" maxRange={7}/>
                        <Divider align="left"><Text type="primary">最大区间</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                        使用 maxRange 可以限定最大区间范围
                        </Paragraph>
                        <DemoCode data={codes['date_maxRange']}/>
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