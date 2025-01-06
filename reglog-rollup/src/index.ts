import { transpile } from "@reglog/transpiler"
import type { Plugin } from "rollup"

export const RollupPluginReglog: Plugin = {
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
