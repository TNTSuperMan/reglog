export type VNode = VElement | VText;
export type VElement = [string, [string, string][], ...VNode[]] | VText;
export type VText = string;

export const VNodeFromDOM = (dom: ChildNode): VNode => {
    if(dom instanceof window.Text){
        return dom.textContent ?? "";
    }else if(dom instanceof window.HTMLElement){
        return [dom.tagName,
            Array.from(dom.attributes).map(e=>[e.name, e.value]),
            ...Array.from(dom.childNodes).map(VNodeFromDOM).filter(e=>e!="")]
    }else{
        throw new Error("Unknown node",{cause:dom})
    }
}
