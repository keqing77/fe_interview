/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const len = strs.length;
  if (strs === null || len === 0) return [[""]];
  if (len === 1) return [strs];

  const map = new Map();
  const res = [];

  for (let i = 0; i < len; i++) {
    const str = strs[i];
    const key = str.split("").sort().join("");
    if (map.has(key)) {
      map.get(key).push(str);
    } else {
      map.set(key, [str]);
    }
  }

  for (let [key, value] of map) {
    res.push(value);
  }

  return res;
};
