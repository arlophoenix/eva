import { main } from ".";

describe("eva entrypoint", () => {
  it("works", () => {
    expect(() => main.helloWorld()).not.toThrow();
  });
});
