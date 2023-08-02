export default `let qrcode: any;
const [src, setSrc] = createSignal('https://www.baidu.com');

<QRCode value={src()} ref={qrcode}/>
<Button type="primary" onClick={() => {
    qrcode.download();
}}>下载</Button>`