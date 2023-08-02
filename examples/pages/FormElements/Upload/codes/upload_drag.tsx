export default `<Space dir="v">
    <Upload action="/test/file/upload/test" name="file" type="drag" data={data()} headers={headers} accept="jpg">
        <div class="cm-upload-drag-wrap">
            <Icon name='upload' size={32}/>
            <p>Click or drag files here to upload</p>
        </div>
    </Upload>
</Space>`