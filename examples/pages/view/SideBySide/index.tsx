import { Space } from "@/components/Layout";
import { Card } from "@/components/Card";
import { Title } from "@/components/Typography/Title";
import { Divider } from "@/components/Divider";
import { Text } from "@/components/Typography/Text";
import { Paragraph } from "@/components/Typography/Paragraph";
import { DemoCode } from "../../common/code";
import { SideBySide } from "@/components/SideBySide";
import img1 from './before.jpeg';
import img2 from './after.jpeg';
import { Image } from "@/components/Image";
import { Table } from "@/components/Table";
import { anchorData, codes, propsData } from "./config";
import { propsColumns } from "../../common/columns";
import { CompAnchor } from "../../common/CompAnchor";

export default function SideBySidePage () {
    return <>
        <div class="sys-ctx-main-left">
            <Space dir="v" size={32}>
                <Title heading={2}>
                    SideBySide 对比
                </Title>
                <Space id="sidebyside_base" dir="v">
                    <Card bordered>
                        <div style={{width: '640px', height: '426px'}}>
                            <SideBySide left={<div style={{background: 'green'}}>
                                <Image src={img1}/>
                            </div>}
                                right={<div style={{background: 'red'}}>
                                    <Image src={img2}/>
                                </div>}/>
                        </div>
                        <Divider align="left"><Text type="primary">基础用法</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            基础用法 。
                        </Paragraph>
                        <DemoCode data={codes['sidebyside_base']}/>
                    </Card>
                </Space>

                <Space dir="v" size={24} id="comp_api">
                    <Title type="primary" heading={3}>API</Title>
                    <Space id="comp_props" dir="v">
                        <Title type="primary" heading={4}>Props</Title>
                        <Table columns={propsColumns} data={propsData} border size="small" />
                    </Space>
                </Space>
            </Space>
        </div>

        <CompAnchor data={anchorData}/>
    </>
}
