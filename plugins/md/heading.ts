import { Plugin } from "../../reglog-transpiler/src";

const MDHeadingPlugin: Plugin = [
    /^(#{1,6})\s(.*)$/,
    e=>{
        if(e){
            return[["h"+e[1].length,[],e[2]]]
        }else{
            return[];
        }
    },
    ()=>{}
]
export default MDHeadingPlugin