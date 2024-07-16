import { QRCode } from "@/components/QRCode";
import img from '../../../assets/images/logo.svg';
import { Space } from "@/components/Layout";
import { Title } from "@/components/Typography/Title";
import { Card } from "@/components/Card";
import { hljs, useDirective } from "../../common/hljs";
import { DemoCode } from "../../common/code";
import { Divider } from "@/components/Divider";
import { Text } from "@/components/Typography/Text";
import { Paragraph } from "@/components/Typography/Paragraph";
import { Input } from "@/components/FormElements/Input";
import { createSignal } from "solid-js";
import { anchorData, codes, propsData } from "./config";
import { Button } from "@/components/Button";
import { Table } from "@/components/Table";
import { propsColumns } from "../../common/columns";
import { CompAnchor } from "../../common/CompAnchor";
useDirective(hljs);

export default function QRCodePage () {
    let qrcode: any;
    const [src, setSrc] = createSignal('https://www.baidu.com');
    return <>
        <div class="sys-ctx-main-left" use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    QRCode 二维码
                </Title>
                <Space id="qrcode_base" dir="v">
                    <Card bordered>
                        <Space dir="v" inline>
                            <div>
                                <QRCode value={src()} />
                            </div>
                            <Input value={[src, setSrc]} />
                        </Space>
                        <Divider align="left"><Text type="primary">基础用法</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            基础用法 。
                        </Paragraph>
                        <DemoCode data={codes['qrcode_base']}/>
                    </Card>
                </Space>

                <Space id="qrcode_img" dir="v">
                    <Card bordered>
                        <QRCode icon={img} value={src()} />
                        <Divider align="left"><Text type="primary">带图标</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            使用icon 可以让二维码带图标 。
                        </Paragraph>
                        <DemoCode data={codes['qrcode_img']}/>
                    </Card>
                </Space>


                <Space id="qrcode_color" dir="v">
                    <Card bordered>
                        <Space dir="h">
                            <QRCode value={src()} color="rgb(37,119,47)"/>
                            <QRCode value={src()} color="#1890ff" bgColor="#ededed"/>
                        </Space>
                        <Divider align="left"><Text type="primary">自定义颜色</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            使用 color 可以自定义二维码颜色，bgColor 可以修改背景颜色 。
                        </Paragraph>
                        <DemoCode data={codes['qrcode_color']}/>
                    </Card>
                </Space>


                <Space id="qrcode_level" dir="v">
                    <Card bordered>
                        <Space dir="h">
                            <QRCode value="https://gitee.com/cqb325/cui-solid/blob/master/src/assets/images/logo.svg" level="L"/>
                            <QRCode value="https://gitee.com/cqb325/cui-solid/blob/master/src/assets/images/logo.svg" level="M"/>
                            <QRCode value="https://gitee.com/cqb325/cui-solid/blob/master/src/assets/images/logo.svg" level="Q"/>
                            <QRCode value="https://gitee.com/cqb325/cui-solid/blob/master/src/assets/images/logo.svg" level="H"/>
                        </Space>
                        <Divider align="left"><Text type="primary">纠错比例</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            通过设置 level 调整不同的容错等级。
                        </Paragraph>
                        <DemoCode data={codes['qrcode_level']}/>
                    </Card>
                </Space>

                <Space id="qrcode_download" dir="v">
                    <Card bordered>
                        <QRCode value={src()} ref={qrcode}/>
                        <Button type="primary" onClick={() => {
                            qrcode.download();
                        }}>下载</Button>
                        <Divider align="left"><Text type="primary">下载</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            通过设置 level 调整不同的容错等级。
                        </Paragraph>
                        <DemoCode data={codes['qrcode_download']}/>
                    </Card>
                </Space>

                <Space dir="v" size={24} id="comp_api">
                    <Title type="primary" heading={3}>API</Title>
                    <Space id="comp_props" dir="v">
                        <Title type="primary" heading={4}>QRCode Props</Title>
                        <Table columns={propsColumns} data={propsData} border size="small" />
                    </Space>
                </Space>
            </Space>
        </div>

        <CompAnchor data={anchorData}/>
    </>
}
