export default `<Upload action="/test/file/upload/test" name="file" accept="jpg" 
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
</Upload>`