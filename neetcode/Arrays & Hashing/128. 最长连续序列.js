/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let longestSteak = 0;

  for (let num of set) {
    if (!set.has(num - 1)) {
      let currentNum = num;
      let currentSteak = 1;

      while (set.has(currentNum + 1)) {
        currentNum += 1;
        currentSteak++;
      }
      longestSteak = Math.max(longestSteak, currentSteak);
    }
  }
  return longestSteak;
};
