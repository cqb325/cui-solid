import { AvatarList } from "@/components/AvatarList";
import { Card } from "@/components/Card";
import { Divider } from "@/components/Divider";
import { Space } from "@/components/Layout";
import { Table } from "@/components/Table";
import { Paragraph } from "@/components/Typography/Paragraph";
import { Text } from "@/components/Typography/Text";
import { Title } from "@/components/Typography/Title";

import { propsData, anchorData, dataData, codes } from "./config";

import img1 from './1.png';
import img2 from './2.png';
import img3 from './3.png';
import img4 from './4.png';
import { CompAnchor } from "../../common/CompAnchor";
import { Avatar } from "@/components/Avatar";
import { propsColumns } from "../../common/columns";
import { hljs, useDirective } from "../../common/hljs";
import { DemoCode } from "../../common/code";
useDirective(hljs);

export default function AvatarListPage () {
    return <>
        <div class="sys-ctx-main-left" use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    AvatarList 头像列表
                </Title>
                <Space id="avatar_base" dir="v">
                    <Card bordered>
                        <Space dir="h" align="center">
                            <AvatarList>
                                <Avatar asProps title="头像1" src={img1}/>
                                <Avatar asProps title="头像2" src={img2}/>
                                <Avatar asProps title="头像3" src={img3}/>
                                <Avatar asProps title="头像4" src={img4}/>
                            </AvatarList>
                        </Space>
                        <Divider align="left"><Text type="primary">基础用法</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            基础用法
                        </Paragraph>
                        <DemoCode data={codes['avatar_base']}/>
                    </Card>
                </Space>

                <Space id="avatar_max" dir="v">
                    <Card bordered>
                        <Space dir="h" align="center">
                            <AvatarList max={3} excessStyle={{'background-color': 'rgb(253, 227, 207)', color: 'rgb(245, 106, 0)'}}>
                                <Avatar asProps title="头像1" src={img1}/>
                                <Avatar asProps title="头像2" src={img2}/>
                                <Avatar asProps title="头像3" src={img3}/>
                                <Avatar asProps title="头像4" src={img4}/>
                            </AvatarList>
                        </Space>
                        <Divider align="left"><Text type="primary">最大显示数</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            设置属性 <Text code>max</Text> 可以指定最多显示几个头像，超出后会显示额外数目。
                        </Paragraph>
                        <DemoCode data={codes['avatar_max']}/>
                    </Card>
                </Space>

                <Space dir="v" size={24} id="comp_api">
                    <Title type="primary" heading={3}>API</Title>
                    <Space id="comp_props" dir="v">
                        <Title type="primary" heading={4}>AvatarList Props</Title>
                        <Table columns={propsColumns} data={propsData} border size="small" />
                    </Space>

                    <Space id="data_props" dir="v">
                        <Title type="primary" heading={4}>data Props</Title>
                        <Table columns={propsColumns} data={dataData} border size="small" />
                    </Space>
                </Space>
            </Space>
        </div>

        <CompAnchor data={anchorData}/>
    </>
}
