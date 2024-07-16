import { Modal, modal } from "@/components/Modal"
import { Button } from "@/components/Button"
import { createSignal } from "solid-js"
import { Space } from "@/components/Layout";
import { Title } from "@/components/Typography/Title";
import { Card } from "@/components/Card";
import { Divider } from "@/components/Divider";
import { Text } from "@/components/Typography/Text";
import { Paragraph } from "@/components/Typography/Paragraph";
import { Table } from "@/components/Table";
import { eventsColumns, propsColumns } from "../../common/columns";
import { anchorData, codes, eventsData, propsData } from "./config";
import { CompAnchor } from "../../common/CompAnchor";
import { hljs, useDirective } from "../../common/hljs";
import { DemoCode } from "../../common/code";
useDirective(hljs);

export default function ModalPage () {
    const [visible, setVisible] = createSignal(false);
    const [visible2, setVisible2] = createSignal(false);
    const [visible3, setVisible3] = createSignal(false);
    const [visible4, setVisible4] = createSignal(false);
    const [visible5, setVisible5] = createSignal(false);
    const [visible6, setVisible6] = createSignal(false);
    const [visible7, setVisible7] = createSignal(false);
    const [visible8, setVisible8] = createSignal(false);
    const [visible9, setVisible9] = createSignal(false);
    const [fullScreen, setFullScreen] = createSignal(false);

    return <>
        <div class="sys-ctx-main-left" use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    Modal 模态对话框
                </Title>
                <Space id="modal_base" dir="v">
                    <Card bordered>
                        <Button type="primary" onClick={() => {
                            setVisible(true);
                        }}>打开</Button>
                        <Modal title="提示" visible={[visible, setVisible]} footerAlign="end">
                            <div>modal 内容</div>
                            <div>modal 内容</div>
                            <div>modal 内容</div>
                            <div>modal 内容</div>
                        </Modal>
                        <Divider align="left"><Text type="primary">基础用法</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            <Text code>visible</Text> 为可控绑定参数
                        </Paragraph>
                        <DemoCode data={codes['modal_base']}/>
                    </Card>
                </Space>

                <Space id="modal_disabled" dir="v">
                    <Card bordered>
                        <Button type="primary" onClick={() => {
                            setVisible2(true);
                        }}>打开</Button>
                        <Modal disabled title="提示" visible={[visible2, setVisible2]}>
                            <div>modal 内容</div>
                            <div>modal 内容</div>
                            <div>modal 内容</div>
                            <div>modal 内容</div>
                        </Modal>
                        <Divider align="left"><Text type="primary">禁用拖拽</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            使用<Text code>disabled</Text> 参数可禁用拖拽
                        </Paragraph>
                        <DemoCode data={codes['modal_disabled']}/>
                    </Card>
                </Space>


                <Space id="modal_style" dir="v">
                    <Card bordered>
                        <Button type="primary" onClick={() => {
                            setVisible3(true);
                        }}>打开</Button>
                        <Modal title="提示" visible={[visible3, setVisible3]} defaultPosition={{top: '200px'}}>
                            <div>modal 内容</div>
                            <div>modal 内容</div>
                            <div>modal 内容</div>
                            <div>modal 内容</div>
                        </Modal>
                        <Divider align="left"><Text type="primary">自定义位置</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            使用<Text code>defaultPosition</Text> 参数可初始化位置
                        </Paragraph>
                        <DemoCode data={codes['modal_style']}/>
                    </Card>
                </Space>


                <Space id="modal_footer" dir="v">
                    <Card bordered>
                        <Button type="primary" onClick={() => {
                            setVisible4(true);
                        }}>打开</Button>
                        <Modal title="提示" visible={[visible4, setVisible4]} footer={false}>
                            <div>modal 内容</div>
                            <div>modal 内容</div>
                            <div>modal 内容</div>
                            <div>modal 内容</div>
                        </Modal>
                        <Divider align="left"><Text type="primary">影藏底部</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            设置<Text code>footer</Text> 参数为false可隐藏底部元素
                        </Paragraph>
                        <DemoCode data={codes['modal_footer']}/>
                    </Card>
                </Space>


                <Space id="modal_loading" dir="v">
                    <Card bordered>
                        <Button type="primary" onClick={() => {
                            setVisible5(true);
                        }}>打开</Button>
                        <Modal title="提示" visible={[visible5, setVisible5]} loading onOk={() => {
                            console.log('click ok');
                            setTimeout(() => {
                                setVisible5(false);
                            }, 2000);
                        }}>
                            <div>modal 内容</div>
                            <div>modal 内容</div>
                            <div>modal 内容</div>
                            <div>modal 内容</div>
                        </Modal>
                        <Divider align="left"><Text type="primary">加载中</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            设置<Text code>loading</Text> 参数，点击确定按钮变成加载中
                        </Paragraph>
                        <DemoCode data={codes['modal_loading']}/>
                    </Card>
                </Space>

                <Space id="modal_fullscreen" dir="v">
                    <Card bordered>
                        <Button type="primary" onClick={() => {
                            setVisible6(true);
                        }}>打开</Button>
                        <Modal title="提示" resetPostion visible={[visible6, setVisible6]} fullScreen={fullScreen()}>
                            <div><Button onClick={() => {
                                setFullScreen(!fullScreen());
                            }}>全屏</Button></div>
                            <div>modal 内容</div>
                            <div>modal 内容</div>
                            <div>modal 内容</div>
                            <div>modal 内容</div>
                        </Modal>
                        <Divider align="left"><Text type="primary">全屏</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            <Text code>fullScreen</Text> 属性为可控全屏属性
                        </Paragraph>
                        <DemoCode data={codes['modal_fullscreen']}/>
                    </Card>
                </Space>


                <Space id="modal_reset" dir="v">
                    <Card bordered>
                        <Button type="primary" onClick={() => {
                            setVisible7(true);
                        }}>打开</Button>
                        <Modal title="提示" resetPostion visible={[visible7, setVisible7]} fullScreen={fullScreen()}>
                            <div>modal 内容</div>
                            <div>modal 内容</div>
                            <div>modal 内容</div>
                            <div>modal 内容</div>
                        </Modal>
                        <Divider align="left"><Text type="primary">重新打开重置位置</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            设置<Text code>resetPostion</Text> 属性，拖拽后 重新打开会定位到初始化位置
                        </Paragraph>
                        <DemoCode data={codes['modal_reset']}/>
                    </Card>
                </Space>


                <Space id="modal_mask" dir="v">
                    <Card bordered>
                        <Button type="primary" onClick={() => {
                            setVisible8(true);
                        }}>打开</Button>
                        <Modal title="提示" mask={false} visible={[visible8, setVisible8]} fullScreen={fullScreen()}>
                            <div>modal 内容</div>
                            <div>modal 内容</div>
                            <div>modal 内容</div>
                            <div>modal 内容</div>
                        </Modal>
                        <Divider align="left"><Text type="primary">不显示遮罩</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            设置<Text code>mask</Text> 属性为false，将不会显示遮罩
                        </Paragraph>
                        <DemoCode data={codes['modal_mask']}/>
                    </Card>
                </Space>


                <Space id="modal_maskclose" dir="v">
                    <Card bordered>
                        <Button type="primary" onClick={() => {
                            setVisible9(true);
                        }}>打开</Button>
                        <Modal title="提示" maskClosable={false} visible={[visible9, setVisible9]} fullScreen={fullScreen()}>
                            <div>modal 内容</div>
                            <div>modal 内容</div>
                            <div>modal 内容</div>
                            <div>modal 内容</div>
                        </Modal>
                        <Divider align="left"><Text type="primary">禁用遮罩关闭</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            设置<Text code>maskClosable</Text> 属性为false，禁用遮罩点击关闭对话框功能
                        </Paragraph>
                        <DemoCode data={codes['modal_maskclose']}/>
                    </Card>
                </Space>


                <Space id="modal_instance" dir="v">
                    <Card bordered>
                        <Space dir="h">
                            <Button type="primary" onClick={() => {
                                modal.info({
                                    title: '信息',
                                    content: <div>信息</div>
                                });
                            }}>信息</Button>

                            <Button type="success" onClick={() => {
                                modal.success({
                                    title: '成功',
                                    content: <div>成功</div>
                                });
                            }}>成功</Button>

                            <Button type="warning" onClick={() => {
                                modal.warning({
                                    title: '警告',
                                    content: <div>警告</div>
                                });
                            }}>警告</Button>

                            <Button type="error" onClick={() => {
                                modal.error({
                                    title: '错误',
                                    content: <div>错误提示</div>
                                });
                            }}>错误</Button>

                            <Button type="primary" onClick={() => {
                                modal.confirm({
                                    title: '提示',
                                    loading: true,
                                    content: <div>确认信息</div>,
                                    onOk: () => {
                                        return new Promise((resolve) => {
                                            setTimeout(() => {
                                                resolve(true)
                                            }, 2000);
                                        });
                                    }
                                });
                            }}>确认</Button>
                        </Space>
                        <Divider align="left"><Text type="primary">单实例使用</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            使用modal的 方法弹出对话框，onOk回调可以返回一个true/false,来控制modal的关闭，返回true立即关闭， 返回false不关闭会将loading重置，不返回或undefined，则按照默认方式处理
                        </Paragraph>
                        <DemoCode data={codes['modal_instance']}/>
                    </Card>
                </Space>


                <Space dir="v" size={24} id="comp_api">
                    <Title type="primary" heading={3}>API</Title>
                    <Space id="comp_props" dir="v">
                        <Title type="primary" heading={4}>Modal Props</Title>
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
