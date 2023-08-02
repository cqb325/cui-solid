export default `const [src, setSrc] = createSignal('https://www.baidu.com');

<Space dir="v" inline>
    <div>
        <QRCode value={src()} />
    </div>
    <Input value={[src, setSrc]} />
</Space>`