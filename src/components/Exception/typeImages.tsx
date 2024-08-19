const images: any = {
    '404': 'https://cui.cqb325.cn/file/404.svg',
    '403': 'https://cui.cqb325.cn/file/403.svg',
    '500': 'https://cui.cqb325.cn/file/500.svg',
    'empty': 'https://cui.cqb325.cn/file/empty.svg',
    'fail': 'https://cui.cqb325.cn/file/fail.svg',
    'deny': 'https://cui.cqb325.cn/file/deny.svg'
}
export function typeImages (type?: string) {
    return type ? images[type] : null;
}
