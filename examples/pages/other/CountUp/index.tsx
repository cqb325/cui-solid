import { Card } from "@/components/Card";
import { Space } from "@/components/Layout";
import { Title } from "@/components/Typography/Title";
import { hljs, useDirective } from "../../common/hljs";
import { DemoCode } from "../../common/code";
import { CountUp } from "@/components/CountUp";
import { Button } from "@/components/Button";
import { Input } from "@/components/FormElements/Input";
import { createSignal } from "solid-js";
import { Divider } from "@/components/Divider";
import { Text } from "@/components/Typography/Text";
import { Paragraph } from "@/components/Typography/Paragraph";
import { anchorData, codes, propsData } from "./config";
import { CompAnchor } from "../../common/CompAnchor";
import { Table } from "@/components/Table";
import { propsColumns } from "../../common/columns";
useDirective(hljs);

export default function CountUpPage (){
    let countup: any;
    let countup2: any;
    const [value, setValue] = createSignal(2000);
    return <>
        <div class="sys-ctx-main-left" use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    CountUp 数字动画
                </Title>
                <Space id="countup_base" dir="v">
                    <Card bordered>
                        <Space dir="v">
                            <CountUp value={2000} style={{"font-size": "32px"}} ref={countup} duration={6}/>
                            <Space dir="h">
                                <Button onClick={() => {
                                    countup.pauseResume();
                                }}>暂停/继续</Button>
                                <Button onClick={() => {
                                    countup.reset();
                                }}>重置</Button>
                                <Button onClick={() => {
                                    countup.start();
                                }}>开始</Button>
                                <Button onClick={() => {
                                    countup.update(value());
                                }}>更新至：</Button>
                                <Input style={{width: '100px'}} value={[value, setValue]}/>
                            </Space>
                        </Space>
                        <Divider align="left"><Text type="primary">基础用法</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            该组件基于 countup.js 封装，可以自由控制数字动画过程。
                        </Paragraph>
                        <DemoCode data={codes['countup_base']}/>
                    </Card>
                </Space>


                <Space id="countup_decimal" dir="v">
                    <Card bordered>
                        <Space dir="v">
                            <CountUp value={2000} style={{"font-size": "32px"}} ref={countup2} duration={4} decimal={2}/>
                            <Space dir="h">
                                <Button onClick={() => {
                                    countup2.reset();
                                    countup2.start();
                                }}>重新开始</Button>
                            </Space>
                        </Space>
                        <Divider align="left"><Text type="primary">小数</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            设置属性 decimal 指定小数位数。
                        </Paragraph>
                        <DemoCode data={codes['countup_decimal']}/>
                    </Card>
                </Space>


                <Space dir="v" size={24} id="comp_api">
                    <Title type="primary" heading={3}>API</Title>
                    <Space id="comp_props" dir="v">
                        <Title type="primary" heading={4}>CountUp Props</Title>
                        <Table columns={propsColumns} data={propsData} border size="small" />
                    </Space>
                </Space>
            </Space>
        </div>

        <CompAnchor data={anchorData}/>
    </>
}
