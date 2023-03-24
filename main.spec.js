import { describe, it, expect } from "vitest";
import { main } from "./main";

describe("simple", () => {
  it("should say hello", async () => {
    const expected = "Hello Azure Cloud Native Day!";
    const actual = main();
    expect(actual).toBe(expected);
  });
});
