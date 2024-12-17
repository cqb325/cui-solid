import { createSignal } from "solid-js";
import { Button } from "@/components/Button";
import { Upload } from "@/components/FormElements/Upload";
import { Space } from "@/components/Layout";
import { Title } from "@/components/Typography/Title";
import './style.less'
import { Card } from "@/components/Card";
import { Divider } from "@/components/Divider";
import { Paragraph } from "@/components/Typography/Paragraph";
import { Text } from "@/components/Typography/Text";
import { Table } from "@/components/Table";
import { eventsColumns, propsColumns } from "../../common/columns";
import { anchorData, codes, eventsData, propsData } from "./config";
import { CompAnchor } from "../../common/CompAnchor";
import { hljs, useDirective } from "../../common/hljs";
import { DemoCode } from "../../common/code";
import { FeatherPlus, FeatherUpload } from "cui-solid-icons/feather";
import { F7CloudUploadFill } from "cui-solid-icons/f7";
useDirective(hljs);

export default function UploadPage () {
    const [data, setData] = createSignal({
        field: '1'
    });
    const headers = {'x-token': '123456'};
    let upload: any;
    return <>
        <div class="sys-ctx-main-left" use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    Upload 上传
                </Title>
                <Space id="upload_base" dir="v">
                    <Card bordered>
                        <Upload action="https://cqb325.gitee.io/cui-solid-doc/" name="file"
                            onProgress={(e: any, file: any, fileList: any[]) => {
                                console.log(file);
                            }} onSuccess={() => {
                                console.log('success');
                            }} onError={(e: any) => {
                                console.log(e);
                            }}>
                            <Button icon={<FeatherUpload />} type="primary">Upload Files</Button>
                        </Upload>
                        <Divider align="left"><Text type="primary">基础用法</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        基础用法
                        </Paragraph>
                        <DemoCode data={codes['upload_base']}/>
                    </Card>
                </Space>



                <Space id="upload_defaultList" dir="v">
                    <Card bordered>
                        <Upload action="https://cqb325.gitee.io/cui-solid-doc/" name="file" accept="jpg"
                            defaultFileList={[
                                {
                                    name: 'test.png',
                                    status: 'finished',
                                    size: 71183,
                                    preview: true,
                                    url: 'https://cqb325.gitee.io/cui-solid-doc/logo.svg',
                                }
                            ]}
                            onProgress={(e: any, file: any, fileList: any[]) => {
                                console.log(file);
                            }} onSuccess={() => {
                                console.log('success');
                            }} onError={(e: any) => {
                                console.log(e);
                            }}>
                            <Button icon={<FeatherUpload />} type="primary">Upload Files</Button>
                        </Upload>
                        <Divider align="left"><Text type="primary">默认列表</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        defaultFileList 可以初始化默认的列表
                        </Paragraph>
                        <DemoCode data={codes['upload_defaultList']}/>
                    </Card>
                </Space>



                <Space id="upload_drag" dir="v">
                    <Card bordered>
                        <Space dir="v">
                            <Upload action="https://cqb325.gitee.io/cui-solid-doc/" name="file" type="drag" data={data()} headers={headers} accept="jpg">
                                <div class="cm-upload-drag-wrap">
                                    <F7CloudUploadFill size={32} color="#1890ff" />
                                    <p>Click or drag files here to upload</p>
                                </div>
                            </Upload>
                        </Space>
                        <Divider align="left"><Text type="primary">拖拽</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        type="drag" 可以支持拖拽上传，
                        上传的数据使用data传入， 自定义请求头通过 headers 参数传输
                        </Paragraph>
                        <DemoCode data={codes['upload_drag']}/>
                    </Card>
                </Space>


                <Space id="upload_pictures" dir="v">
                    <Card bordered>
                        <Space dir="v">
                            <Upload action="https://cqb325.gitee.io/cui-solid-doc/" listType="picture" name="file" data={data()} headers={headers} accept=".jpg,.jpeg" ref={upload}
                                defaultFileList={[
                                    {
                                        name: 'test.png',
                                        status: 'finished',
                                        size: 71183,
                                        preview: true,
                                        url: 'https://cqb325.gitee.io/cui-solid-doc/logo.svg',
                                    }
                                ]}>
                                    <FeatherPlus size={24}/>
                            </Upload>
                        </Space>
                        <Divider align="left"><Text type="primary">照片墙</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        listType="picture" 文件列表以照片墙的形式展示
                        </Paragraph>
                        <DemoCode data={codes['upload_pictures']}/>
                    </Card>
                </Space>

                <Space id="upload_getList" dir="v">
                    <Card bordered>
                        <Upload action="https://cqb325.gitee.io/cui-solid-doc/" name="file" data={data()} headers={headers} accept="jpg" ref={upload}
                            defaultFileList={[
                                {
                                    name: 'test.png',
                                    status: 'finished',
                                    size: 71183,
                                    preview: true,
                                    url: 'https://cqb325.gitee.io/cui-solid-doc/logo.svg',
                                }
                            ]}
                            onProgress={(e: any, file: any, fileList: any[]) => {
                                console.log(file);
                            }} onSuccess={() => {
                                console.log('success');
                            }} onError={(e: any) => {
                                console.log(e);
                            }}>
                                <Button icon={<FeatherUpload />} type="primary">Upload Files</Button>
                        </Upload>

                        <Button type="primary" onClick={() => {
                            console.log(upload.getFileList());
                        }}>获取文件列表</Button>

                        <Divider align="left"><Text type="primary">获取列表</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                        通过ref获取upload的引用， 可调用 getFileList 获取文件列表
                        </Paragraph>
                        <DemoCode data={codes['upload_getList']}/>
                    </Card>
                </Space>


                <Space dir="v" size={24} id="comp_api">
                    <Title type="primary" heading={3}>API</Title>
                    <Space id="comp_props" dir="v">
                        <Title type="primary" heading={4}>TimePicker Props</Title>
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
