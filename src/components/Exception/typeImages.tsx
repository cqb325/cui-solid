const images: any = {
    '404': 'https://cqb325.gitee.io/cui-solid-doc/file/404.svg',
    '403': 'https://cqb325.gitee.io/cui-solid-doc/file/403.svg',
    '500': 'https://cqb325.gitee.io/cui-solid-doc/file/500.svg',
    'empty': 'https://cqb325.gitee.io/cui-solid-doc/file/empty.svg',
    'fail': 'https://cqb325.gitee.io/cui-solid-doc/file/fail.svg',
    'deny': 'https://cqb325.gitee.io/cui-solid-doc/file/deny.svg'
}
export function typeImages (type?: string) {
    return type ? images[type] : null;
}
