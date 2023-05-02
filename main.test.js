const question1 = require("./question1.js")
const question2 = require("./question2.js")

test("outputs the correct reversed string", () => {
  expect(question1("bano qabil")).toBe("libaq onab")
})

test("outputs the incorrect reversed string", () => {
  expect(question1("hello")).toBe("olleh")
})

test("outputs the filter strings", () => {
  const output = question2(["hi", "hello", "hey", "howdy"])
  expect(output).toEqual(["hello", "howdy"])
})

test("outputs the filter strings", () => {
  expect(question2(["my", "hi", "good"])).toEqual(["good"])
})
