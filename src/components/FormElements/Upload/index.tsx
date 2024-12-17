import { Show, createEffect, createSignal, createUniqueId } from "solid-js";
import { useClassList } from "../../utils/useProps"
import ajax from './ajax';
import { createStore, produce, unwrap } from "solid-js/store";
import { List } from "./List";
import { PictureList } from "./PictureList";
import { ImagePreview } from "../../ImagePreview";

export interface UploadProps {
    multiple?: boolean,
    webkitdirectory?: boolean,
    accept?: string,
    classList?: any,
    class?: string,
    style?: any,
    disabled?: boolean
    children?: any,
    beforeUpload?: (file: File) => Promise<File> | boolean,
    format?: string[],
    maxSize?: number,
    name?: string,
    headers?: any,
    withCredentials?: boolean,
    data?: any,
    action?: string,
    onProgress?: (e: any, file: any, fileList: any[]) => void,
    onSuccess?: (res: any, file: any, fileList: any[]) => void,
    onError?: (error: any, res: any, file: any) => void,
    onRemove?: (file: any, fileList: any[]) => void,
    onPreview?: (file: any, fileList?: any[]) => void,
    onFormatError?: (file: any, fileList: any[]) => void,
    onExceededSize?: (file: any, fileList: any[]) => void,
    onClear?: (fileList: any[]) => void,
    defaultFileList?: any[],
    type?: 'select'|'drag',
    paste?: boolean,
    asFormField?: boolean
    getFileUrl?: (res: any, file: any) => void,
    ref?: any,
    listType?: 'picture'
    customRequest?: (option: any) => void
}

export function Upload (props: UploadProps) {
    const [dragOver, setDragOver] = createSignal(false);
    const [visible, setVisible] = createSignal(false);
    const format = props.format ?? [];
    const fileList: any[] = [];
    const type = props.type ?? 'select';
    const [store, setStore] = createStore({
        fileList,
        previewUrl: ''
    });
    let fileMap: any = {};
    const name = props.name ?? 'file';
    const classList = () => useClassList(props, 'cm-upload', {
        'cm-upload-select': type === 'select',
        'cm-upload-drag': type === 'drag',
        'cm-upload-dragOver': type === 'drag' && dragOver()
    });

    createEffect(() => {
        if (props.defaultFileList) {
            const arr = props.defaultFileList.map((item: any) => {
                if (!item.uid) {
                    item.uid = createUniqueId();
                }
                return item;
            });
            setStore('fileList', arr);
        }
    });

    const handleChange = (e: any) => {
        const files = e.target.files;
        if (!files) {
            return;
        }
        uploadFiles(files);
        input.value = null;
    }
    const uploadFiles = (files: FileList) => {
        let postFiles: File[] = Array.prototype.slice.call(files);
        if (!props.multiple) postFiles = postFiles.slice(0, 1);
        if (postFiles.length === 0) return;
        postFiles.forEach((file: File) => {
            upload(file);
        });
    }
    const upload = async (file: File) => {
        if (!props.beforeUpload) {
            return post(file);
        }
        const before = props.beforeUpload(file);
        if (typeof before === 'object' && before.then) {
            before.then((processedFile: File) => {
                if (Object.prototype.toString.call(processedFile) === '[object File]') {
                    post(processedFile);
                } else {
                    post(file);
                }
            }, () => {
                // this.$emit('cancel', file);
            });
        } else if (before !== false) {
            post(file);
        } else {
            // this.$emit('cancel', file);
        }
    }
    const post = (file: any) =>{
        // check format
        if (format.length) {
            const fileFormat = file.name.split('.').pop().toLocaleLowerCase();
            const checked = format.some(item => item.toLocaleLowerCase() === fileFormat);
            if (!checked) {
                props.onFormatError && props.onFormatError(file, fileList);
                return false;
            }
        }
        // check maxSize
        if (props.maxSize) {
            if (file.size > props.maxSize * 1024) {
                props.onExceededSize && props.onExceededSize(file, fileList);
                return false;
            }
        }
        handleStart(file);
        if (props.customRequest) {
            props.customRequest({
                file: file,
                onProgress: (e: any) => {
                    handleProgress(e, file);
                },
                onSuccess: (res: any) => {
                    handleSuccess(res, file);
                },
                onError: (err: any, response: any) => {
                    handleError(err, response, file);
                }
            });
        } else {
            ajax({
                headers: props.headers,
                withCredentials: props.withCredentials,
                file: file,
                data: props.data,
                filename: name,
                action: props.action,
                onProgress: (e: any) => {
                    handleProgress(e, file);
                },
                onSuccess: (res: any) => {
                    handleSuccess(res, file);
                },
                onError: (err: any, response: any) => {
                    handleError(err, response, file);
                }
            });
        }
    }

    const handleStart = (file: any) => {
        file.uid = createUniqueId();
        fileMap[file.uid] = file;
        const _file = {
            status: 'uploading',
            name: file.name,
            size: file.size,
            percentage: 0,
            uid: file.uid,
            showProgress: true
        };
        setStore('fileList', [...store.fileList, _file])
    }

    const getFile = (file: any) : any => {
        const fileList = store.fileList;
        let target;
        fileList.every(item => {
            target = file.uid === item.uid ? item : null;
            return !target;
        });
        return target;
    }

    /**
     * 上传进度
     * @param e
     * @param file
     */
    const handleProgress = (e: any, file: any) => {
        const _file = getFile(file);
        props.onProgress && props.onProgress(e, _file, store.fileList);
        setStore('fileList', (item: any) => item.uid === file.uid, 'percentage', e.percent || 0);
    }

    const handleSuccess = (res: any, file: any) => {
        const _file: any = getFile(file);
        if (_file) {
            setStore('fileList', (item: any) => item.uid === file.uid, produce((item: any) => {
                item.status = 'finished';
                item.response = res;
                item.url = props.getFileUrl && props.getFileUrl(res, item);
            }));
            props.onSuccess && props.onSuccess(res, _file, store.fileList);
            setTimeout(() => {
                setStore('fileList', (item: any) => item.uid === file.uid, produce((item: any) => {
                    item.showProgress = false;
                }));
            }, 1000);
        }
    }

    const handleError = (err: any, response: any, file: any) => {
        const _file = getFile(file);
        setStore('fileList', (item: any) => item.uid === file.uid, 'status', 'fail');
        props.onError && props.onError(err, response, file);
    }

    const handleRemove = (file: any) => {
        setStore('fileList', produce((list: any) => {
            list.splice(list.indexOf(file), 1);
        }));
        delete fileMap[file.uid];
        props.onRemove && props.onRemove(file, store.fileList);
    }

    const handlePreview = (file: any) => {
        if (file.status === 'finished') {
            setStore('previewUrl', file.url);
            setVisible(true);
            props.onPreview && props.onPreview(file);
        }
    }

    const clearFiles = () => {
        // store.fileList.forEach(file => {
        //     props.onRemove && props.onRemove(file, store.fileList);
        // })
        const oldFileList = unwrap(store.fileList);
        fileMap = {};
        setStore('fileList', []);
        props.onClear && props.onClear(oldFileList);
    }

    const handleClick = () => {
        if (props.disabled) {
            return;
        }
        input.click();
    }

    /**
     * 重试
     * @param item
     */
    const onRetry = (item: any) => {
        const file: any = fileMap[item.uid];
        if (file) {
            ajax({
                headers: props.headers,
                withCredentials: props.withCredentials,
                file: file,
                data: props.data,
                filename: name,
                action: props.action,
                onProgress: (e: any) => {
                    handleProgress(e, file);
                },
                onSuccess: (res: any) => {
                    handleSuccess(res, file);
                },
                onError: (err: any, response: any) => {
                    handleError(err, response, file);
                }
            });
        }
    }

    const onDrop = (e: any) => {
        e.preventDefault && e.preventDefault();
        setDragOver(false);
        if (props.disabled) return;
        uploadFiles(e.dataTransfer.files);
    }
    const handlePaste = (e: any) => {
        if (props.disabled) return;
        if (props.paste) {
            uploadFiles(e.clipboardData.files);
        }
    }
    const onDragOver = (e: any) => {
        e.preventDefault && e.preventDefault();
        setDragOver(true);
    }
    const onDragLeave = (e: any) => {
        e.preventDefault && e.preventDefault();
        setDragOver(false);
    }

    const getFileList = () => {
        return store.fileList.map((item: any) => {
            return {...item};
        });
    }
    let input: any;
    props.ref && props.ref({
        clearFiles: () => {
            fileMap = {};
            setStore('fileList', []);
        },
        getFileList
    })
    return <div classList={classList()} style={props.style}>
        <input class="cm-upload-input" ref={input} type="file" onChange={handleChange} multiple={props.multiple}
            // @ts-expect-error: 2322
            webkitdirectory={props.webkitdirectory} accept={props.accept}/>
        <Show when={props.listType === 'picture'}>
            <PictureList files={store.fileList} onRemove={handleRemove} onPreview={handlePreview} onClick={handleClick}>
                {props.children}
            </PictureList>
        </Show>
        <Show when={props.listType !== 'picture'}>
            <div class="cm-upload-out" onClick={handleClick} onDrop={onDrop} onPaste={handlePaste}
                onDragOver={onDragOver} onDragLeave={onDragLeave}>
                    {props.children}
            </div>
            <List files={store.fileList} onRemove={handleRemove} onPreview={handlePreview}
                onClear={clearFiles} onRetry={onRetry}/>
        </Show>
        <ImagePreview previewList={[store.previewUrl]} visible={[visible, setVisible]} />
    </div>
}
