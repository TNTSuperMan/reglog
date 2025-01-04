import "./testbase";
import { transpile } from "../src";
import { it, expect, suite } from "vitest";
suite("template", ()=>{
    it("p",()=>{
        const el = transpile(`
            #define psample <p class="%2">%1</p>
            \\psample\\hello\\world
        `);
        expect(el.length).toBe(1);
        expect(el[0].tagName).toBe("p")
        expect(el[0].textContent).toBe("hello");
        expect(el[0].className).toBe("world");
    })
    it("img",()=>{
        const el = transpile(`
            #define imgsample <img src="%1"/>
            \\imgsample\\hello
        `);
        expect(el.length).toBe(1);
        expect(el[0].tagName).toBe("img");
        expect(el[0].getAttribute("src")).toBe("hello");
    })
})