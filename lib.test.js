const { test, expect } = require("@jest/globals");
const lib = require("./lib");

test("avg([3, 5, 7]) should be 5", () => {
    expect(lib.avg([3, 5, 7])).toBe(5);
});

test("avg([-5, 5]) should be 0", () => {
    expect(lib.avg([-5, 5])).toBe(0);
});

test("prime([7]) should be true", () => {
    expect(lib.prime([7])).toBeTruthy();
});

test("fact([3]) should be 6", () => {
    expect(lib.fact([3])).toBe(6);
});