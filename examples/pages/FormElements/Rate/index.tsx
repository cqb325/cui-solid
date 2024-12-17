import { Card } from "@/components/Card";
import { Divider } from "@/components/Divider";
import { Rate } from "@/components/FormElements/Rate";
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
import { F7Star } from "cui-solid-icons/f7";
useDirective(hljs);

export default function RatePage () {
    return <>
        <div class="sys-ctx-main-left" use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    Rate 评分
                </Title>

                <Space id="rate_base" dir="v">
                    <Card bordered>
                        <Rate icon={<F7Star size={24}/>} onChange={(v: number) => {
                            console.log(v);
                        }}/>
                        <Divider align="left"><Text type="primary">基础用法</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            基础用法
                        </Paragraph>
                        <DemoCode data={codes['rate_base']}/>
                    </Card>
                </Space>


                <Space id="rate_disabled" dir="v">
                    <Card bordered>
                        <Rate disabled icon={<F7Star size={24}/>}/>
                        <Divider align="left"><Text type="primary">禁用</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        使用 disabled 进行禁用
                        </Paragraph>
                        <DemoCode data={codes['rate_disabled']}/>
                    </Card>
                </Space>


                <Space id="rate_count" dir="v">
                    <Card bordered>
                        <Rate count={3} icon={<F7Star size={24}/>}/>
                        <Divider align="left"><Text type="primary">数量</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        使用 count 指定图标的数量，默认为5
                        </Paragraph>
                        <DemoCode data={codes['rate_count']}/>
                    </Card>
                </Space>


                <Space id="rate_half" dir="v">
                    <Card bordered>
                        <Rate allowHalf icon={<F7Star size={24}/>}/>
                        <Divider align="left"><Text type="primary">半星</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        使用 allowHalf 可选中半星
                        </Paragraph>
                        <DemoCode data={codes['rate_half']}/>
                    </Card>
                </Space>


                <Space dir="v" size={24} id="comp_api">
                    <Title type="primary" heading={3}>API</Title>
                    <Space id="comp_props" dir="v">
                        <Title type="primary" heading={4}>Rate Props</Title>
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
