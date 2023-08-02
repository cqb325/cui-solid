export default `import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';
import img5 from './5.jpg';
import img6 from './6.jpg';
import img7 from './7.jpg';
import img8 from './8.jpg';
import img9 from './9.jpg';
import img10 from './10.jpg';

const [src2, setSrc2] = createSignal('');

<Space dir="h">
    <Row style={{'text-align': 'center'}} gutter={20}>
        <Col grid={0.5}>
            <Image width={200} height={100} fit='cover' src={src2()}/>
            <div>默认</div>
        </Col>
        <Col grid={0.5}>
            <Image width={200} height={100} fit='cover' src={src2()} failInfo={<Icon name='image'/>}/>
            <div>自定义</div>
        </Col>
    </Row>
    <Button type='primary' onClick={() => {
        setSrc2(img1)
    }}>加载</Button>
</Space>`;