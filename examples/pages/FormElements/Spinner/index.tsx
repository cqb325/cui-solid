import { Card } from "@/components/Card";
import { Divider } from "@/components/Divider";
import { Spinner } from "@/components/FormElements/Spinner";
import { Space } from "@/components/Layout";
import { Table } from "@/components/Table";
import { Paragraph } from "@/components/Typography/Paragraph";
import { Text } from "@/components/Typography/Text";
import { Title } from "@/components/Typography/Title";
import { CompAnchor } from "../../common/CompAnchor";
import { eventsColumns, propsColumns } from "../../common/columns";
import { anchorData, codes, eventsData, propsData } from "./config";
import { hljs, useDirective } from "../../common/hljs";
import { DemoCode } from "../../common/code";
useDirective(hljs);

export default function RatePage () {
    return <>
        <div class="sys-ctx-main-left" use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    Spinner 数字输入框
                </Title>

                <Space id="spinner_base" dir="v">
                    <Card bordered>
                        <span>
                            <Spinner />
                        </span>
                        <Divider align="left"><Text type="primary">基础用法</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            基础用法
                        </Paragraph>
                        <DemoCode data={codes['spinner_base']}/>
                    </Card>
                </Space>


                <Space id="spinner_disabled" dir="v">
                    <Card bordered>
                        <Spinner disabled/>
                        <Divider align="left"><Text type="primary">禁用</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        使用 disabled 进行禁用
                        </Paragraph>
                        <DemoCode data={codes['spinner_disabled']}/>
                    </Card>
                </Space>


                <Space id="spinner_size" dir="v">
                    <Card bordered>
                        <Space dir="h">
                            <Spinner size="large"/>
                            <Spinner />
                            <Spinner size="small"/>
                        </Space>
                        <Divider align="left"><Text type="primary">尺寸</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        size 支持large small
                        </Paragraph>
                        <DemoCode data={codes['spinner_size']}/>
                    </Card>
                </Space>


                <Space id="spinner_minmax" dir="v">
                    <Card bordered>
                        <Space dir="h">
                            <Spinner min={10} max={20}/>
                        </Space>
                        <Divider align="left"><Text type="primary">最小最大值</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        可通过设置 min max 限定 允许的最小值和最大值
                        </Paragraph>
                        <DemoCode data={codes['spinner_minmax']}/>
                    </Card>
                </Space>


                <Space id="spinner_step" dir="v">
                    <Card bordered>
                        <Spinner step={0.1}/>
                        <Divider align="left"><Text type="primary">步长</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        通过 step 属性可设定每次修改的步长
                        </Paragraph>
                        <DemoCode data={codes['spinner_step']}/>
                    </Card>
                </Space>


                <Space id="spinner_loop" dir="v">
                    <Card bordered>
                        <Spinner min={0} max={5} loop/>
                        <Divider align="left"><Text type="primary">循环</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        在设置min, max 后 再设置loop 超出时循环
                        </Paragraph>
                        <DemoCode data={codes['spinner_loop']}/>
                    </Card>
                </Space>


                <Space dir="v" size={24} id="comp_api">
                    <Title type="primary" heading={3}>API</Title>
                    <Space id="comp_props" dir="v">
                        <Title type="primary" heading={4}>Spinner Props</Title>
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
