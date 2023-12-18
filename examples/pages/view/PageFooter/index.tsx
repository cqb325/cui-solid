import { hljs, useDirective } from "../../common/hljs";
import { DemoCode } from "../../common/code";
import img from '../../../assets/images/logo.svg';
import './style.less'
import { anchorData, codes, navigationLinkPropsData, navigationPropsData, propsData } from "./config";
import { CompAnchor } from "../../common/CompAnchor";
import { propsColumns } from "../../common/columns";
useDirective(hljs);
import { Space } from "@/components/Layout";
import { Title } from "@/components/Typography/Title";
import { Card } from "@/components/Card";
import { Divider } from "@/components/Divider";
import { Paragraph } from "@/components/Typography/Paragraph";
import { Text } from "@/components/Typography/Text";
import { Table } from "@/components/Table";
import { Icon } from "@/components/Icon";
import { Floor, FooterNavigation, FooterNavigations, PageFooter } from "@/components/PageFooter";
import { QRCode } from "@/components/QRCode";

export default function PageFooterPage() {
    return <>
        <div class='sys-ctx-main-left' use:hljs={''}>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    PageFooter 页脚
                </Title>
                <Space id="pagefooter_base" dir="v">
                    <Card bordered>
                        <PageFooter>
                            <Floor dividerBottom padding="20px 0">
                                <Space align="center" style={{"justify-content": 'space-around', flex: 1}}>
                                    <div class="cm-demo-nav-item">
                                        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5116" width="40" height="40">
                                            <path d="M512 0C794.78784 0 1024 229.21216 1024 512S794.78784 1024 512 1024 0 794.78784 0 512 229.21216 0 512 0zM373.92384 276.15232a22.81472 22.81472 0 0 0-25.88672-8.47872 126.03392 126.03392 0 0 0-63.8976 49.9712c-13.18912 65.78176 24.33024 169.20576 151.552 297.20576 127.1808 128.04096 229.66272 151.67488 275.29216 142.00832 30.14656-6.3488 49.43872-41.86112 59.1872-65.536a25.84576 25.84576 0 0 0-10.24-32.11264l-102.6048-63.40608a22.20032 22.20032 0 0 0-21.17632-1.31072l-46.12096 21.21728c-12.6976 5.85728-27.52512 4.79232-39.5264-2.4576-64.22528-39.19872-110.96064-101.21216-130.58048-130.41664a30.55616 30.55616 0 0 1-0.94208-32.3584l25.3952-43.8272a30.80192 30.80192 0 0 0-1.51552-33.1776z" fill="#1296db"></path>
                                        </svg>
                                        7*24小时技术支持
                                    </div>
                                    <Divider dir="v" height="3rem"/>
                                    <div class="cm-demo-nav-item">
                                        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12250" width="40" height="40">
                                            <path d="M763.456009 72.250534l128.519072 160.251797 0 192.778608c-14.813381 97.851609-43.11189 176.911222-84.886319 237.204423-41.785685 60.293201-85.022419 106.838284-129.709177 139.625014-44.699038 32.786731-101.681844 60.292178-170.96172 82.506109-85.158519-29.092595-152.591327-69.142753-202.298426-120.188336-49.719378-51.033303-87.402629-101.409644-113.048729-151.127999-25.659403-49.707099-45.889143-111.325481-60.689221-184.844915L130.381489 207.116151 265.247106 72.250534 763.456009 72.250534zM720.616318 426.074002c3.694135-5.813403 7.79657-12.023848 12.296047-18.643616 4.487198-6.606465 9.122775-13.610996 13.883195-21.022803-35.43914-1.587148-68.499094-5.02034-99.165534-10.31288-30.679743-5.28026-58.979276-12.420891-84.886319-21.419845 24.319895-12.69309 46.136783-26.576285 65.449641-41.649586 19.300578-15.0733 36.096103-31.336706 50.376341-48.789193l0-30.939663L426.292989 233.296417c3.694135-5.813403 7.40055-11.502985 11.106965-17.056468 3.694135-5.553483 7.40055-11.230786 11.106965-17.056468l-34.905998-15.0733c-14.813381 26.452465-32.79901 51.838645-53.945633 76.159564-21.159926 24.333198-45.753043 47.599088-73.779354 69.813019 4.227278 3.706415 8.590656 7.67275 13.090133 11.900028 4.487198 4.239558 8.850575 8.726755 13.090133 13.486152 14.280238-12.159948 28.02631-24.593118 41.252543-37.286208 13.213953-12.69309 25.647123-25.647123 37.286208-38.873356 10.573823 14.280238 23.00597 27.76639 37.286208 40.45948s30.667463 24.333198 49.186236 34.905998c-28.559453 11.106965-59.636239 20.762883-93.216032 28.956495-33.592073 8.205892-69.689199 15.2094-108.289332 21.022803 3.694135 5.825682 7.139607 11.502985 10.31288 17.056468 3.173273 5.553483 6.074346 10.982122 8.726755 16.263405 43.893696-7.40055 84.489276-16.263405 121.775484-26.576285 37.286208-10.31288 71.263044-22.076808 101.942787-35.303041 27.493168 11.639085 58.036811 21.555945 91.628884 29.749558C643.527592 414.050154 680.416757 420.793742 720.616318 426.074002L720.616318 426.074002zM678.56969 648.998187l0-217.370703L346.960153 431.627485l0 217.370703 33.319873 0 0-20.626783 264.970814 0 0 20.626783L678.56969 648.998187zM380.280026 459.393875l0 57.119929 115.825982 0 0-57.119929L380.280026 459.393875zM380.280026 600.606037l115.825982 0 0-57.119929L380.280026 543.486108 380.280026 600.606037zM419.946444 263.441994l209.438033 0c-15.3455 14.280238-32.129768 27.64257-50.376341 40.062438-18.246573 12.43317-38.476313 23.676236-60.689221 33.715893-20.10592-9.519818-38.476313-20.35356-55.135738-32.526811C446.52273 292.53459 432.106392 278.788517 419.946444 263.441994L419.946444 263.441994zM529.424858 459.393875l0 57.119929 115.825982 0 0-57.119929L529.424858 459.393875zM529.424858 600.606037l115.825982 0 0-57.119929L529.424858 543.486108 529.424858 600.606037z" fill="#1296db"></path>
                                        </svg>
                                        快速备案
                                    </div>
                                    <Divider dir="v" height="3rem"/>
                                    <div class="cm-demo-nav-item">
                                        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13569" width="40" height="40">
                                            <path d="M522.464 129.76L819.2 190.848c24.448 5.216 41.92 26.176 41.92 50.592v452.096c0 19.2-10.496 38.4-27.968 47.104l-296.704 150.112c-8.736 3.52-15.712 5.248-24.448 5.248s-15.68-1.76-24.448-5.248l-296.704-150.08c-17.472-8.736-27.936-26.208-27.936-47.136V241.44c0-24.416 17.44-47.104 41.888-50.592l296.736-61.12a42.56 42.56 0 0 1 20.928 0z m-94.464 277.568H385.6v111.168c0 20.48-1.6 44.8-8 68.64l-0.096 0.32v1.792h-0.512l-1.248 4.352c-8.64 27.968-24.416 54.56-52.8 72.448 12.128 12.128 22.24 24.256 30.304 38.4a165.12 165.12 0 0 0 58.624-74.784c14.144 22.24 32.32 48.512 40.416 64.64l34.368-28.256c-12.16-20.224-34.368-50.56-50.56-72.768l-18.176 12.128c6.08-28.288 10.112-58.624 10.112-86.912V407.36z m266.784 131.392h-192v163.68h52.544v-20.192h80.832v18.176h58.624v-161.664z m-60.64 50.528v42.432h-80.832v-42.432h80.832z m-155.616-248.608h-141.472v248.608h39.904l0.512-1.792v-196.288h58.624v194.016h42.432v-244.544z m137.44-20.192l-56.608 6.08c2.048 8.064 4.064 18.176 6.08 28.256h-78.816v50.56h56.576l-34.368 8.064c6.08 16.16 10.112 32.32 12.16 50.528h-40.448v50.528h226.368v-50.56h-40.416c8.064-14.112 16.16-32.32 22.208-50.496l-32.32-8.096h42.432v-50.528h-72.736c-2.048-12.128-6.08-22.208-10.112-34.336z m14.144 84.864c-6.08 20.224-12.128 38.4-20.224 58.624h-56.576l22.24-6.08c-2.048-18.176-8.096-36.352-14.144-52.544h68.704z" fill="#1296db"></path>
                                        </svg>
                                        故障赔偿</div>
                                    <Divider dir="v" height="3rem"/>
                                    <div class="cm-demo-nav-item">
                                        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14982" width="40" height="40">
                                            <path d="M938.458253 701.036377C912.06514 719.980845 660.872121 888.86423 625.390002 909.61381c-41.570791 24.334221-78.507028 62.258972-164.574243 19.907399-27.983331-13.794168-140.010801-72.912613-176.443571-91.928712-37.645388-19.664875-53.785997-16.429181-82.911338 2.371l-52.643987 34.721803-103.272062-232.587266c0 0 111.99677-52.906977 163.256224-73.429383 80.929194-32.339546 117.960599-4.466732 164.287717 24.924669 19.579941 12.423961 83.368756 59.69866 83.368756 59.69866s63.717184 37.742603 126.72317 37.742603c96.526427 0 113.520473 5.513574 113.520473 36.863582 0 34.290991-62.934355 36.806277-63.187111 36.806277L478.734874 764.704442c-52.606125 0-126.506229-30.751375-126.506229-30.751375s62.58643 67.626213 126.506229 67.626213l155.138336 0c34.302247-0.684592 99.148138-16.993023 99.148138-73.667813 0-73.752748-66.119907-73.752748-149.850913-73.752748-6.5246 0-12.44545-1.083681-18.306948-2.300392 3.200902-1.732457 6.390547-3.465938 10.363022-5.728468 14.935154-8.569166 34.986839-20.822235 57.719586-35.144428 59.674101-37.561477 90.352821-42.317805 120.153544-2.490727 20.759813-21.389146 46.866401-27.260877 69.214385-27.260877 25.227568 0 46.578852 16.897855 40.585347 44.183292 64.74049-38.816051 96.668667-23.181979 110.859877-4.455475C992.521566 645.734864 979.68112 671.515017 938.458253 701.036377zM582.026378 568.283888c-17.439184 10.965749-32.605605 19.871583-50.057069 30.847565-2.165316 2.204202-6.499018 4.3951-10.832719 4.3951-4.319375 0-8.653077-2.190899-13.116739-4.3951-15.166421-10.975982-32.605605-22.072715-49.936319-30.847565-63.067384-39.609113-130.467447-79.228459-160.903643-156.26909-10.963703-26.466792-17.452487-57.301054-17.452487-88.015589L279.727401 172.10987c0-8.905834 6.487761-17.668405 15.163351-22.062482l217.59276-74.848709c4.333702-2.190899 8.653077-2.190899 12.986779 0l217.469963 74.848709c10.819416 4.393054 17.439184 13.156648 17.439184 22.062482l0 151.889339c0 33.036417-6.619768 61.548798-17.439184 88.015589C712.478476 489.055428 645.103995 528.674775 582.026378 568.283888zM716.810131 187.467649l-195.673541-66.075905-195.805548 66.075905L325.331042 323.999209c0 26.321482 4.463662 50.585095 13.130042 72.65781 26.117844 63.752999 82.685187 98.982362 143.559627 134.208655 12.999059 8.773827 25.999141 15.47853 39.115879 24.264637 12.998035-8.786107 26.116821-15.490809 39.114856-24.264637 60.890812-37.418214 117.456109-72.65781 143.573953-134.208655 8.653077-22.072715 12.984732-46.336328 12.984732-72.65781L716.810131 187.467649zM589.044212 367.627868c9.55461 0 17.198707 7.606235 17.198707 17.029862 0 9.544377-7.644097 17.162892-17.198707 17.162892l-52.223409 0 0 39.488363c0 9.423627-7.78736 17.162892-17.210987 17.162892-9.55768 0-17.331737-7.739265-17.331737-17.162892l0-39.488363-50.958602 0c-9.555633 0-17.186428-7.618515-17.186428-17.162892 0-9.423627 7.630794-17.029862 17.186428-17.029862l50.958602 0 0-22.843264-50.958602 0c-9.555633 0-17.186428-7.750521-17.186428-17.162892 0-9.423627 7.630794-17.041118 17.186428-17.041118l50.958602 0 0-10.578939-63.572898-52.138474c-6.738471-6.571672-6.484691-17.426905 0.26606-24.131607 6.750751-6.715959 17.582447-6.715959 24.336268 0l57.96211 45.939285 54.653761-45.687552c6.632047-6.835685 17.452487-7.088442 24.336268-0.63752 6.871501 6.571672 7.006578 17.414625 0.384763 24.263613l-63.823608 54.832839 0 8.136308 52.223409 0c9.55461 0 17.198707 7.617491 17.198707 17.041118 0 9.41237-7.644097 17.150612-17.198707 17.150612l0 0.01228-52.223409 0 0 22.843264L589.044212 367.625822z" fill="#1296db"></path>
                                        </svg>
                                        无理由赔款</div>
                                </Space>
                            </Floor>
                            <Floor padding="20px 0" dividerBottom>
                                <FooterNavigations>
                                    <FooterNavigation head="产品与服务">
                                        <FooterNavigation.Link link="#">弹性云服务器</FooterNavigation.Link>
                                        <FooterNavigation.Link link="#">服务器托管</FooterNavigation.Link>
                                        <FooterNavigation.Link link="#">云虚拟主机</FooterNavigation.Link>
                                        <FooterNavigation.Link link="#">SSL证书</FooterNavigation.Link>
                                        <FooterNavigation.Link link="#">域名注册</FooterNavigation.Link>
                                        <FooterNavigation.Link link="#">云监控</FooterNavigation.Link>
                                        <FooterNavigation.Link link="#">云帮手</FooterNavigation.Link>
                                    </FooterNavigation>
                                    <FooterNavigation head="帮助与支持">
                                        <FooterNavigation.Link link="#">管理控制台</FooterNavigation.Link>
                                        <FooterNavigation.Link link="#">域名信息查询</FooterNavigation.Link>
                                        <FooterNavigation.Link link="#">合同申请</FooterNavigation.Link>
                                        <FooterNavigation.Link link="#">域名控制台</FooterNavigation.Link>
                                        <FooterNavigation.Link link="#">优化与提升</FooterNavigation.Link>
                                        <FooterNavigation.Link link="#">实施与搭建</FooterNavigation.Link>
                                        <FooterNavigation.Link link="#">支持计划</FooterNavigation.Link>
                                    </FooterNavigation>
                                    <FooterNavigation head="关于***">
                                        <FooterNavigation.Link link="#">公司简介</FooterNavigation.Link>
                                        <FooterNavigation.Link link="#">联系我们</FooterNavigation.Link>
                                        <FooterNavigation.Link link="#">加入我们</FooterNavigation.Link>
                                        <FooterNavigation.Link link="#">发展历程</FooterNavigation.Link>
                                        <FooterNavigation.Link link="#">新闻动态</FooterNavigation.Link>
                                        <FooterNavigation.Link link="#">校园招聘</FooterNavigation.Link>
                                        <FooterNavigation.Link link="#">友情链接</FooterNavigation.Link>
                                    </FooterNavigation>
                                    <FooterNavigation head="其他">
                                        <FooterNavigation.Link link="#" icon={<Icon name="link"/>}>开发者中心</FooterNavigation.Link>
                                        <FooterNavigation.Link link="#" icon={<Icon name="link"/>}>开发者课堂</FooterNavigation.Link>
                                        <FooterNavigation.Link link="#" icon={<Icon name="link"/>}>考试认证</FooterNavigation.Link>
                                        <FooterNavigation.Link link="#" icon={<Icon name="link"/>}>开放实验室</FooterNavigation.Link>
                                        <FooterNavigation.Link link="#" icon={<Icon name="link"/>}>举报中心</FooterNavigation.Link>
                                        <FooterNavigation.Link link="#" icon={<Icon name="link"/>}>定价</FooterNavigation.Link>
                                        <FooterNavigation.Link link="#" icon={<Icon name="link"/>}>意见反馈</FooterNavigation.Link>
                                    </FooterNavigation>
                                    <FooterNavigation head="关注我们">
                                        <QRCode value="https://gitee.com/cqb325/cui-solid" icon={img}/>
                                    </FooterNavigation>
                                </FooterNavigations>
                            </Floor>
                            <Floor center padding="10px 0 0 0">
                                <Paragraph type="secondary" spacing='extended' size="small">
                                    京ICP备xxxxx号-3     ********号-3 地址：浙江省杭州市xxxx号
                                </Paragraph>
                            </Floor>
                            <Floor center>
                                <Paragraph type="secondary" spacing='extended' size="small">
                                    Copyright © 2020-2030. 
                                </Paragraph>
                            </Floor>
                        </PageFooter>

                        <Divider align="left"><Text type="primary">基本用法</Text></Divider>
                        <Paragraph type="secondary" spacing='extended'>
                            基本用法
                        </Paragraph>
                        <DemoCode data={codes['pagefooter_base']}/>
                    </Card>
                </Space>

                <Space dir="v" size={24} id="comp_api">
                    <Title type="primary" heading={3}>API</Title>
                    <Space id='comp_props' dir="v">
                        <Title type="primary" heading={4}>Floor Props</Title>
                        <Table columns={propsColumns} data={propsData} border size='small' />
                    </Space>
                    <Space id='comp_navigation_props' dir="v">
                        <Title type="primary" heading={4}>Navigation Props</Title>
                        <Table columns={propsColumns} data={navigationPropsData} border size='small' />
                    </Space>
                    <Space id='comp_navigation_link_props' dir="v">
                        <Title type="primary" heading={4}>Link Props</Title>
                        <Table columns={propsColumns} data={navigationLinkPropsData} border size='small' />
                    </Space>
                </Space>
            </Space>
        </div>
        <CompAnchor data={anchorData}/>
    </>
}