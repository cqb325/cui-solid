import { For } from "solid-js";
import { Avatar, BothSide, Button, Card, Divider, Image, Link, Paragraph, Space, Text, Title } from "@/components";
import { hljs, useDirective } from "../../common/hljs";
useDirective(hljs);
import img from './card-cover.webp';
import avatar from '../../../assets/images/avatar.png'

export default () => {
    return <>
        <div class="sys-ctx-main-left" use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    Card 卡片
                </Title>

                <Space id="list_base" dir="v">
                    <Card bordered>
                        <Card title={
                            <BothSide>
                                <Space align="center">
                                    <Avatar src={avatar}/>
                                    <Space dir="v" size={2}>
                                        <Text strong>案例</Text>
                                        <Text type="Secondary">描述</Text>
                                    </Space>
                                </Space>
                                <Link>More</Link>
                            </BothSide>
                        } cover={<Image src={img}/>} bordered style={{'max-width': '300px'}} footer={
                            <Space justify="end">
                                <Button type="text">文字提示</Button>
                                <Button type="primary">开始使用</Button>
                            </Space>}>
                            卡片内容
                        </Card>


                        <Card title="title" bordered size="small">
                            <p>内容</p>
                            <p>内容</p>
                            <p>内容</p>
                            <p>内容</p>
                        </Card>


                        <Card title="title" bordered size="large">
                            <p>内容</p>
                            <p>内容</p>
                            <p>内容</p>
                            <p>内容</p>
                        </Card>

                        <Divider align="left"><Text type="primary">基础用法</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            默认列表, <Text code>head</Text> <Text code>foot</Text> 使用 <Text code>Slot</Text> 名称为 <Text code>head</Text>、<Text code>foot</Text>
                        </Paragraph>
                    </Card>
                </Space>
            </Space>
        </div>
    </>
}
