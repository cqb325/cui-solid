export default `const [src, setSrc] = createSignal('https://www.baidu.com');

<Space dir="h">
    <QRCode value={src()} color="rgb(37,119,47)"/>
    <QRCode value={src()} color="#1890ff" bgColor="#ededed"/>
</Space>`