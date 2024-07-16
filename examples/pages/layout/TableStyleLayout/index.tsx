import { Space } from "@/components/Layout"
import { Title } from "@/components/Typography/Title"
import { Card } from "@/components/Card"
import { Divider } from "@/components/Divider"
import { Text } from "@/components/Typography/Text"
import { Paragraph } from "@/components/Typography/Paragraph"
import { Table } from "@/components/Table"
import { anchorData, codes, propsData, slotsData } from "./config"
import { CompAnchor } from "../../common/CompAnchor"
import { Slot } from "@/components/inner/Slot"
import { propsColumns, slotsColumns } from "../../common/columns"
import { hljs, useDirective } from "../../common/hljs";
import { DemoCode } from "../../common/code";
import { TableStyleLayout, TableStyleLayoutRow, TableStyleLayoutLabel, TableStyleLayoutValue, TableStyleLayoutCol } from "@/components/TableStyleLayout"
import { Form, FormItem, Input, message, useForm } from "@/components"
useDirective(hljs);

export default function TSLPage () {
    const columns = [
            { type: 'index', title: '序号', width: 68 },
            { name: 'name', title: '字段名称' },
            { name: 'type', title: '字段类型' }
    ];

    interface UserData {
        userName: string,
        department: string
    }

    const form = useForm<UserData>({
        data: {
            userName: '',
            department: ''
        },
        validation: {
            userName: [
                { required: true, message: '请输入用户名', trigger: 'blur' }
            ],
            department: [
                { required: true, message: '请输入部门', trigger: 'blur' }
            ],
        },
        message: {
        }
    });

    return <>
        <div class="sys-ctx-main-left" use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    TableStyleLayout 类表格布局
                </Title>
                <Space id="split_base" dir="v">
                    <Card bordered>
                        <TableStyleLayout labelWidth={100}>
                            <TableStyleLayoutRow>
                                <TableStyleLayoutLabel>用户名</TableStyleLayoutLabel>
                                <TableStyleLayoutValue>xxxxx</TableStyleLayoutValue>
                                <TableStyleLayoutLabel>部门</TableStyleLayoutLabel>
                                <TableStyleLayoutValue>xxxxx</TableStyleLayoutValue>
                                <TableStyleLayoutLabel>联系方式</TableStyleLayoutLabel>
                                <TableStyleLayoutValue>xxxxx</TableStyleLayoutValue>
                            </TableStyleLayoutRow>
                            <TableStyleLayoutRow>
                                <TableStyleLayoutCol flex={0.333}>
                                    <TableStyleLayoutLabel>职位</TableStyleLayoutLabel>
                                    <TableStyleLayoutValue>xxxxx</TableStyleLayoutValue>
                                </TableStyleLayoutCol>
                                <TableStyleLayoutCol flex={2 / 3}>
                                    <TableStyleLayoutLabel>职责</TableStyleLayoutLabel>
                                    <TableStyleLayoutValue>xxxxx</TableStyleLayoutValue>
                                </TableStyleLayoutCol>
                            </TableStyleLayoutRow>
                            <TableStyleLayoutRow>
                                <TableStyleLayoutLabel verticalAlign="start">字段信息</TableStyleLayoutLabel>
                                <TableStyleLayoutValue>
                                    <Table columns={columns} data={[]} border size="small"/>
                                </TableStyleLayoutValue>
                            </TableStyleLayoutRow>
                        </TableStyleLayout>
                        <Divider align="left"><Text type="primary">基础用法</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            基础用法。
                        </Paragraph>
                        <DemoCode data={codes['split_base']}/>
                    </Card>
                </Space>


                <Space id="split_form" dir="v">
                    <Card bordered>
                        <Form form={form} errorTransfer errorAlign="bottomLeft">
                            <TableStyleLayout labelWidth={100}>
                                <TableStyleLayoutRow>
                                    <TableStyleLayoutLabel required>用户名</TableStyleLayoutLabel>
                                    <TableStyleLayoutValue>
                                        <FormItem name="userName">
                                            <Input placeholder="用户名"/>
                                        </FormItem>
                                    </TableStyleLayoutValue>
                                    <TableStyleLayoutLabel required>部门</TableStyleLayoutLabel>
                                    <TableStyleLayoutValue>
                                        <FormItem name="department">
                                            <Input placeholder="用户名"/>
                                        </FormItem>
                                    </TableStyleLayoutValue>
                                    <TableStyleLayoutLabel>联系方式</TableStyleLayoutLabel>
                                    <TableStyleLayoutValue>xxxxx</TableStyleLayoutValue>
                                </TableStyleLayoutRow>
                            </TableStyleLayout>
                        </Form>
                        <Divider align="left"><Text type="primary">表单用法</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            基础用法。
                        </Paragraph>
                        <DemoCode data={codes['split_base']}/>
                    </Card>
                </Space>
            </Space>
        </div>
    </>
}
