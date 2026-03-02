import { it, describe, expect } from "vitest";

describe("add", () => {
  it("adds two numbers", () => {
    expect(add(2, 3)).toEqual(5);
  });
});

function add(a: number, b: number) {
  return a + b;
}
