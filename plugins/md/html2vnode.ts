import { VNode } from "../../reglog-transpiler/src";
import { VNodeFromDOM } from "../../reglog-transpiler/src/vnode";

export const html2vnode = (html: string): VNode =>
    VNodeFromDOM(new DOMParser().parseFromString(html,"text/html").documentElement)