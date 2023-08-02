export default `<Upload action="/test/file/upload/test" name="file" data={data()} headers={headers} accept="jpg" ref={upload}
    defaultFileList={[
        {
            name: 'test.png',
            status: 'finished',
            size: 71183,
            preview: true,
            url: '/test/file/view/test/temp1.png',
        }
    ]}
    onProgress={(e: any, file: any, fileList: any[]) => {
        console.log(file);
    }} onSuccess={() => {
        console.log('success');
    }} onError={(e: any) => {
        console.log(e);
    }}>
        <Button icon={<Icon name='upload'/>} type='primary'>Upload Files</Button>
</Upload>

<Button type='primary' onClick={() => {
console.log(upload.getFileList());
}}>获取文件列表</Button>`