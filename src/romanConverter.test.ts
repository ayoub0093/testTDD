
import { test, expect } from "vitest";
import { convert } from "./romanConverter";

test("1 should return I", () => {
    expect(convert(1)).toBe("I");
});

test("2 should return II", () => {
    expect(convert(2)).toBe("II");
});
