import { toDOM, type VNode } from "./vnode";
const w = window;

export default (root: HTMLElement, routes: {[key: string]: (()=>VNode[] | Promise<VNode[]>) | undefined}) => 
    new Promise(res=>
        document.readyState == "loading" ?
            document.addEventListener(
                "DOMContentLoaded", res):
            res(0))
    .then(e=>{
        const update = () => {
            while(root.firstChild)
                root.firstChild.remove();
            Promise.resolve().then(e=>(
                routes[w.location.hash||""] ??
                routes["404"] ??
                (()=>["Not Found!"]))())
            .then(e=>root.append(...toDOM(e)))
        }
        window.addEventListener("hashchange", update);
    })
