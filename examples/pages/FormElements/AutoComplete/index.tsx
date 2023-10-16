import { createSignal } from "solid-js";
import { Card } from "@/components/Card";
import { Divider } from "@/components/Divider";
import { AutoComplete } from "@/components/FormElements/AutoComplete";
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
    const [data, setData] = createSignal([]);
    return <>
        <div class='sys-ctx-main-left' use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    AutoComplete 自动完成
                </Title>
                
                <Space id="auto_base" dir="v">
                    <Card bordered>
                        <AutoComplete data={data()} placeholder='查询' onSearch={(v: any) => {
                            const arr: any = [];
                            arr.push(v);
                            arr.push(v+v);
                            arr.push(v+v+v);
                            setData(arr);
                        }}/>
                        <Divider align="left"><Text type="primary">基础用法</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            基础用法
                        </Paragraph>
                        <DemoCode data={codes['auto_base']}/>
                    </Card>
                </Space>

                <Space dir="v" size={24} id="comp_api">
                    <Title type="primary" heading={3}>API</Title>
                    <Space id='comp_props' dir="v">
                        <Title type="primary" heading={4}>AutoComplete Props</Title>
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