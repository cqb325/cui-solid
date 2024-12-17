import { For, Show } from "solid-js";
import { Text } from "../../Typography/Text";
import { Button } from "../../Button";
import { Progress } from "../../Progress";
import { FeatherAlertCircle, FeatherFileText, FeatherFilm, FeatherImage, FeatherMusic, FeatherX } from "cui-solid-icons/feather";

export function List (props: any) {
    const format = (file: any) => {
        const format = file.name.split('.').pop().toLocaleLowerCase() || '';
        let type = <FeatherFileText size={20}/>;
        if (['gif','jpg','jpeg','png','bmp','webp'].indexOf(format) > -1) {
            type = <FeatherImage size={20} />;
        }
        if (['mp4','m3u8','rmvb','avi','swf','3gp','mkv','flv'].indexOf(format) > -1) {
            type = <FeatherFilm size={20} />;
        }
        if (['mp3','wav','wma','ogg','aac','flac'].indexOf(format) > -1) {
            type = <FeatherMusic size={20} />;
        }
        return type;
    }

    const formatSize = (size: number) => {
        if (size < 1024) {
            return size + 'B';
        }
        if (size < 1024 * 1024) {
            return Math.round(size / 1024 * 10) / 10 + 'KB';
        }
        if (size < 1024 * 1024 * 1024) {
            return Math.round(size / 1024 / 1024 * 10) / 10 + 'MB';
        }
        if (size < 1024 * 1024 * 1024 * 1024) {
            return Math.round(size / 1024 / 1024 / 1024 * 10) / 10 + 'GB';
        }
    }

    return <ul class="cm-upload-list">
        <Show when={props.files && props.files.length}>
            <div class="cm-upload-list-title">
                <Text type="secondary">已上传文件</Text>
                <Text type="primary" class="cm-upload-clear" onClick={props.onClear}>清空</Text>
            </div>
        </Show>
        <div class="cm-upload-files">
            <For each={props.files}>
                {(file: any) => {
                    return <li class="cm-upload-file-card">
                        <div class="cm-upload-file-preview">
                            <Show when={file.url} fallback={format(file)}>
                                <img class="cm-upload-file-preview-img" src={file.url} alt="" onClick={() => {
                                    props.onPreview && props.onPreview(file)
                                }}/>
                            </Show>
                        </div>
                        <div class="cm-upload-file-card-body">
                            <div class="cm-upload-file-card-info">
                                <span class="cm-upload-file-card-info-name" title={file.name}>{file.name}</span>
                                <span>{formatSize(file.size)}</span>
                            </div>
                            <Show when={file.showProgress && file.percentage !== 100}>
                                <Progress strokeWidth={4} value={file.percentage} hidePercent/>
                            </Show>
                            <Show when={file.status === 'fail'}>
                                <div class="cm-upload-error">
                                    <FeatherAlertCircle size={12}/>
                                    <Text type="error" size="small" class="cm-upload-error-text">上传失败</Text>
                                    <Text type="primary" class="cm-upload-retry" size="small" onClick={() => {
                                        props.onRetry && props.onRetry(file);
                                    }}>重试</Text>
                                </div>
                            </Show>
                        </div>
                        <div class="cm-upload-file-control">
                            <Button size="small" theme="borderless" icon={<FeatherX />} onClick={() => {
                                props.onRemove && props.onRemove(file);
                            }} />
                        </div>
                    </li>
                }}
            </For>
        </div>
    </ul>
}
