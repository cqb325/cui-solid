import { Input } from "@/components/FormElements/Input";
import { Space } from "@/components/Layout";
import { Button } from "@/components/Button";
import { createSignal } from "solid-js";
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
import { Datepicker, Option, Search, Select, Spinner } from "@/components";
import { InputGroup } from "@/components/FormElements/InputGroup";
import { FeatherSearch, FeatherCopy, FeatherUser } from "cui-solid-icons/feather";
useDirective(hljs);

function InputDemo () {
    const [count, setCount] = createSignal(1);
    const [spinner, setSpinner] = createSignal(1);
    // const [time, setTime] = useState(new Date());
    // const [timerange, setTimerange] = useState();
    // const [timerange2, setTimerange2] = useState();
    // const [dateTime, setDateTime] = useState('2022-01-01');
    // const [daterange, setDateRange] = useState('2022-01-01~2022-01-08');
    const [nameData, setNameData] = createSignal([]);
    return <>
        <div class="sys-ctx-main-left">
            <Space dir="v" size={32}>
                <Title heading={2}>
                    Input 输入框
                </Title>
                <Space id="input_base" dir="v">
                    <Card bordered>
                        <Input />
                        <Search />
                        <Divider align="left"><Text type="primary">基础用法</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            Input的基础用法
                        </Paragraph>
                        <DemoCode data={codes['input_base']}/>
                    </Card>
                </Space>

                <Space dir="v">
                    <Card bordered>
                        <Input type="password" />
                        <Input type="password" password/>
                        <Divider align="left"><Text type="primary">密码</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            密码
                        </Paragraph>
                        <DemoCode data={codes['input_base']}/>
                    </Card>
                </Space>

                <Space id="input_textarea" dir="v">
                    <Card bordered>
                        <Input type="textarea"/>
                        <Divider align="left"><Text type="primary">文本域</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            文本域的基础用法
                        </Paragraph>
                        <DemoCode data={codes['input_textarea']}/>
                    </Card>
                </Space>

                <Space id="input_disabled" dir="v">
                    <Card bordered>
                        <Input disabled value="disabled"/>
                        <Input readOnly value="disabled"/>
                        <Divider align="left"><Text type="primary">禁用</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            使用 disabled 可以禁用 Input
                        </Paragraph>
                        <DemoCode data={codes['input_disabled']}/>
                    </Card>
                </Space>


                <Space id="input_placeholder" dir="v">
                    <Card bordered>
                        <Input placeholder="请输入xxx"/>
                        <Divider align="left"><Text type="primary">placeholder</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            使用 placeholder 的样例
                        </Paragraph>
                        <DemoCode data={codes['input_placeholder']}/>
                    </Card>
                </Space>


                <Space id="input_clearable" dir="v">
                    <Card bordered>
                        <Input value="1" clearable/>
                        <Divider align="left"><Text type="primary">可清空</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            使用 clearable 属性， 有值时可以进行清空
                        </Paragraph>
                        <DemoCode data={codes['input_clearable']}/>
                    </Card>
                </Space>


                <Space id="input_control" dir="v">
                    <Card bordered>
                        <Space dir="h">
                            <Input value={[count, setCount]}/>
                            <Button onClick={() => {
                                setCount(count() + 1);
                            }}>Add</Button>
                        </Space>
                        <Divider align="left"><Text type="primary">可控</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            <Text code>value</Text> 属性是可控属性
                        </Paragraph>
                        <DemoCode data={codes['input_control']}/>
                    </Card>
                </Space>

                <Space id="input_prefix" dir="v">
                    <Card bordered>
                        <Input name="count" prefix="￥" suffix="元"/>
                        <Divider align="left"><Text type="primary">前缀后缀</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            使用<Text code>prefix</Text> 可以给Input添加前缀， 使用<Text code>suffix</Text>属性可添加后缀
                        </Paragraph>
                        <DemoCode data={codes['input_prefix']}/>
                    </Card>
                </Space>


                <Space id="input_append" dir="v">
                    <Card bordered>
                        <Input prepend={<FeatherUser />} append={<FeatherSearch />}/>
                        <Input size="small" prepend={<FeatherUser />} append={<FeatherSearch />}/>
                        <Input size="large" prepend={<FeatherUser />} append={<FeatherSearch />}/>
                        <Divider align="left"><Text type="primary">追加</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            使用<Text code>prepend</Text> 可添加前追加， 使用<Text code>append</Text>属性可添加后追加
                        </Paragraph>
                        <DemoCode data={codes['input_append']}/>
                    </Card>
                </Space>


                <Space id="input_size" dir="v">
                    <Card bordered>
                        <Space dir="h">
                            <Input clearable size="large"/><Input clearable/><Input clearable size="small"/>
                        </Space>
                        <Divider align="left"><Text type="primary">尺寸</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            <Text code>size</Text> 属性支持 <Text code>small</Text> <Text code>large</Text> 默认尺寸中
                        </Paragraph>
                        <DemoCode data={codes['input_size']}/>
                    </Card>
                </Space>

                <Space id="input_word_count" dir="v">
                    <Card bordered>
                        <Space dir="v">
                            <Input type="text" maxLength={20} wordCount/>
                            <Input type="textarea" maxLength={20} wordCount/>
                        </Space>
                        <Divider align="left"><Text type="primary">字符计数</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            同时设置wordCount和maxLength属性，当输入内容时，会自动显示计数
                        </Paragraph>
                        <DemoCode data={codes['input_word_count']}/>
                    </Card>
                </Space>

                <Space id="input_auto_height" dir="v">
                    <Card bordered>
                        <Input type="textarea" autoHeight/>
                        <Divider align="left"><Text type="primary">适应高度</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            Textarea 的高度随内容输入自动适应高度
                        </Paragraph>
                        <DemoCode data={codes['input_auto_height']}/>
                    </Card>
                </Space>


                <Space id="input_group" dir="v">
                    <Card bordered>
                        <Space dir="v">
                            <InputGroup compact>
                                <Select style={{"width": "100px"}}>
                                    <Option value={1} label="啊实打" />
                                </Select>
                                <Input />
                            </InputGroup>
                            <InputGroup compact>
                                <Select style={{"width": "100px"}}>
                                    <Option value={1} label="啊实打" />
                                </Select>
                                <Select style={{"width": "100px"}}>
                                    <Option value={1} label="啊实打22" />
                                </Select>
                            </InputGroup>
                            <InputGroup compact>
                                <Input style={{"width": "100px"}}/>
                                <Datepicker style={{"width": "130px"}}/>
                            </InputGroup>
                            <InputGroup compact>
                                <Input style={{"width": "150px"}}/>
                                <Button type="primary">搜索</Button>
                            </InputGroup>
                            <InputGroup compact>
                                <Input style={{"width": "150px"}}/>
                                <Spinner />
                            </InputGroup>
                            <InputGroup compact>
                                <Select style={{"width": "100px"}}>
                                    <Option value={1} label="啊实打" />
                                </Select>
                                <Input style={{"width": "150px"}}/>
                                <Button type="primary">搜索</Button>
                            </InputGroup>

                            <InputGroup compact>
                                <Datepicker style={{"width": "120px"}}/>
                                <Input style={{"width": "150px"}}/>
                                <Button icon={<FeatherCopy color="#999"/>} />
                            </InputGroup>
                        </Space>
                        <Divider align="left"><Text type="primary">输入框组合</Text></Divider>
                        <Paragraph type="secondary" spacing="extended">
                            使用InputGroup进行输入框组合
                        </Paragraph>
                        <DemoCode data={codes['input_auto_height']}/>
                    </Card>
                </Space>



                <Space dir="v" size={24} id="comp_api">
                    <Title type="primary" heading={3}>API</Title>
                    <Space id="comp_props" dir="v">
                        <Title type="primary" heading={4}>Input Props</Title>
                        <Table columns={propsColumns} data={propsData} border size="small" />
                    </Space>
                    <Space id="comp_events" dir="v">
                        <Title type="primary" heading={4}>Input Events</Title>
                        <Table columns={eventsColumns} data={eventsData} border size="small" />
                    </Space>
                </Space>
            </Space>
        </div>

        <CompAnchor data={anchorData}/>
    </>
}

export default InputDemo;
