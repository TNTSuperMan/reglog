import { toDOM, type VNode } from "./vnode";
const w = window;

export default (root: HTMLElement, id: () => string, onupdate: (ev: () => void) => void, routes: {[key: string]: (()=>VNode[] | Promise<VNode[]>) | undefined}) => 
    new Promise(res=>
        document.readyState == "loading" ?
            document.addEventListener(
                "DOMContentLoaded", res):
            res(0))
    .then(()=>{
        const update = () => {
            while(root.firstChild)
                root.firstChild.remove();
            new Promise<VNode[]>(e=>e((
                routes[id()] ??
                routes["404"] ??
                (()=>["Not Found!"]))()))
            .then(e=>root.append(...toDOM(e)))
        }
        onupdate(update);
        update();
    })
