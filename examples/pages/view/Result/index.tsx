import { Button, Card, Result, Space, Text, Title } from "@/components";
import { F7XmarkCircleFill } from "cui-solid-icons/f7";

export default function ResultPage () {
    return <>
        <div class="sys-ctx-main-left">
            <Space dir="v" size={32}>
                <Title heading={2}>
                    Result 结果
                </Title>
                <Space id="qrcode_base" dir="v">
                    <Card bordered>
                        <Result status="error" title="提交失败" subTitle="请核对并修改以下信息后再提交"
                        extra={<Space>
                            <Button>查看原因</Button>
                            <Button>返 回</Button>
                        </Space>}
                        desc={<Space dir="v">
                            <Text type="secondary"><F7XmarkCircleFill color="red"/> 请将表单信息填写完整</Text>
                            <Text type="secondary"><F7XmarkCircleFill color="red"/> 请将表单信息填写完整</Text>
                        </Space>} />
                    </Card>
                </Space>

                <Space id="qrcode_info" dir="v">
                    <Card bordered>
                        <Result status="info" title="信息已提交"
                        extra={<Space>
                            <Button type="primary">返 回</Button>
                        </Space>}/>
                    </Card>
                </Space>


                <Space id="qrcode_success" dir="v">
                    <Card bordered>
                        <Result status="success" title="订单提交成功"
                        extra={<Space>
                            <Button type="primary">查看订单</Button>
                            <Button type="primary">返回列表</Button>
                        </Space>}/>
                    </Card>
                </Space>

                <Space id="qrcode_warning" dir="v">
                    <Card bordered>
                        <Result status="warning" title="您的操作可能存在安全风险"
                        extra={<Space>
                            <Button type="primary">查看问题</Button>
                            <Button type="primary">返 回</Button>
                        </Space>}/>
                    </Card>
                </Space>
            </Space>
        </div>
    </>
}
