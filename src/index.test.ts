import eva from ".";

describe("eva entrypoint", () => {
  it("works", () => {
    expect(() => eva.helloWorld()).not.toThrow();
  });
});
