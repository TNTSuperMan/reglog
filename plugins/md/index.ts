import { addPlugins } from "../../reglog-transpiler/src";
import MDHeadingPlugin from "./heading";
import MDInlinePlugin from "./inline";
import MDListPlugin from "./list";

addPlugins(MDHeadingPlugin, MDInlinePlugin, MDListPlugin)