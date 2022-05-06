// TODO: add tests
// hint: analyze the existing tests for the coding katas
// the docs for chai bdd can be found here: https://www.chaijs.com/api/bdd/

describe("positiveMultiply", function () {
  // it("should ...", function () {});
  // multily two positive numbers
  // multiply a negative and positive number
  // multiply two negative numbers

  it("should return the product of two numbers", function () {
    const result = positiveMultiply(2, 3);
    chai.expect(result).to.equal(6);
  });

  it("should return a positive number", function () {
    const result = positiveMultiply(2, -3);
    chai.expect(result).to.equal(6);
  });

  it("should return 6", function () {
    const result = positiveMultiply(-2, -3);
    chai.expect(result).to.equal(6);
  });
});
