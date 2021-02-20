const func = require("../lib/func");
const assert = require("assert");

describe("function test add", function () {
	it("should add 1 + 2 return 3 ", function () {
		assert.equal(func.doadd(1, 2), 3);
	})

	it("should add return 0", function () {
		assert.equal(func.doadd("a", "b"), 0);
	})
	// error example
// 	it("will return error", function () {
// 		assert.equal(func.doadd(1, 2), 0);
// 	})
});
