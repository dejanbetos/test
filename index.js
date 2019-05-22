module.exports = function test(string) {
  if (typeof string !== "string") throw new TypeError("Test wants a string!");
  return string.replace(/\s/g, "");
};
