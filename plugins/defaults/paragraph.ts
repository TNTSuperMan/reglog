import type { Plugin } from "../../reglog-transpiler/src";
import type { VText } from "../../reglog-transpiler/src/vnode";

let p: ["p", [], VText] | undefined;

const ParagraphPlugin: Plugin = [
    /^\/.*$/,
    (e,t)=>{
        if(!e){
            p = undefined;
            return [];
        }
        if(p){
            p[2] += "\n" + t.substring(1);
            return [];
        }else{
            p = ["p", [], t.substring(1)];
            return [p];
        }
    },
    ()=>p = undefined
]
export default ParagraphPlugin;
