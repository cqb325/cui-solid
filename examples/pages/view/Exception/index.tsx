import { Card } from "@/components/Card";
import { Divider } from "@/components/Divider";
import { Exception } from "@/components/Exception";
import { Space } from "@/components/Layout";
import { Table } from "@/components/Table";
import { Paragraph } from "@/components/Typography/Paragraph";
import { Text } from "@/components/Typography/Text";
import { Title } from "@/components/Typography/Title";
import { CompAnchor } from "../../common/CompAnchor";
import { propsColumns } from "../../common/columns";
import { anchorData, codes, propsData } from "./config";
import { hljs, useDirective } from "../../common/hljs";
import { DemoCode } from "../../common/code";
useDirective(hljs);

export default function ExceptionPage () {
    return <>
        <div class="sys-ctx-main-left" use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    Exception 异常页面
                </Title>
                <Space id="exp_base" dir="v">
                    <Card bordered>
                        <Exception type="403"/>
                        <Divider align="left"><Text type="primary">403页面</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            403页面
                        </Paragraph>
                        <DemoCode data={codes['exp_base']}/>
                    </Card>
                </Space>

                <Space id="exp_hideAction" dir="v">
                    <Card bordered>
                        <Exception type="403" showAction={false}/>
                        <Divider align="left"><Text type="primary">隐藏按钮</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            通过showAction 隐藏操作按钮
                        </Paragraph>
                        <DemoCode data={codes['exp_hideAction']}/>
                    </Card>
                </Space>

                <Space id="exp_404" dir="v">
                    <Card bordered>
                        <Exception type="404"/>
                        <Divider align="left"><Text type="primary">404</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            404异常页面
                        </Paragraph>
                        <DemoCode data={codes['exp_404']}/>
                    </Card>
                </Space>

                <Space id="exp_500" dir="v">
                    <Card bordered>
                        <Exception type="500"/>
                        <Divider align="left"><Text type="primary">500</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            500异常页面
                        </Paragraph>
                        <DemoCode data={codes['exp_500']}/>
                    </Card>
                </Space>


                <Space id="exp_empty" dir="v">
                    <Card bordered>
                        <Exception type="empty"/>
                        <Divider align="left"><Text type="primary">empty</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        empty 异常页面
                        </Paragraph>
                        <DemoCode data={codes['exp_empty']}/>
                    </Card>
                </Space>


                <Space id="exp_fail" dir="v">
                    <Card bordered>
                        <Exception type="fail"/>
                        <Divider align="left"><Text type="primary">fail</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        fail 异常页面
                        </Paragraph>
                        <DemoCode data={codes['exp_fail']}/>
                    </Card>
                </Space>


                <Space id="exp_deny" dir="v">
                    <Card bordered>
                        <Exception type="deny"/>
                        <Divider align="left"><Text type="primary">deny</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        deny 异常页面
                        </Paragraph>
                        <DemoCode data={codes['exp_deny']}/>
                    </Card>
                </Space>


                <Space dir="v" size={24} id="comp_api">
                    <Title type="primary" heading={3}>API</Title>
                    <Space id="comp_props" dir="v">
                        <Title type="primary" heading={4}>Timeline.Item Props</Title>
                        <Table columns={propsColumns} data={propsData} border size="small" />
                    </Space>
                </Space>
            </Space>
        </div>

        <CompAnchor data={anchorData}/>
    </>
}
