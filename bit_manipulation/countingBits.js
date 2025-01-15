/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let nums = [0,1,1,2]
    let offset = 2
    let power = 2

    if(n<4){
        return nums.slice(0,n+1)
    }

    for (let i=4; i<=n; i++) {
        if(i% Math.pow(2,power)===0){
            offset = Math.pow(2,power)
            power++
            nums.push(1+nums[i-offset])
        }else{
            nums.push(1+nums[i-offset])
        }
    }
    return nums
};

console.log(countBits(8))