export default function usePortal (id: string, className: string) {
    function createRootElement (id: string) {
        const rootContainer = document.createElement('div');
        rootContainer.setAttribute('id', id);
        return rootContainer;
    }

    function addRootElement (rootElem: any) {
        document.body.appendChild(rootElem);
    }

    const existingParent = document.querySelector(`#${id}`);
    // Parent is either a new root or the existing dom element
    const parentElem = existingParent || createRootElement(id);

    if (!existingParent) {
        addRootElement(parentElem);
    }
    parentElem.classList.add(className);
    return parentElem;
}
