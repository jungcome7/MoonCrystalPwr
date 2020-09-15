export function removeChildNodes(parentNode) {
    const childNodesList = [...parentNode.childNodes];
    childNodesList.map((node) => parentNode.removeChild(node));
}

