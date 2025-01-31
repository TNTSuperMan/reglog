import ParagraphPlugin from "./plugins/paragraph";
import TemplatePlugin from "./plugins/template";
import type { VNode } from "./vnode";

export type Plugin = [RegExp, (res: RegExpExecArray | null, raw: string)=>VNode[], ()=>void]
const plugins: Plugin[] = [
    TemplatePlugin,
    ParagraphPlugin
];
export const addPlugins = (...plugin: Plugin[]) => plugins.push(...plugin);

export const transpile = (code: string): VNode[] => {
    plugins.forEach(e=>e[2]());
    const contents: VNode[] = [];
    for(const line of code.replace("\r","").split("\n")) //CRLF対応
        for(const plugin of plugins)
            contents.push(...plugin[1](plugin[0].exec(line.trim()), line.trim()));
    return contents;
}
