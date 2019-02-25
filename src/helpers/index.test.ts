import { percentChance } from ".";

// eslint-disable-next-line no-var
declare var global: { Math: { random(): number } };

describe("percentChance", () => {
  it("throws when too large", () => {
    expect(() => percentChance(101)).toThrow();
  });

  it("throws when too small", () => {
    expect(() => percentChance(-1)).toThrow();
  });

  it("100 percent returns true", () => {
    expect(percentChance(100)).toBeTruthy();
  });

  it("0 percent returns false", () => {
    expect(percentChance(0)).not.toBeTruthy();
  });

  it("is inclusive", () => {
    global.Math = {
      random: () => 0.5,
    };
    expect(percentChance(50)).not.toBeTruthy();
  });
});
