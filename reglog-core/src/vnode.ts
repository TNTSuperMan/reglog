export type VNode = [string, [string,string][], ...VNode[]] | string;

export const toDOM = (content: VNode[]): Node[] => {
    const toHTMLDom = (tag: string, attributes: [string,string][], ...childs: VNode[]): HTMLElement => {
        const el = document.createElement(tag);
        attributes.forEach(e=>el.setAttribute(...e));
        el.append(...childs.map(e=>toTextOrHTML(e)))
        return el;
    }
    const toTextOrHTML = (content: VNode) =>typeof content == "string" ?
        new Text(content) :
        toHTMLDom(...content)
    return content.map(toTextOrHTML);
}