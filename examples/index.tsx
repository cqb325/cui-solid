import { render } from 'solid-js/web';
// import { Router, hashIntegration } from "@solidjs/router";
import { menuData } from './menuData';
import { createRouter, createWebHashHistory } from 'solid-vue-router';
import { Page } from './Page';
import '../src/theme/theme.less';
import 'highlight.js/styles/xcode.css'
import { loadingBar } from '@/components/LoadingBar';

const router = createRouter({
    routes: menuData,
    history: createWebHashHistory()
})

router.beforeEach(async (to, from) => {
    loadingBar.start();
})

router.afterEach(async (to, from) => {
    loadingBar.finish();
    setTimeout(() => {
        document.documentElement.scrollTop = 0;
    }, 200);
    
})

render(() => <Page/>, document.getElementById('root') as HTMLElement);
// render(() => <Router><Page/></Router>, document.getElementById('root'));
