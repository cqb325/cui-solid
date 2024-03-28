import { Card } from "@/components/Card";
import { Space } from "@/components/Layout";
import { Title } from "@/components/Typography/Title";
import { hljs, useDirective } from "../../common/hljs";
import { loadingBar } from "@/components/LoadingBar";
import { DemoCode } from "../../common/code";
import { Button } from "@/components/Button";
import { Divider } from "@/components/Divider";
import { Paragraph } from "@/components/Typography/Paragraph";
import { Text } from "@/components/Typography/Text";
import { anchorData, codes, propsData } from "./config";
import { Table } from "@/components/Table";
import { propsColumns } from "../../common/columns";
import { CompAnchor } from "../../common/CompAnchor";
useDirective(hljs);

export default function LoadingBarPage () {
    return <>
        <div class="sys-ctx-main-left" use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    LoadingBar 加载进度条
                </Title>
                <Space id="loadingbar_base" dir="v">
                    <Card bordered>
                        <Space dir="h">
                            <Button type="primary" onClick={() => {
                                loadingBar.start();
                            }}>开始</Button>
                            <Button type="primary" onClick={() => {
                                loadingBar.finish();
                            }}>结束</Button>
                            <Button type="primary" onClick={() => {
                                loadingBar.error();
                            }}>错误</Button>
                        </Space>

                        <Divider align="left"><Text type="primary">基础用法</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            loadingBar 为全局变量，包含start、finish和error三个接口， 一般配合路由使用
                        </Paragraph>
                        <DemoCode data={codes['loadingbar_base']}/>
                    </Card>
                </Space>


                <Space dir="v" size={24} id="comp_api">
                    <Title type="primary" heading={3}>API</Title>
                    <Space id="comp_props" dir="v">
                        <Title type="primary" heading={4}>LoadingBar Props</Title>
                        <Table columns={propsColumns} data={propsData} border size="small" />
                    </Space>
                </Space>
            </Space>
        </div>

        <CompAnchor data={anchorData}/>
    </>
}
