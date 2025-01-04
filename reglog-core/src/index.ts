const w = window;

export default (routes: {[key: string]: (()=>Node[]) | undefined},
    config: (HTMLElement | string)[]) => 
    new Promise(res=>
        document.readyState == "loading" ?
            document.addEventListener(
                "DOMContentLoaded", res):
            res(0))
    .then(e=>{
        let main: HTMLElement | undefined;
        config.forEach(e=>document.body.appendChild(
            typeof e == "string" ?
                main = w.document.createElement(e) : e))
        const update = () => {
            while(main?.firstChild)
                main?.firstChild.remove();
            main?.append(...(
                routes[w.location.hash||""] ??
                routes["404"] ??
                (()=>[document.createComment("empty")])
            )())
        }
        window.addEventListener("hashchange", update);
    })
