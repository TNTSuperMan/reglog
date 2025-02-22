import { Plugin, VElement, VNode } from "../../reglog-transpiler/src";

let nowElm: VElement | void;
const MDListPlugin: Plugin = [
    /^[\*-+](.*)$/,
    (e):VNode[]=>{
        if(e)
            if(nowElm)
                return nowElm.push(["li",[],e[1]]), []
            else
                return [nowElm = ["ul",[],["li",[],e[1]]]]
        else
            return (nowElm = undefined), []
    },
    ()=>{}
]
export default MDListPlugin