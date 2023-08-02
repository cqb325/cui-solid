import { Space } from "@/components/Layout/Space";
import { Avatar } from "@/components/Avatar";
import { Icon } from "@/components/Icon";
import { Title } from "@/components/Typography/Title";
import { CompAnchor } from "../../common/CompAnchor";
import { Card } from "@/components/Card";
import { Divider } from "@/components/Divider";
import { Paragraph } from "@/components/Typography/Paragraph";
import { Text } from "@/components/Typography/Text";

import img from '../../../assets/images/avatar.png'
import { Table } from "@/components/Table";
import { propsData, anchorData, eventsData, codes } from "./config";
import { eventsColumns, propsColumns } from "../../common/columns";
import { hljs, useDirective } from "../../common/hljs";
import { DemoCode } from "../../common/code";
useDirective(hljs);

function AvatarDemo () {
    const style = {
        'background-color': 'var(--cui-color-overlay-bg)',
        height: '100%',
        width: '100%',
        display: 'flex',
        'align-items': 'center',
        'justify-content': 'center',
    };
    return <>
        <div class='sys-ctx-main-left' use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    Avatar 头像
                </Title>
                <Space id="avatar_base" dir="v">
                    <Card bordered>
                        <Space dir="h" align="center">
                            <Avatar size='small' icon={<Icon name='settings'/>}></Avatar>
                            <Avatar icon={<Icon name='settings'/>}></Avatar>
                            <Avatar size='large' icon={<Icon name='settings'/>}></Avatar>
                            <Avatar size={48} icon={<Icon name='settings' size={24}/>}></Avatar>
                        </Space>
                        <Divider align="left"><Text type="primary">头像尺寸</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            通过设置 <Text code>size</Text> 可以设置图标大小,small或large
                        </Paragraph>
                        <Paragraph type="secondary" spacing='extended'>
                            <Text code>size</Text> 可以为number类型，自定义大小
                        </Paragraph>
                        <DemoCode data={codes['avatar_base']}/>
                    </Card>
                </Space>

                <Space id="avatar_shape" dir="v">
                    <Card bordered>
                        <Space dir="h" align="center">
                            <Avatar icon={<Icon name='settings'/>}></Avatar>
                            <Avatar shape="square" icon={<Icon name='settings'/>}></Avatar>
                        </Space>
                        <Divider align="left"><Text type="primary">形状</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            通过设置 <Text code>shape</Text> square为矩形头像
                        </Paragraph>
                        <DemoCode data={codes['avatar_shape']}/>
                    </Card>
                </Space>

                <Space id="avatar_type" dir="v">
                    <Card bordered>
                        <Space dir="h" align="center">
                            <Avatar icon={<Icon name='settings'/>}></Avatar>
                            <Avatar>A</Avatar>
                            <Avatar>Name</Avatar>
                            <Avatar src={img}></Avatar>
                            <Avatar style={{'background-color': 'rgb(253, 227, 207)', color: 'rgb(245, 106, 0)'}}>U</Avatar>
                            <Avatar style={{'background-color': 'rgb(135, 208, 104)'}} icon={<Icon name='settings'/>}></Avatar>
                        </Space>
                        <Divider align="left"><Text type="primary">类型</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            头像支持文字、图片和图标，可以自定义背景色和文字颜色
                        </Paragraph>
                        <DemoCode data={codes['avatar_type']}/>
                    </Card>
                </Space>

                <Space id="avatar_hover" dir="v">
                    <Card bordered>
                        <Space dir="h" align="center">
                            <Avatar size={48} icon={<Icon name='settings' size={24}/>} style={{'background-color': 'rgb(242 168 113)', color: 'rgb(245, 106, 0)'}}
                            hoverMask={<div style={style}><Icon name="camera"/></div>}></Avatar>
                        </Space>
                        <Divider align="left"><Text type="primary">遮罩</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            通过设置 <Text code>hoverMask</Text> 可以自定义悬浮遮罩
                        </Paragraph>
                        <DemoCode data={codes['avatar_hover']}/>
                    </Card>
                </Space>

                <Space dir="v" size={24} id="comp_api">
                    <Title type="primary" heading={3}>API</Title>
                    <Space id='comp_props' dir="v">
                        <Title type="primary" heading={4}>Avatar Props</Title>
                        <Table columns={propsColumns} data={propsData} border size='small' />
                    </Space>
                    <Space id='comp_events' dir="v">
                        <Title type="primary" heading={4}>Avatar Events</Title>
                        <Table columns={eventsColumns} data={eventsData} border size="small" />
                    </Space>
                </Space>
            </Space>
        </div>
        <CompAnchor data={anchorData}/>
    </>
}

export default AvatarDemo;
