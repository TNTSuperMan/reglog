import { addPlugins, transpile } from "@reglog/transpiler";
import router from "@reglog/core";

const plugin_promise = Promise.resolve().then(()=>
    Reflect.get(globalThis, "plugins") ?? []
).then(e=>Promise.all(e.map((e:string)=>import(e)))
).then(e=>addPlugins(...e))

router(new Proxy({},{
    get:(_, path)=>typeof path == "symbol" ?
        Reflect.get(_, path) :
        plugin_promise
            .then(()=>fetch(`/pages/${path}.txt`))
            .then(e=>e.json())
            .then(transpile)
}),["main"])