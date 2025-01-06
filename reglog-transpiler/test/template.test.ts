import "./testbase";
import { transpile } from "../src";
import { it, expect, test } from "bun:test";
test("template", ()=>{
    it("p",()=>{
        const el = transpile(`
            #define psample <p class="%2">%1</p>
            \\psample\\hello\\world
        `);
        expect(el.length).toBe(1);
        expect(el[0][0]).toBe("p")
        expect(el[0][2]).toBe("hello");
        expect(el[0][1][0][1]).toBe("world");
    })
    it("img",()=>{
        const el = transpile(`
            #define imgsample <img src="%1"/>
            \\imgsample\\hello
        `);
        expect(el.length).toBe(1);
        expect(el[0][0]).toBe("img");
        expect(el[0][1][0][1]).toBe("hello");
    })
})