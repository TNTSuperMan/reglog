import ParagraphPlugin from "./plugins/paragraph";
import TemplatePlugin from "./plugins/template";

export type Plugin = [RegExp, (res: RegExpExecArray | null, raw: string)=>HTMLElement[], ()=>void]
const plugins: Plugin[] = [
    TemplatePlugin,
    ParagraphPlugin
];
export const addPlugins = (...plugin: Plugin[]) => plugins.push(...plugin);

export const transpile = (code: string): HTMLElement[] => {
    plugins.forEach(e=>e[2]());
    const contents = [];
    for(const line of code.replace("\r","").split("\n")) //CRLF対応
        for(const plugin of plugins)
            contents.push(...plugin[1](plugin[0].exec(line.trim()), line.trim()));
    return contents;
}
