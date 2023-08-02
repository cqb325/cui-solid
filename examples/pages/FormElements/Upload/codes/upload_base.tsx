export default `<Upload action="/test/file/upload/test" name="file" 
    onProgress={(e: any, file: any, fileList: any[]) => {
        console.log(file);
    }} onSuccess={() => {
        console.log('success');
    }} onError={(e: any) => {
        console.log(e);
    }}>
    <Button icon={<Icon name='upload'/>} type='primary'>Upload Files</Button>
</Upload>`