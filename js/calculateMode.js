/*
1. Determine frequency counts
2. Return all with same highest frequency
  - Could sort the dictionary values - but would still have to look for multiple values
  - Loop through dictionary - keep track of highest with a tracker, and push keys to list
*/

const calculateMode = (lst) => {
  let count = new Map();
  let highest = 0;
  let ans = [];
  for (let i =0; i<lst.length; i++) {
    count.set(lst[i], count.has(lst[i]) ? count.get(lst[i]) +1 : 1);
    if (count.get(lst[i]) > highest) {
      highest = count.get(lst[i])
      ans = [lst[i]]
    } else if (count.get(lst[i]) === highest) {
      ans.push (lst[i])
    }
  }
  return ans
}

exports.calculateMode = calculateMode;