const fs = require("fs");

const html = fs.readFileSync("index.html", "utf8");

describe("Basic CSS Selectors Assignment (50 Marks)", () => {

    // 5 Marks
    test("Universal selector (*) is present", () => {
        expect(html).toMatch(/\*\s*\{/);
    });

    // 5 Marks
    test("Universal selector sets Arial font", () => {
        expect(html).toMatch(/font-family\s*:\s*Arial/i);
    });

    // 5 Marks
    test("Element selector h1 exists", () => {
        expect(html).toMatch(/h1\s*\{/);
    });

    // 5 Marks
    test("h1 has text-align center", () => {
        expect(html).toMatch(/text-align\s*:\s*center/i);
    });

    // 5 Marks
    test("ID selector #heading exists", () => {
        expect(html).toMatch(/#heading\s*\{/);
    });

    // 5 Marks
    test("ID selector color is red", () => {
        expect(html).toMatch(/#heading[\s\S]*color\s*:\s*red/i);
    });

    // 5 Marks
    test("Class selector .info exists", () => {
        expect(html).toMatch(/\.info\s*\{/);
    });

    // 5 Marks
    test(".info has font-size 18px", () => {
        expect(html).toMatch(/font-size\s*:\s*18px/i);
    });

    // 5 Marks
    test("Grouping selector h2, p exists", () => {
        expect(html).toMatch(/h2\s*,\s*p\s*\{/);
    });

    // 5 Marks
    test("Grouping selector has margin 10px", () => {
        expect(html).toMatch(/margin\s*:\s*10px/i);
    });

});