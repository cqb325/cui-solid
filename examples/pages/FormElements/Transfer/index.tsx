import { BothSide, Space } from "@/components/Layout";
import { Transfer } from "@/components/FormElements/Transfer";
import { createSignal } from "solid-js";
import { Title } from "@/components/Typography/Title";
import { Card } from "@/components/Card";
import { Divider } from "@/components/Divider";
import { Paragraph } from "@/components/Typography/Paragraph";
import { Text } from "@/components/Typography/Text";
import { Table } from "@/components/Table";
import { eventsColumns, propsColumns } from "../../common/columns";
import { anchorData, codes, eventsData, propsData } from "./config";
import { CompAnchor } from "../../common/CompAnchor";
import { hljs, useDirective } from "../../common/hljs";
import { DemoCode } from "../../common/code";
useDirective(hljs);

export default function TransferPage () {
    const data = [];
    for (let i = 0; i < 15; i++) {
        const disabled = Math.random() < 0.4 ? true : false;
        const obj = {
            id: i,
            disabled,
            title: 'Content_'+ i
        };
        data.push(obj)
    }
    const data2 = JSON.parse(JSON.stringify(data));
    const [value, setValue] = createSignal([2,5,7])
    return <>
        <div class="sys-ctx-main-left" use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    Transfer 穿梭框
                </Title>
                <Space id="transfer_base" dir="v">
                    <Card bordered>
                        <Transfer width={250} height={300} data={data} value={[value, setValue]}/>
                        <Divider align="left"><Text type="primary">基础用法</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        基础用法
                        </Paragraph>
                        <DemoCode data={codes['transfer_base']}/>
                    </Card>
                </Space>


                <Space id="transfer_filter" dir="v">
                    <Card bordered>
                        <Transfer width={250} height={300} data={data2} value={[value, setValue]} filter/>
                        <Divider align="left"><Text type="primary">过滤</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        添加 filter 参数可增加过滤功能
                        </Paragraph>
                        <DemoCode data={codes['transfer_filter']}/>
                    </Card>
                </Space>


                <Space id="transfer_render" dir="v">
                    <Card bordered>
                        <Transfer width={250} height={300} data={data2} value={[value, setValue]} render={(item: any) => {
                            return <BothSide><span>{item.id}</span><span>{item.title}</span></BothSide>
                        }}/>
                        <Divider align="left"><Text type="primary">自定义渲染</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        通过 render 函数可自定义选项的渲染
                        </Paragraph>
                        <DemoCode data={codes['transfer_render']}/>
                    </Card>
                </Space>


                <Space dir="v" size={24} id="comp_api">
                    <Title type="primary" heading={3}>API</Title>
                    <Space id="comp_props" dir="v">
                        <Title type="primary" heading={4}>TimePicker Props</Title>
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
