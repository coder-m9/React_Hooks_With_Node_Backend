const chai = require("chai");
const { expect } = require("chai");
const app = require("../app");
chai.use(require("chai-http"));

describe("Get User Metrics", function() {
  this.timeout(2000);
  before(() => {});
  after(() => {});

  it("should return trailer url", () =>
    chai
      .request(app)
      .get("/api/v1/analytics/userstats")
      .then(res => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
      }));
});

describe("Get User Metrics filter by name and status", function() {
  this.timeout(2000);
  before(() => {});
  after(() => {});

  it("should return trailer url", () =>
    chai
      .request(app)
      .get("/api/v1/analytics/userstats?name=john&status=completed")
      .then(res => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
      }));
});
