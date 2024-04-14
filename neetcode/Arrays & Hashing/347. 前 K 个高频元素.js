var topKFrequent = function (nums, k) {
  const map = new Map();
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  // 解释下面的代码
  // 1. 生成一个长度为 nums.length + 1 的数组，每个元素初始化为一个空数组
  // 2. 遍历 map，将频率相同的元素放到同一个桶中
  // 3. 从后往前遍历桶，取出前 k 个元素

  const buckets = new Array(nums.length + 1).fill(0).map(() => []);
  for (let [num, freq] of map) {
    buckets[freq].push(num);
  }

  const res = [];
  for (let i = buckets.length - 1; i >= 0 && res.length < k; i--) {
    res.push(...buckets[i]);
  }

  return res;
};
