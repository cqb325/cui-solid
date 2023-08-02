export default `<Space dir="v">
    <Upload action="/test/file/upload/test" listType="picture" name="file" data={data()} headers={headers} accept=".jpg,.jpeg" ref={upload}
        defaultFileList={[
            {
                name: 'test.png',
                status: 'finished',
                size: 71183,
                preview: true,
                url: '/test/file/view/test/temp1.png',
            }
        ]}>
            <Icon name='plus1' size={20}/>
    </Upload>
</Space>`