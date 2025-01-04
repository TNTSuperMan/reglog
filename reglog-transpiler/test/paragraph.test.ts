import "./testbase";
import { transpile } from "../src";
import { it, expect, suite } from "vitest";
suite("paragraph", ()=>{
    it("aline",()=>{
        const el = transpile(`
            /ABC
        `);
        expect(el.length).toBe(1);
        expect(el[0].tagName).toBe("P");
        expect(el[0].textContent).toBe("ABC");
    })
    it("multiline",()=>{
        const el = transpile(`
            /ABC
            /DEF
        `);
        expect(el.length).toBe(1);
        expect(el[0].tagName).toBe("P");
        expect(el[0].textContent).toBe("ABC\nDEF");
    })
    it("split",()=>{
        const el = transpile(`
            /ABC

            /DEF
        `);
        expect(el.length).toBe(2);
        expect(el[0].tagName).toBe("P");
        expect(el[1].tagName).toBe("P");
        expect(el[0].textContent).toBe("ABC");
        expect(el[1].textContent).toBe("DEF");
    })
})