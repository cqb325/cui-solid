export default `import img from '../../../assets/images/logo.svg';

const [src, setSrc] = createSignal('https://www.baidu.com');

<QRCode icon={img} value={src()} />`