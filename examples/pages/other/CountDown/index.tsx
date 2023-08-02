import { Card } from "@/components/Card";
import { CountDown } from "@/components/CountDown";
import { Divider } from "@/components/Divider";
import { Space } from "@/components/Layout";
import { Table } from "@/components/Table";
import { Paragraph } from "@/components/Typography/Paragraph";
import { Text } from "@/components/Typography/Text";
import { Title } from "@/components/Typography/Title";
import { CompAnchor } from "../../common/CompAnchor";
import { DemoCode } from "../../common/code";
import { propsColumns } from "../../common/columns";
import { hljs, useDirective } from "../../common/hljs";
import { anchorData, codes, propsData } from "./config";
useDirective(hljs);

export default function CountDownPage() {
    const start = Date.now() + 3900000;
    return <>
        <div class='sys-ctx-main-left' use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    CountDown 倒计时
                </Title>
                <Space id="countdown_base" dir="v">
                    <Card bordered>
                        <Space dir="h" size={100}>
                            <CountDown value={start} />
                            <CountDown value={start} format="HH时mm分ss秒" prefix='剩余时间：'/>
                        </Space>
                        <Divider align="left"><Text type="primary">基础用法</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                        简单的倒计时组件使用, format可以格式化时间格式。
                        </Paragraph>
                        <DemoCode data={codes['countdown_base']}/>
                    </Card>
                </Space>

                <Space dir="v" size={24} id="comp_api">
                    <Title type="primary" heading={3}>API</Title>
                    <Space id='comp_props' dir="v">
                        <Title type="primary" heading={4}>CountDown Props</Title>
                        <Table columns={propsColumns} data={propsData} border size='small' />
                    </Space>
                </Space>
            </Space>
        </div>

        <CompAnchor data={anchorData}/>
    </>
}