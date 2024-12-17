import { Button, Card, Divider, Input, Link, Paragraph, Space, Text, Title } from "@/components";
import { Popconfirm } from "@/components/Popconfirm";
import { FeatherHelpCircle } from "cui-solid-icons/feather";
import { createSignal } from "solid-js";

export default function PopconfirmPage () {
    const [visible, setVisible] = createSignal(false);

  return <div class="sys-ctx-main-left">
            <Space dir="v" size={32}>
                <Title heading={2}>
                    Popconfirm 气泡确认框
                </Title>
                <Space id="qrcode_base" dir="v">
                    <Card bordered>
                        <Popconfirm icon={<FeatherHelpCircle color="var(--cui-color-warning)"/>} arrow title="Are you sure?" content="content content content">
                            <Link>delete</Link>
                        </Popconfirm>
                        <Divider align="left"><Text type="primary">基础用法</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            基础用法 。
                        </Paragraph>
                    </Card>
                </Space>

                <Space dir="v">
                    <Card bordered>
                        <Popconfirm icon={<FeatherHelpCircle color="var(--cui-color-warning)"/>} arrow
                            title="Are you sure?" content="content content content" okType="error">
                            <Link>按钮类型</Link>
                        </Popconfirm>
                        <Divider align="left"><Text type="primary">按钮类型</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            按钮类型 。
                        </Paragraph>
                    </Card>
                </Space>

                <Space id="qrcode_async" dir="v">
                    <Card bordered>
                        <Popconfirm icon={<FeatherHelpCircle color="var(--cui-color-warning)"/>} arrow
                            title="Are you sure?" content="content content content" onOk={async () => {
                                return false;
                            }}>
                            <Link>阻止关闭</Link>
                        </Popconfirm>
                        <Divider align="left"><Text type="primary">阻止关闭</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            阻止关闭 。
                        </Paragraph>
                    </Card>
                </Space>

                <Space id="qrcode_async" dir="v">
                    <Card bordered>
                        <Popconfirm icon={<FeatherHelpCircle color="var(--cui-color-warning)"/>} arrow
                            title="Are you sure?" content="content content content" onOk={async () => {
                                return await new Promise((resolve) => {
                                    setTimeout(() => {
                                        resolve(true);
                                    }, 2000);
                                })
                            }}>
                            <Link>异步关闭</Link>
                        </Popconfirm>
                        <Divider align="left"><Text type="primary">异步关闭</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            异步关闭 。
                        </Paragraph>
                    </Card>
                </Space>

                <Space id="qrcode_async" dir="v">
                    <Card bordered>
                        <Popconfirm disabled icon={<FeatherHelpCircle color="var(--cui-color-warning)"/>} arrow
                            title="Are you sure?" content="content content content" onOk={async () => {
                                return await new Promise((resolve) => {
                                    setTimeout(() => {
                                        resolve(true);
                                    }, 2000);
                                })
                            }}>
                            <Link>禁用</Link>
                        </Popconfirm>
                        <Divider align="left"><Text type="primary">禁用</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            禁用 。
                        </Paragraph>
                    </Card>
                </Space>

                <Space id="qrcode_hide_cancel" dir="v">
                    <Card bordered>
                        <Popconfirm showCancel={false} icon={<FeatherHelpCircle color="var(--cui-color-error)"/>}
                            arrow align="topLeft"
                            title="Are you sure?" content="content content content">
                            <Link>隐藏取消按钮</Link>
                        </Popconfirm>
                        <Divider align="left"><Text type="primary">隐藏取消按钮</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            隐藏取消按钮 。
                        </Paragraph>
                    </Card>
                </Space>


                <Space id="qrcode_hide_cancel" dir="v">
                    <Card bordered>
                        <Popconfirm visible={[visible, setVisible]} icon={<FeatherHelpCircle color="var(--cui-color-error)"/>}
                            arrow align="topLeft" onOk={async () => {
                                await new Promise((resolve) => {
                                    setTimeout(() => {
                                        resolve(true);
                                        setVisible(false);
                                    }, 2000);
                                })
                            }}
                            title="Are you sure?" content="content content content">
                            <></>
                        </Popconfirm>
                        <Button onClick={() => {
                            setVisible(true);
                        }
                        }>控制</Button>
                        <Divider align="left"><Text type="primary">控制</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            控制 。popconfirm 事件注册在nextSiblingElement上。
                        </Paragraph>
                    </Card>
                </Space>
            </Space>
        </div>
}
