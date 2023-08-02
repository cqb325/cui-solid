import { Captcha, Card, Divider, Email, Mobile, Paragraph, Password, Popover, Progress, Space, Table, Text, Title, UserName } from "@/components";
import { hljs, useDirective } from "../../common/hljs";
import { DemoCode } from "../../common/code";
import { Login, Submit } from "@/components";
import { createSignal } from "solid-js";
import { message } from "@/components";
import { eventsColumns, propsColumns } from "../../common/columns";
import { anchorData, captchaPropsData, codes, eventsData, passwordPropsData, propsData, usernamePropsData } from "./config";
import { CompAnchor } from "../../common/CompAnchor";
useDirective(hljs);

export default function LoginPage () {
    const [strong, setStrong] = createSignal('强');
    const [percent, setPercent] = createSignal(0);
    const [color, setColor] = createSignal('');
    const onChangePassword = (v: string) => {
        if (v.length < 6) {
            setStrong('太短');
            setColor('#ed4014');
        } else if (v.length < 10) {
            setStrong('中');
            setColor('#ff9900');
        } else {
            setStrong('强');
            setColor('#19be6b');
        }
        setPercent((v.length > 10 ? 10 : v.length) * 10)
    }
    return <>
        <div class='sys-ctx-main-left'>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    Login 登录
                </Title>
                <Space id="login_base" dir="v">
                    <Card bordered>
                        <div style={{width: '450px', margin: 'auto'}}>
                            <Login onSubmit={(valid, {u, p}) => {
                                console.log(valid, u, p);
                            }}>
                                <UserName name='u'/>
                                <Password name='p'/>
                                <Submit />
                            </Login>
                        </div>
                        <Divider align="left"><Text type="primary">基础用法</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            Input的基础用法
                        </Paragraph>
                        <DemoCode data={codes['login_base']}/>
                    </Card>
                </Space>

                <Space id="login_get_captcha" dir="v">
                    <Card bordered>
                        <div style={{width: '450px', margin: 'auto'}}>
                            <Login onSubmit={(valid, {u, p}) => {
                                console.log(valid, u, p);
                            }}>
                                <Mobile />
                                <Captcha field="mobile" onGetCaptcha={() => {
                                    message.info('获取验证码');
                                }}/>
                                <Submit />
                            </Login>
                        </div>
                        <Divider align="left"><Text type="primary">获取验证码</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            Captcha 组件内置了验证码获取的逻辑。
                        </Paragraph>
                        <DemoCode data={codes['login_get_captcha']}/>
                    </Card>
                </Space>

                <Space id="login_img_captcha" dir="v">
                    <Card bordered>
                        <div style={{width: '450px', margin: 'auto'}}>
                            <Login onSubmit={(valid, {u, p}) => {
                                console.log(valid, u, p);
                            }}>
                                <UserName name='username'/>
                                <Password name='password'/>
                                <Captcha action="https://zitie.cqb325.cn/cui/manager/user/captchaGet"/>
                                <Submit />
                            </Login>
                        </div>
                        <Divider align="left"><Text type="primary">图形验证码</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            Captcha 默认为获取验证码按钮，指定action属性后为图形验证码，点击可刷新验证码。
                        </Paragraph>
                        <DemoCode data={codes['login_img_captcha']}/>
                    </Card>
                </Space>

                <Space id="login_init" dir="v">
                    <Card bordered>
                        <div style={{width: '450px', margin: 'auto'}}>
                            <Login onSubmit={(valid, {u, p}) => {
                                console.log(valid, u, p);
                            }} data={{u: '1111', p: '111'}}>
                                <UserName name='u'/>
                                <Password name='p'/>
                                <Submit />
                            </Login>
                        </div>
                        <Divider align="left"><Text type="primary">初始化</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            Login的data属性可初始化登录表单
                        </Paragraph>
                        <DemoCode data={codes['login_init']}/>
                    </Card>
                </Space>


                <Space id="login_custom_rule" dir="v">
                    <Card bordered>
                        <div style={{width: '450px', margin: 'auto'}}>
                            <Login onSubmit={(valid, {u, p}) => {
                                console.log(valid, u, p);
                            }}>
                                <Email />
                                <Popover trigger="click" arrow theme="light" align="right" content={<div class="demo-register-tip" style={{width: '240px', "white-space": 'normal'}}>
                                    <div class="demo-register-tip-title">
                                        强度：{ strong() }
                                    </div>
                                    <Progress value={percent()} hidePercent strokeWidth={6} strokeColor={color()} />
                                    <div class="demo-register-tip-desc">
                                        请至少输入 6 个字符。请不要使用容易被猜到的密码。
                                    </div>
                                </div>}>
                                    <Password name='password' rules={{pw: (v: string) => {
                                        if (v.length < 6) {
                                            return false;
                                        }
                                        return true;
                                    }}} messages={{pw: '密码不能少于6位'}} onInput={(v) => {
                                        onChangePassword(v);
                                    }}/>
                                </Popover>
                                <Password name='confirmPassword' rules={{equalTo: 'password'}} messages={{equalTo: '密码不匹配'}} placeholder="请输入确认密码"/>
                                <Submit />
                            </Login>
                        </div>
                        <Divider align="left"><Text type="primary">自定义校验及组合</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                        各组件都有默认的校验规则 rules，不过也可以根据场景自定义，比如实现一个密码二次确认的校验。
                        还可以结合其它组件，实现更复杂的业务功能，比如示例的密码强度。
                        </Paragraph>
                        <DemoCode data={codes['login_custom_rule']}/>
                    </Card>
                </Space>

                <Space dir="v" size={24} id="comp_api">
                    <Title type="primary" heading={3}>API</Title>
                    <Space id='comp_props' dir="v">
                        <Title type="primary" heading={4}>Login Props</Title>
                        <Table columns={propsColumns} data={propsData} border size='small' />
                    </Space>
                    <Space id='comp_usernameprops' dir="v">
                        <Title type="primary" heading={4}>UserName Props</Title>
                        <Table columns={propsColumns} data={usernamePropsData} border size='small' />
                    </Space>
                    <Space id='comp_passwordprops' dir="v">
                        <Title type="primary" heading={4}>Password Props</Title>
                        <Table columns={propsColumns} data={passwordPropsData} border size='small' />
                    </Space>
                    <Space id='comp_captchaprops' dir="v">
                        <Title type="primary" heading={4}>Captcha Props</Title>
                        <Table columns={propsColumns} data={captchaPropsData} border size='small' />
                    </Space>
                    <Space id='comp_events' dir="v">
                        <Title type="primary" heading={4}>Events</Title>
                        <Table columns={eventsColumns} data={eventsData} border size="small" />
                    </Space>
                </Space>
            </Space>
        </div>

        <CompAnchor data={anchorData}/>
    </>
}