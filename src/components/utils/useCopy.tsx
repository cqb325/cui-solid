export default async function useCopy (text: string) {
    if (navigator.clipboard && window.isSecureContext) {
        // navigator clipboard 向剪贴板写文本
        try {
            await navigator.clipboard.writeText(text);
            return true;
        } catch (e) {
            return false;
        }
    } else {
        const input = document.createElement('textarea');
        document.body.appendChild(input);
        input.setAttribute('value', text);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        return true;
    }
}
