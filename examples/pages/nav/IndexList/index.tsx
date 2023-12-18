import { hljs, useDirective } from "../../common/hljs";
import { DemoCode } from "../../common/code";
import { propsColumns } from "../../common/columns";
import { anchorData, codes, itemPropsData, propsData } from "./config";
import { CompAnchor } from "../../common/CompAnchor";
import { Space } from "@/components/Layout";
import { Title } from "@/components/Typography/Title";
import { Card } from "@/components/Card";
import { Divider } from "@/components/Divider";
import { Paragraph } from "@/components/Typography/Paragraph";
import { Text } from "@/components/Typography/Text";
import { Table } from "@/components/Table";
import { IndexList } from "@/components/IndexList";
import { Checkbox } from "@/components/FormElements/Checkbox";
useDirective(hljs);
export default function ContactsPage () {
    const data = [{
        id: 'A', name: '安徽',
        children: [{name: '合肥', id: '1'},{name: '芜湖', id: '2'},{name: '蚌埠', id: '3'},{name: '淮南', id: '4'},{name: '马鞍山', id: '5'}
        ,{name: '淮北', id: '6'},{name: '铜陵', id: '7'},{name: '安庆', id: '8'}],
    },{
        id: 'B', name: '北京',
        children: [{name: '北京市', id: '北京市'}],
    }, {
        id: 'C', name: '重庆',
        children: [{name: '重庆市', id: '重庆市'}]
    }, {
        id: 'F', name: '福建',
        children: [{name: '福州市', id: '福州市'}, {name: '厦门市', id: '厦门市'}, {name: '莆田市', id: '莆田市'}, {name: '三明市', id: '三明市'}]
    }, {
        id: 'G', name: '甘肃',
        children: [{name: '兰州市', id: '兰州市'}, {name: '嘉峪关市', id: '嘉峪关市'}, {name: '金昌市', id: '金昌市'}, {name: '白银市', id: '白银市'}]
    }];
    return <>
        <div class='sys-ctx-main-left' use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    IndexList 索引列表
                </Title>
                <Space id="indexlist_base" dir="v">
                    <Card bordered>
                        <div style={{height: "500px"}}>
                            <IndexList data={data}></IndexList>
                        </div>
                        <Divider align="left"><Text type="primary">基础用法</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            基础用法
                        </Paragraph>
                        <DemoCode data={codes['indexlist_base']}/>
                    </Card>
                </Space>

                <Space id="indexlist_selectable" dir="v">
                    <Card bordered>
                        <div style={{height: "500px"}}>
                            <IndexList data={data} selectable onChange={(v) => {
                                console.log(v);
                            }}></IndexList>
                        </div>
                        <Divider align="left"><Text type="primary">可选择</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            添加selectable属性可以对选项进行选择
                        </Paragraph>
                        <DemoCode data={codes['indexlist_selectable']}/>
                    </Card>
                </Space>

                <Space id="indexlist_border" dir="v">
                    <Card bordered>
                        <div style={{height: "500px"}}>
                            <IndexList data={data} border></IndexList>
                        </div>
                        <Divider align="left"><Text type="primary">边框</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            添加 border 属性渲染边框
                        </Paragraph>
                        <DemoCode data={codes['indexlist_border']}/>
                    </Card>
                </Space>

                <Space id="indexlist_custom" dir="v">
                    <Card bordered>
                        <div style={{height: "500px"}}>
                            <IndexList data={data} selectable renderItem={(item: any, active: boolean) => {
                                return <Space dir="h">
                                    <Checkbox checked={active}/>
                                    <div style={{flex: 1}}>{item.name}</div>
                                    <span style={{"padding-right": '5px'}}>xxxxxxxxx</span></Space>
                            }} onChange={(v) => {
                                console.log(v);
                            }}></IndexList>
                        </div>
                        <Divider align="left"><Text type="primary">自定义渲染</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            通过 renderItem 方法可以自定义选项的渲染方式
                        </Paragraph>
                        <DemoCode data={codes['indexlist_custom']}/>
                    </Card>
                </Space>

                <Space dir="v" size={24} id="comp_api">
                    <Title type="primary" heading={3}>API</Title>
                    <Space id='comp_props' dir="v">
                        <Title type="primary" heading={4}>IndexList Props</Title>
                        <Table columns={propsColumns} data={propsData} border size='small' />
                    </Space>

                    <Space id='comp_item_props' dir="v">
                        <Title type="primary" heading={4}>data Props</Title>
                        <Table columns={propsColumns} data={itemPropsData} border size='small' />
                    </Space>
                </Space>
            </Space>
        </div>

        <CompAnchor data={anchorData}/>
    </>
}