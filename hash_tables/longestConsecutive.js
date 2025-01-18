/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  const numsSet = new Set(nums)
  let maxSeq = 0
  for (const num of numsSet){
    let hasLeft = numsSet.has(num-1)
    let hasRight = numsSet.has(num+1)
    let count = 0

    if(!hasLeft && !hasRight){
      count=1
    }else if(!hasLeft && hasRight){
      let currNum = num
      while(hasRight){
        count++
        currNum++
        hasRight = numsSet.has(currNum)
      }
    }
    if(count>maxSeq){
      maxSeq = count
    }
  }
  return maxSeq
};


const nums = [0,3,7,2,5,8,4,6,0,1]

console.log(longestConsecutive(nums))