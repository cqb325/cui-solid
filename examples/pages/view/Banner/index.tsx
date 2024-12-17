import { hljs, useDirective } from "../../common/hljs";
import { DemoCode } from "../../common/code";
import { eventsColumns, propsColumns } from "../../common/columns";
import { anchorData, codes, eventsData, propsData } from "./config";
import { CompAnchor } from "../../common/CompAnchor";
useDirective(hljs);
import { Space } from "@/components/Layout";
import { Title } from "@/components/Typography/Title";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { Divider } from "@/components/Divider";
import { Paragraph } from "@/components/Typography/Paragraph";
import { Text } from "@/components/Typography/Text";
import { Table } from "@/components/Table";
import { Banner } from "@/components/Banner";
import { Slot } from "@/components/inner/Slot";

export default function BannerPage () {
    return <>
        <div class="sys-ctx-main-left" use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    Banner 通知横幅
                </Title>
                <Space id="banner_base" dir="v">
                    <Card bordered>
                        <Space dir="v">
                            <Banner type="info">
                                <div>备注： 如果你还没有安装上述软件，有关安装 NPM 和 Node.js 的方法在这里。</div>
                            </Banner>
                            <Banner type="warning">
                                <div>备注： 如果你还没有安装上述软件，有关安装 NPM 和 Node.js 的方法在这里。</div>
                            </Banner>
                            <Banner type="success">
                                <div>安装成功： 软件安装成功，已是最新版本。</div>
                            </Banner>
                            <Banner type="error">
                                <div>尚未安装插件，该功能还无法使用</div>
                            </Banner>
                        </Space>
                        <Divider align="left"><Text type="primary">基本用法</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            基本用法,支持4种类型：info、warning、error、success。默认为 info。
                        </Paragraph>
                        <DemoCode data={codes['banner_base']}/>
                    </Card>
                </Space>


                <Space id="banner_fullmode" dir="v">
                    <Card bordered>
                        <Space dir="v" style={{width: '650px'}}>
                            <Banner type="info" fullMode={false} bordered icon={null} closeIcon={null}
                                title={<div style={{"font-weight": 'bold', color: 'var(--cui-color-text-0)', "font-size": '14px'}}>不知道 AppKey？</div>}>
                                <div>你可先联系对应的研发同学，确认是否已在 应用云平台 申请了应用，并填写对应的信息。</div>
                            </Banner>
                            <Banner type="warning" fullMode={false} bordered icon={null} closeIcon={null}
                                title={<div style={{"font-weight": 'bold', color: 'var(--cui-color-text-0)', "font-size": '14px'}}>不知道 AppKey？</div>}>
                                <div>你可先联系对应的研发同学，确认是否已在 应用云平台 申请了应用，并填写对应的信息。</div>
                            </Banner>
                            <Banner type="success" fullMode={false} bordered icon={null} closeIcon={null}
                                title={<div style={{"font-weight": 'bold', color: 'var(--cui-color-text-0)', "font-size": '14px'}}>不知道 AppKey？</div>}>
                                <div>你可先联系对应的研发同学，确认是否已在 应用云平台 申请了应用，并填写对应的信息。</div>
                            </Banner>
                            <Banner type="error" fullMode={false} bordered icon={null} closeIcon={null}
                                title={<div style={{"font-weight": 'bold', color: 'var(--cui-color-text-0)', "font-size": '14px'}}>不知道 AppKey？</div>}>
                                <div>你可先联系对应的研发同学，确认是否已在 应用云平台 申请了应用，并填写对应的信息。</div>
                            </Banner>
                        </Space>
                        <Divider align="left"><Text type="primary">非全屏模式</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        可以设置 fullMode={false} 使用非全屏模式的 banner 样式。 通过 bordered 属性可以设置边框。
                        </Paragraph>
                        <DemoCode data={codes['banner_fullmode']}/>
                    </Card>
                </Space>


                <Space id="banner_custom" dir="v">
                    <Card bordered>
                        <Space dir="v" style={{width: '450px'}}>
                            <Banner
                                fullMode={false}
                                title="Title"
                                type="warning"
                                bordered
                            >
                                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</div>
                                <Slot name="extra">
                                    <div style={{margin: '16px 0 0', "text-align": 'right'}}>
                                        <Space justify="end">
                                            <Button theme="borderless">No, thanks.</Button>
                                            <Button type="warning">Sounds great!</Button>
                                        </Space>
                                    </div>
                                </Slot>
                            </Banner>
                        </Space>

                        <Divider align="left"><Text type="primary">自定义内容</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            通过指定Slot name="extra" 指定额外内容
                        </Paragraph>
                        <DemoCode data={codes['banner_custom']}/>
                    </Card>
                </Space>

                <Space dir="v" size={24} id="comp_api">
                    <Title type="primary" heading={3}>API</Title>
                    <Space id="comp_props" dir="v">
                        <Title type="primary" heading={4}>Banner Props</Title>
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
