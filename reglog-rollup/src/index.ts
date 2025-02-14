import { addPlugins, transpile, type Plugin } from "@reglog/transpiler"
import type { Plugin as RollupPlugin } from "rollup"

export const RollupPluginReglog = (plugins: Plugin[]): RollupPlugin =>{
    addPlugins(...plugins);
    return{
        name: "@reglog/plugin-rollup",
        transform(code, id){
            if(/\.rlg$/.test(id)){
                return {
                    code: "export default " + JSON.stringify(transpile(code)),
                    map: null
                }
            }
        }
    }
}
