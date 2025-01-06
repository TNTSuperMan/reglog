import "./testbase";
import { transpile } from "../src";
import { it, expect, test } from "bun:test";
test("paragraph", ()=>{
    it("aline",()=>{
        const el = transpile(`
            /ABC
        `);
        expect(el.length).toBe(1);
        expect(el[0][0]).toBe("P");
        expect(el[0][2]).toBe("ABC");
    })
    it("multiline",()=>{
        const el = transpile(`
            /ABC
            /DEF
        `);
        expect(el.length).toBe(1);
        expect(el[0][0]).toBe("P");
        expect(el[0][2]).toBe("ABC\nDEF");
    })
    it("split",()=>{
        const el = transpile(`
            /ABC

            /DEF
        `);
        expect(el.length).toBe(2);
        expect(el[0][0]).toBe("P");
        expect(el[1][0]).toBe("P");
        expect(el[0][2]).toBe("ABC");
        expect(el[1][2]).toBe("DEF");
    })
})