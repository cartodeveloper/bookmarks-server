const app = require("../src/app");

describe("App", () => {
  it("does not allow GET without API token", () => {
    return supertest(app).get("/bookmarks").expect(401);
  });
});
