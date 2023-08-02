import { View, VView, HView, BothSide, Space } from "@/components/Layout";
import { Paragraph } from "@/components/Typography/Paragraph";
import { Text } from "@/components/Typography/Text";
import { Title } from "@/components/Typography/Title";
import '../demo.less';

const centerStyle = {
    'justify-content': 'center'
}
function Layout () {
    return <View>
        <div class='sys-ctx-main-left'>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    View 视图
                </Title>
                <Paragraph type="secondary" spacing='extended'>
                    包含 <Text code>View</Text> <Text code>VView</Text> <Text code>HView</Text>三种视图
                </Paragraph>
            </Space>
        </div>
        <VView class="components-layout-demo" size="450px">
            <View class='layout-demo-header' size="64px" style={centerStyle}>Header</View>
            <View style={centerStyle}>Main</View>
            <View class='layout-demo-header' size="64px" style={centerStyle}>Footer</View>
        </VView>
        <VView class="components-layout-demo" size="450px">
            <View class='layout-demo-header' size="64px" style={centerStyle}>Header</View>
            <HView style={centerStyle}>
                <View size="200px" style={centerStyle} class="layout-demo-sider">Sider</View>
                <View style={centerStyle}>MAIN</View>
            </HView>
            <View class='layout-demo-header' size="64px" style={centerStyle}>Footer</View>
        </VView>
        <HView class="components-layout-demo" size="450px">
            <View size="150px" style={centerStyle} class="layout-demo-sider">Sider</View>
            <VView style={centerStyle}>
                <View class='layout-demo-header' size="64px" style={centerStyle}>Header</View>
                <View style={centerStyle}>MAIN</View>
                <View class='layout-demo-header' size="64px" style={centerStyle}>Footer</View>
            </VView>
        </HView>
    </View>
}

export default Layout;