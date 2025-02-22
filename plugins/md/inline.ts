import { Plugin } from "../../reglog-transpiler/src";
import { html2vnode } from "./html2vnode";

export const compileInline = (e: string): string => {
    if(/<[a-z][\s\S]*?>|<\/[a-z][\s\S]*?>/i.test(e)) return e;
    let res = e;
    res = res.replaceAll(/\*\*(.+)\*\*/g,(raw, exp)=>`<b>${exp}</b>`)
    res = res.replaceAll(/\*(.+)\*/g,(raw, exp)=>`<i>${exp}</i>`)
    res = res.replaceAll(/~~(.+)~~/g,(raw, exp)=>`<s>${exp}</s>`)
    res = res.replaceAll(/\[(.+)\]\((.+)+\)/g,(raw, view, url)=>`<a href=${url}>${view}</a>`)
    return res+"<br>";
}
const MDInlinePlugin: Plugin = [
    /\/(.*)/,
    (e,raw)=>e?[html2vnode(compileInline(raw.substring(1)))]:[],
    ()=>{}
]
export default MDInlinePlugin