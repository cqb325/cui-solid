import { Space } from "@/components/Layout";
import { Slider } from "@/components/FormElements/Slider";
import { Title } from "@/components/Typography/Title";
import { Card } from "@/components/Card";
import { Divider } from "@/components/Divider";
import { Text } from "@/components/Typography/Text";
import { Paragraph } from "@/components/Typography/Paragraph";
import { Table } from "@/components/Table";
import { eventsColumns, propsColumns } from "../../common/columns";
import { anchorData, codes, eventsData, propsData } from "./config";
import { CompAnchor } from "../../common/CompAnchor";
import { hljs, useDirective } from "../../common/hljs";
import { DemoCode } from "../../common/code";
useDirective(hljs);

export default function SliderPage () {
    return <>
        <div class="sys-ctx-main-left" use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    Slider 滑块
                </Title>
                <Space id="slider_base" dir="v">
                    <Card bordered>
                        <Slider />
                        <Divider align="left"><Text type="primary">基础用法</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        基础用法
                        </Paragraph>
                        <DemoCode data={codes['slider_base']}/>
                    </Card>
                </Space>


                <Space id="slider_disabled" dir="v">
                    <Card bordered>
                        <Space dir="v">
                            <Slider disabled/>
                            <Slider disabled range value={[30, 70]}/>
                        </Space>
                        <Divider align="left"><Text type="primary">禁用</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        disabled 可禁用
                        </Paragraph>
                        <DemoCode data={codes['slider_disabled']}/>
                    </Card>
                </Space>


                <Space id="slider_step" dir="v">
                    <Card bordered>
                        <Space dir="v">
                            <Slider step={10}/>
                            <Slider step={0.1}/>
                        </Space>
                        <Divider align="left"><Text type="primary">步长</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        step 属性可修改滑动的步长
                        </Paragraph>
                        <DemoCode data={codes['slider_step']}/>
                    </Card>
                </Space>

                <Space id="slider_init" dir="v">
                    <Card bordered>
                        <Slider value={30} />
                        <Divider align="left"><Text type="primary">初始化值</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        value 可初始化值
                        </Paragraph>
                        <DemoCode data={codes['slider_init']}/>
                    </Card>
                </Space>


                <Space id="slider_minMax" dir="v">
                    <Card bordered>
                        <Slider step={0.01} min={0.2} max={1} value={0.3}/>
                        <Divider align="left"><Text type="primary">最大小值</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        可通过min max 修改最小最大值
                        </Paragraph>
                        <DemoCode data={codes['slider_minMax']}/>
                    </Card>
                </Space>


                <Space id="slider_range" dir="v">
                    <Card bordered>
                        <Slider value={[30, 70]} range/>
                        <Divider align="left"><Text type="primary">范围</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        设置 range 为范围滑块
                        </Paragraph>
                        <DemoCode data={codes['slider_range']}/>
                    </Card>
                </Space>


                <Space id="slider_tip" dir="v">
                    <Card bordered>
                        <Slider value={[30, 70]} range tipFormatter={(v: number) => {
                            return v + '分'
                        }}/>
                        <Divider align="left"><Text type="primary">格式化</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        使用 tipFormatter 可自定义提示信息
                        </Paragraph>
                        <DemoCode data={codes['slider_tip']}/>
                    </Card>
                </Space>


                <Space id="slider_marks" dir="v">
                    <Card bordered>
                        <Slider step={10} marks={{0: '0', 20: '20a', 50: '50'}}/>
                        <Divider align="left"><Text type="primary">标记</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        设置属性 marks 可以显示标记
                        </Paragraph>
                        <DemoCode data={codes['slider_marks']}/>
                    </Card>
                </Space>


                <Space dir="v" size={24} id="comp_api">
                    <Title type="primary" heading={3}>API</Title>
                    <Space id="comp_props" dir="v">
                        <Title type="primary" heading={4}>Slider Props</Title>
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
