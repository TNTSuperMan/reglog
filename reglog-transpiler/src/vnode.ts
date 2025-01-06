export type VNode = VElement | VText;
export type VElement = [string, [string, string][], ...VNode[]] | VText;
export type VText = string;

export const VNodeFromDOM = (dom: HTMLElement): VNode[] => {
    const from_dom = (e: ChildNode): VNode | null => {
        if(e instanceof window.Text){
            return e.textContent;
        }else if(e instanceof window.HTMLElement){
            return [e.tagName,
                Array.from(e.attributes).map(e=>[e.name, e.value]),
                ...Array.from(e.childNodes).map(from_dom).filter(e=>e!=null)]
        }else{
            throw new Error("Unknown node",{cause:e})
        }
    }
    return Array.from(dom.childNodes).map(from_dom).filter(e=>e!=null)
}
