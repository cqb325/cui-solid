import { Button } from "@/components/Button";
import { Space } from "@/components/Layout";
import { ImagePreview } from "@/components/ImagePreview";
import { createSignal } from "solid-js";
import { Title } from "@/components/Typography/Title";

export default function ImagePreviewPage () {
    const [visible, setVisible] = createSignal(false);
    return <>
        <div class='sys-ctx-main-left'>
            <Space dir="v" size={32}>
                <Title heading={2}>
                    ImagePreview 图片预览
                </Title>
                <Space id="image_base" dir="v">
                    <Space dir="h">
                        <Button type='primary' onClick={() => {
                            setVisible(true);
                        }}>打开</Button>
                        <ImagePreview visible={[visible, setVisible]} previewList={
                            [
                                'https://file.iviewui.com/images/image-demo-10.jpg',
                                'https://file.iviewui.com/images/image-demo-11.jpg',
                                'https://file.iviewui.com/images/image-demo-12.jpg',
                                'https://file.iviewui.com/images/image-demo-13.jpg',
                                'https://file.iviewui.com/images/image-demo-14.jpg',
                                'https://file.iviewui.com/images/image-demo-15.jpg',
                                'https://file.iviewui.com/images/image-demo-16.jpg',
                                'https://file.iviewui.com/images/image-demo-17.jpg',
                                'https://file.iviewui.com/images/image-demo-18.jpg',
                                'https://file.iviewui.com/images/image-demo-19.jpg',
                                'https://file.iviewui.com/images/image-demo-20.jpg'
                            ]
                        } />
                    </Space>
                </Space>
            </Space>
        </div>
    </>
}