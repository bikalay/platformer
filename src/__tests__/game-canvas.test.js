const {GameCanvas} = require("../game-canvas");
describe("Game Canvas", () => {
  it("should be singleton", () => {
    const gc1 = new GameCanvas(document.createElement('div'));
    const gc2 = new GameCanvas(document.createElement('div'));
    expect(gc1).toBe(gc2);
  })
});
