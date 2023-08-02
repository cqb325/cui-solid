import { Breadcrumb } from "@/components/Breadcrumb";
import { View, Space } from "@/components/Layout";
import { Icon } from "@/components/Icon";
import { Title } from "@/components/Typography/Title";
import { Card } from "@/components/Card";
import { Divider } from "@/components/Divider";
import { Paragraph } from "@/components/Typography/Paragraph";
import { Text } from "@/components/Typography/Text";
import { Table } from "@/components/Table";
import { anchorData, codes, itemPropsData, propsData } from "./config";
import { CompAnchor } from "../../common/CompAnchor";
import { propsColumns } from "../../common/columns";
import { hljs, useDirective } from "../../common/hljs";
import { DemoCode } from "../../common/code";
useDirective(hljs);

function BreadcrumbDemo () {
    return <>
        <div class='sys-ctx-main-left' use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    Breadcrumb 面包屑
                </Title>
                <Space id="breadcrumb_base" dir="v">
                    <Card bordered>
                        <Breadcrumb>
                            <Breadcrumb.Item>home</Breadcrumb.Item>
                            <Breadcrumb.Item>dashboard</Breadcrumb.Item>
                        </Breadcrumb>
                        <Divider align="left"><Text type="primary">基础用法</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            最基础的用法，通过设置link属性添加链接。
                        </Paragraph>
                        <DemoCode data={codes['breadcrumb_base']}/>
                    </Card>
                </Space>

                <Space id="breadcrumb_icon" dir="v">
                    <Card bordered>
                        <Breadcrumb>
                            <Breadcrumb.Item icon={<Icon name='anchor' size={12}/>}>首页</Breadcrumb.Item>
                            <Breadcrumb.Item icon={<Icon name='dashboard' size={12}/>} link='#/nav/breadcrumb'>面板</Breadcrumb.Item>
                            <Breadcrumb.Item>管理</Breadcrumb.Item>
                        </Breadcrumb>
                        <Divider align="left"><Text type="primary">带图标</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            可自定义每项的内容，比如带有一个图标
                        </Paragraph>
                        <DemoCode data={codes['breadcrumb_icon']}/>
                    </Card>
                </Space>


                <Space id="breadcrumb_sep" dir="v">
                    <Card bordered>
                        <Breadcrumb separator=">">
                            <Breadcrumb.Item>首页</Breadcrumb.Item>
                            <Breadcrumb.Item>面板</Breadcrumb.Item>
                            <Breadcrumb.Item>管理</Breadcrumb.Item>
                        </Breadcrumb>
                        <Divider align="left"><Text type="primary">分隔符</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            通过设置 <Text code>separator</Text> 属性来自定义分隔符，比如 <Text code>&gt;</Text> 
                        </Paragraph>
                        <DemoCode data={codes['breadcrumb_sep']}/>
                    </Card>
                </Space>


                <Space dir="v" size={24} id="comp_api">
                    <Title type="primary" heading={3}>API</Title>
                    <Space id='comp_props' dir="v">
                        <Title type="primary" heading={4}>Breadcrumb Props</Title>
                        <Table columns={propsColumns} data={propsData} border size='small' />
                    </Space>

                    <Space id='comp_item_props' dir="v">
                        <Title type="primary" heading={4}>Breadcrumb.Item Props</Title>
                        <Table columns={propsColumns} data={itemPropsData} border size='small' />
                    </Space>
                </Space>
            </Space>
        </div>

        <CompAnchor data={anchorData}/>
    </>
}

export default BreadcrumbDemo;