import type { Plugin } from "..";

let p: HTMLParagraphElement | undefined;

const ParagraphPlugin: Plugin = [
    /^\/.*$/,
    (e,t)=>{
        if(!e) return [];
        if(p){
            p.textContent += "\n" + t.substring(1);
            return [];
        }else{
            p = window.document.createElement("p");
            p.textContent = t.substring(1);
            return [p];
        }
    },
    ()=>p = undefined
]
export default ParagraphPlugin;
