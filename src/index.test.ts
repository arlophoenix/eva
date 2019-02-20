import eva from ".";

describe("eva entrypoint", function() {
  it("works", function() {
    expect(() => eva.helloWorld()).not.toThrow();
  });
});
