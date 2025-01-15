/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const count = {}
    
    for (let i = 0; i < nums.length; i++) {
        if (count[nums[i]] === undefined) {
            count[nums[i]] = 1
        } else {
            count[nums[i]]++
            
        }
    }
    let maxCount = 0
    let maxNum = -1
    for (let key in count) {
        if (count[key] > maxCount) {
            maxCount = count[key]
            maxNum = key
        }
    }
    return Number(maxNum)
};



let nums = [3,2,3]

console.log(majorityElement(nums))