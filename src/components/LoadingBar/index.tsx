import { render } from "solid-js/web";
import usePortal from "../utils/usePortal";
import { LoadingBar } from "./LoadingBar";

const duration = 800;
let timer: any;
let bar: any;


function clearTimer () {
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
}

function hide () {
    setTimeout(() => {
        update({
            show: false
        });
        setTimeout(() => {
            update({
                percent: 0
            });
        }, 200);
    }, duration);
}

function update (options: any) {
    bar.update(options);
}

function LoadingBarFn () {
    const ele = usePortal('cm-loading-bar-portal', 'cm-loading-bar-portal');
    if (ele) {
        render(() => <LoadingBar ref={bar}/>, ele);
    }
    return {
        start () {
            if (timer) return;

            let percent: number = 0;

            update({
                percent: percent,
                status: 'success',
                show: true
            });

            timer = setInterval(() => {
                percent += Math.floor(Math.random() * 3 + 1);
                if (percent > 95) {
                    clearTimer();
                }
                update({
                    percent: percent,
                    status: 'success',
                    show: true
                });
            }, 200);
        },

        finish () {
            clearTimer();
            update({
                percent: 100,
                status: 'success',
                show: true
            });
            hide();
        },

        error () {
            clearTimer();
            update({
                percent: 100,
                status: 'error',
                show: true
            });
            hide();
        }
    }
}

export const loadingBar = LoadingBarFn();
