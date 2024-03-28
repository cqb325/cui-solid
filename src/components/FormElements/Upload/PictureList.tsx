import { For } from "solid-js";
import { Icon } from "../../Icon";

export function PictureList (props: any) {
    return <ul class="cm-upload-list cm-upload-picture-list">
        <For each={props.files}>
            {(file: any) => {
                return <li class="cm-upload-picture-card">
                    <img class="cm-upload-picture-img" src={file.url} alt=""/>
                    <div class="cm-upload-picture-remove" onClick={() => {
                        props.onRemove && props.onRemove(file);
                    }}>
                        <Icon name="x-circle"/>
                    </div>
                    <div class="cm-upload-picture-preview" onClick={() => {
                        props.onPreview && props.onPreview(file)
                    }}>
                        <Icon name="eye" size={20}/>
                    </div>
                </li>
            }}
        </For>
        <li class="cm-upload-picture-add" onClick={props.onClick}>
            {props.children}
        </li>
    </ul>
}
