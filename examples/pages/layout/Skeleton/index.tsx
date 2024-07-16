import { createSignal } from "solid-js";
import { hljs, useDirective } from "../../common/hljs";
import { DemoCode } from "../../common/code";
import { CompAnchor } from "../../common/CompAnchor";
import { anchorData, avatarPropsData, codes, itemPropsData, paragraphPropsData, propsData } from "./config";
import { propsColumns } from "../../common/columns";
import { Space } from "@/components/Layout";
import { Title } from "@/components/Typography/Title";
import { Card } from "@/components/Card";
import { Switch } from "@/components/FormElements/Switch";
import { Skeleton } from "@/components/Skeleton";
import { Avatar } from "@/components/Avatar";
import { Button } from "@/components/Button";
import { Divider } from "@/components/Divider";
import { Text } from "@/components/Typography/Text";
import { Paragraph } from "@/components/Typography/Paragraph";
import { Row } from "@/components/Row";
import { Col } from "@/components/Col";
import { Table } from "@/components/Table";
import { Image } from "@/components/Image";
useDirective(hljs);

export default function SkeletonPage () {
    const [loading, setLoading] = createSignal(true)
    const showContent = () => {
        setLoading(!loading());
    }
    return <>
        <div class="sys-ctx-main-left" use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    Skeleton 骨架屏
                </Title>
                <Space id="skeleton_base" dir="v">
                    <Card bordered>
                        <div>
                            <Switch onChange={() => showContent()} />
                            <span style={{ 'margin-left': '10px' }}>显示加载内容</span>
                        </div>
                        <br/>
                        <div>
                            <Skeleton placeholder={<Skeleton.Avatar />} loading={loading()}>
                                <Avatar style={{color: "blue", 'margin-bottom': '10px'}}>U</Avatar>
                            </Skeleton>
                            <br/>
                            <Skeleton width="150px" height="150px" placeholder={<Skeleton.Image />} loading={loading()}>
                                <Image
                                    src="https://cqb325.gitee.io/cui-solid-doc/logo.svg"
                                    width="150px"
                                    height="150px"
                                    alt="avatar"
                                />
                            </Skeleton>
                            <br/>
                            <Skeleton
                                style={{ width: '80px' }}
                                placeholder={<Skeleton.Title style={{ 'margin-bottom': '10px' }} />}
                                loading={loading()}
                            >
                                <h4 style={{ 'margin-bottom': 0 }}>CUI/SolidJs</h4>
                            </Skeleton>
                            <br/>
                            <Skeleton width="240px" placeholder={<Skeleton.Paragraph rows={2} />} loading={loading()}>
                                <p style={{width: '240px'}}>精心打磨每一个组件的用户体验，从用户的角度考虑每个组件的使用场景。</p>
                            </Skeleton>
                            <br/>
                            <Skeleton placeholder={<Skeleton.Button />} loading={loading()}>
                                <Button>Button</Button>
                            </Skeleton>
                        </div>

                        <Divider align="left"><Text type="primary">基础用法</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            基础用法
                        </Paragraph>
                        <DemoCode data={codes['skeleton_base']}/>
                    </Card>
                </Space>


                <Space id="skeleton_img" dir="v">
                    <Card bordered>
                        <Skeleton placeholder={<div>
                            <Skeleton.Image width="200px" height="150px"/>
                            <Skeleton.Title width="120px" style={{ 'margin-top': '10px' }} />
                        </div>} loading={true}>
                            <img
                                src="https://cqb325.gitee.io/cui-solid-doc/logo.svg"
                                height="150px"
                                alt="avatar"
                            />
                            <h4>CUI/SolidJs</h4>
                        </Skeleton>

                        <Divider align="left"><Text type="primary">图片</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            图片
                        </Paragraph>
                        <DemoCode data={codes['skeleton_img']}/>
                    </Card>
                </Space>



                <Space id="skeleton_combine" dir="v">
                    <Card bordered>
                        <Skeleton placeholder={<div style={{display: 'flex', "align-items": 'flex-start'}}>
                                <Skeleton.Avatar shape="square" style={{ 'margin-right': '12px' }} />
                                <div>
                                    <Skeleton.Title width="120px" style={{ 'margin-bottom': '12px', 'margin-top': '12px' }} />
                                    <Skeleton.Paragraph width={['240px', '220px', '180px']} rows={3} />
                                </div>
                            </div>} loading={true}>
                            <div style={{display: 'flex', "align-items": 'flex-start'}}>
                                <Avatar style={{ 'margin-right': '12px' }}>
                                    UI
                                </Avatar>
                                <div>
                                    <h3>Semi UI</h3>
                                    <p>Hi, Bytedance dance dance.</p>
                                    <p>Hi, Bytedance dance dance.</p>
                                    <p>Hi, Bytedance dance dance.</p>
                                </div>
                            </div>
                        </Skeleton>

                        <Divider align="left"><Text type="primary">头像效果</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            头像效果
                        </Paragraph>
                        <DemoCode data={codes['skeleton_combine']}/>
                    </Card>
                </Space>


                <Space id="skeleton_active" dir="v">
                    <Card bordered>
                        <Skeleton active placeholder={<Row>
                            <Col flex="1 1 0%">
                                <Row>
                                    <Col flex="0">
                                        <Skeleton.Avatar style={{ 'margin-right': "16px"}}/>
                                    </Col>
                                    <Col flex="1 1 0%">
                                        <Skeleton.Title width="20%" />
                                        <Skeleton.Item width="50%" />
                                    </Col>
                                </Row>
                                <Skeleton.Item width="80%" />
                                <Skeleton.Item inline width="8%" style={{ 'margin-right': "16px"}}/>
                                <Skeleton.Item inline width="8%" style={{ 'margin-right': "16px"}}/>
                                <Skeleton.Item inline width="8%" style={{ 'margin-right': "16px"}}/>
                            </Col>
                            <Col flex="0">
                                <Skeleton.Image width="280px" height="140px" />
                            </Col>
                        </Row>} loading={true}>
                            <div style={{display: 'flex', "align-items": 'flex-start'}} />
                        </Skeleton>

                        <Divider align="left"><Text type="primary">动画效果</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            动画效果
                        </Paragraph>
                        <DemoCode data={codes['skeleton_active']}/>
                    </Card>
                </Space>

                <Space dir="v" size={24} id="comp_api">
                    <Title type="primary" heading={3}>API</Title>
                    <Space id="comp_props" dir="v">
                        <Title type="primary" heading={4}>Skeleton Props</Title>
                        <Table columns={propsColumns} data={propsData} border size="small" />
                    </Space>

                    <Space id="comp_item_props" dir="v">
                        <Title type="primary" heading={4}>Item Props</Title>
                        <Table columns={propsColumns} data={itemPropsData} border size="small" />
                    </Space>

                    <Space id="comp_avatar_props" dir="v">
                        <Title type="primary" heading={4}>Avatar Props</Title>
                        <Table columns={propsColumns} data={avatarPropsData} border size="small" />
                    </Space>

                    <Space id="comp_paragraph_props" dir="v">
                        <Title type="primary" heading={4}>Paragraph Props</Title>
                        <Table columns={propsColumns} data={paragraphPropsData} border size="small" />
                    </Space>
                </Space>
            </Space>
        </div>
        <CompAnchor data={anchorData}/>
    </>
}
