import { VirtualList } from "cui-virtual-list"
import { JSXElement } from "solid-js";
import { hljs, useDirective } from "../../common/hljs";
useDirective(hljs);
import './style.less'
import { Card, Divider, Paragraph, Space, Table, Text, Title } from "@/components";
import { DemoCode } from "../../common/code";
import { anchorData, codes, propsData } from "./config";
import { propsColumns } from "../../common/columns";
import { CompAnchor } from "../../common/CompAnchor";

export const ListItem = (props: any) : JSXElement => {
    const style = {...props.style}
    return <div
      style={style}
      role="listitem"
      classList={{
        "ListItemOdd": props.index % 2 === 0,
        "ListItemEven": props.index % 2 === 1,
      }}
      ref={props.ref}
    >
      <div>Row {props.index}</div>
    </div>
}


export const ListItem2 = (props: any) : JSXElement => {
    const style = {...props.style, height: (30 + props.item) + 'px'}
    return <div
      style={style}
      role="listitem"
      classList={{
        "ListItemOdd": props.index % 2 === 0,
        "ListItemEven": props.index % 2 === 1,
      }}
      ref={props.ref}
    >
      <div>Row {props.index}</div>
    </div>
}

export const createArray = (count: number) => {
    return new Array(count).fill(true).map(() => 1 + Math.round(Math.random() * 20))
};

export default function VirtualListPage () {
    const data = createArray(1000);
    return <>
        <div class='sys-ctx-main-left' use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    Virtual List 虚拟列表
                </Title>
                <Space id="countup_base" dir="v">
                    <Card bordered>
                        <div style={{width: '300px', border: '1px solid #ccc'}}>
                            <VirtualList height={300} items={createArray(1000)} itemEstimatedSize={20}>
                                {ListItem}
                            </VirtualList>
                        </div>
                        <Divider align="left"><Text type="primary">基础用法</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            虚拟列表的基础用法。
                        </Paragraph>
                        <DemoCode data={codes['virtual_base']}/>
                    </Card>
                </Space>

                <Space id="countup_auto" dir="v">
                    <Card bordered>
                        <div style={{width: '300px', border: '1px solid #ccc'}}>
                            <VirtualList height={300} items={data} itemEstimatedSize={20}>
                                {ListItem2}
                            </VirtualList>
                        </div>
                        <Divider align="left"><Text type="primary">动态高度</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            内容动态高度
                        </Paragraph>
                        <DemoCode data={codes['countup_auto']}/>
                    </Card>
                </Space>

                <Space dir="v" size={24} id="comp_api">
                    <Title type="primary" heading={3}>API</Title>
                    <Space id='comp_props' dir="v">
                        <Title type="primary" heading={4}>VirtualList Props</Title>
                        <Table columns={propsColumns} data={propsData} border size='small' />
                    </Space>
                </Space>
            </Space>
        </div>

        <CompAnchor data={anchorData}/>
    </>
}