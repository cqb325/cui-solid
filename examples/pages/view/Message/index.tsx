import { message } from '@/components/Message';
import { Button } from '@/components/Button';
import { Space } from '@/components/Layout';
import { Title } from '@/components/Typography/Title';
import { Card } from '@/components/Card';
import { Divider } from '@/components/Divider';
import { Paragraph } from '@/components/Typography/Paragraph';
import { Text } from '@/components/Typography/Text';
import { createUniqueId } from 'solid-js';
import { Table } from '@/components/Table';
import { anchorData, codes, eventsData, propsData } from './config';
import { CompAnchor } from '../../common/CompAnchor';
import { eventsColumns, propsColumns } from '../../common/columns';
import { hljs, useDirective } from "../../common/hljs";
import { DemoCode } from "../../common/code";
useDirective(hljs);

export default function MessagePage () {
    return <>
        <div class='sys-ctx-main-left' use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    Message 消息提示
                </Title>
                <Space id="message_base" dir="v">
                    <Card bordered>
                        <Space dir='h'>
                            <Button type='primary' onClick={() => {
                                message.info('提示信息')
                            }}>消息</Button>
                            <Button type='primary' onClick={() => {
                                message.success('登录成功')
                            }}>成功</Button>
                            <Button type='primary' onClick={() => {
                                message.error('添加错误')
                            }}>错误</Button>
                            <Button type='primary' onClick={() => {
                                message.warning('需要数字类型')
                            }}>警告</Button>
                        </Space>
                        <Divider align="left"><Text type="primary">基础用法</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            基础用法
                        </Paragraph>
                        <DemoCode data={codes['message_base']}/>
                    </Card>
                </Space>


                <Space id="message_background" dir="v">
                    <Card bordered>
                        <Space dir='h'>
                            <Button type='primary' onClick={() => {
                                message.info({
                                    content: '提示信息',
                                    background: true
                                })
                            }}>消息</Button>
                            <Button type='primary' onClick={() => {
                                message.success({
                                    content: '登录成功',
                                    background: true
                                })
                            }}>成功</Button>
                            <Button type='primary' onClick={() => {
                                message.error({
                                    content: '添加错误',
                                    background: true,
                                })
                            }}>错误</Button>
                            <Button type='primary' onClick={() => {
                                message.warning({
                                    content: '需要数字类型',
                                    background: true,
                                })
                            }}>警告</Button>
                        </Space>
                        <Divider align="left"><Text type="primary">背景色</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            配置参数 background 可以显示背景色
                        </Paragraph>
                        <DemoCode data={codes['message_background']}/>
                    </Card>
                </Space>


                <Space id="message_close" dir="v">
                    <Card bordered>
                        <Space dir='h'>
                            <Button type='primary' onClick={() => {
                                message.info({
                                    content: '可关闭message',
                                    background: true,
                                    closeable: true,
                                    duration: 0
                                })
                            }}>可关闭</Button>
                        </Space>
                        <Divider align="left"><Text type="primary">可关闭</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            配置参数 closeable 可关闭消息
                        </Paragraph>
                        <DemoCode data={codes['message_close']}/>
                    </Card>
                </Space>


                <Space id="message_loading" dir="v">
                    <Card bordered>
                        <Space dir='h'>
                            <Button type='primary' onClick={() => {
                                const key = createUniqueId();
                                message.info({
                                    key,
                                    content: 'Loading...',
                                    background: true,
                                    loading: true,
                                    duration: 0
                                })

                                setTimeout(() => {
                                    message.close(key);
                                }, 4000)
                            }}>加载</Button>
                        </Space>
                        <Divider align="left"><Text type="primary">加载中</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            配置参数 loading 显示加载中的消息， message可通过key关闭消息
                        </Paragraph>
                        <DemoCode data={codes['message_loading']}/>
                    </Card>
                </Space>


                <Space dir="v" size={24} id="comp_api">
                    <Title type="primary" heading={3}>API</Title>
                    <Space id='comp_props' dir="v">
                        <Title type="primary" heading={4}>Message Props</Title>
                        <Table columns={propsColumns} data={propsData} border size='small' />
                    </Space>

                    <Space id='comp_events' dir="v">
                        <Title type="primary" heading={4}>Events</Title>
                        <Table columns={eventsColumns} data={eventsData} border size='small' />
                    </Space>
                </Space>
            </Space>
        </div>

        <CompAnchor data={anchorData}/>
    </>
}