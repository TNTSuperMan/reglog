import type { Plugin } from "../../reglog-transpiler/src"
import { VNodeFromDOM } from "../../reglog-transpiler/src/vnode";
const templates: Map<string, string> = new Map();
const TemplatePlugin: Plugin = [
    /^#define\s+(\w+)\s+(.+)$/,
    (e,l)=>{
        if(e){
            templates.set(e[1], e[2]);
        }else if(/^\\\w+(\\[^\\]*)*$/.test(l)){
            const splitted = l.split("\\");
            if(templates.has(splitted[1])){
                const parser = new window.DOMParser();
                const dom = parser.parseFromString(
                    splitted.splice(2).reduce((e,t,i)=>e.replaceAll("%"+(i+1), t),
                    (templates.get(splitted[1])??"")),
                    "text/xml").documentElement
                return [VNodeFromDOM(dom)]
            }else{
                console.warn(`not found template: ${splitted[1]}`);
            }
        }
        return [];
    },
    ()=>{
        templates.clear();
    }
]
export default TemplatePlugin;
