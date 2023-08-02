export default `import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';

<Row gutter={20}>
    <Col grid={0.5}>
        <Carousel dotAlign="left">
            <Carousel.Item>
                <div class="demo-carousel">
                    <Image src={img1} fit="cover"/>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div class="demo-carousel">
                    <Image src={img2} fit="cover"/>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div class="demo-carousel">
                    <Image src={img3} fit="cover"/>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div class="demo-carousel">
                    <Image src={img4} fit="cover"/>
                </div>
            </Carousel.Item>
        </Carousel>
    </Col>
    <Col grid={0.5}>
        <Carousel dotAlign="right">
            <Carousel.Item>
                <div class="demo-carousel">
                    <Image src={img1} fit="cover"/>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div class="demo-carousel">
                    <Image src={img2} fit="cover"/>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div class="demo-carousel">
                    <Image src={img3} fit="cover"/>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div class="demo-carousel">
                    <Image src={img4} fit="cover"/>
                </div>
            </Carousel.Item>
        </Carousel>
    </Col>
</Row>`;