/**
 * @param {string[]} strs
 * @return {string[][]}
 */

const checkAnagram = (str1, str2)=>{
    const freq = {}
    const len1 = str1.length
    if(str1.length != str2.length){
        return false
    }else{
        for(let i=0;i<str1.length;i++){
            if(freq[str1[i]]=== undefined){
                freq[str1[i]] = 1
            }else{
                freq[str1[i]]++
            }
        }
        for(let i=0;i<str1.length;i++){
            if(freq[str2[i]]>0){
                freq[str2[i]]--
            }
        }

        const sumfreq = Object.values(freq).reduce((a,b)=>a+b,0)
        if(sumfreq===0){
            return true
        }else{
            return false
        }
    }
}


var groupAnagrams = function(strs) {
    const output = {}

    for(let i=0;i<strs.length;i++){
        const key = Object.keys(output)
        if(key.length===0){
            output[strs[i]] = [strs[i]]
        }else{
            let count = 0
            let currentKey = key[0]
            for(let j=0;j<key.length;j++){
                if(checkAnagram(strs[i],key[j])){
                    count=1
                    currentKey = key[j]
                    break;
                }
            }
            if(count==1){
                output[currentKey].push(strs[i])
            }else{
                output[strs[i]] = [strs[i]]
            }

        }
    }
    return Object.values(output)
};

const strs = ["ddddddddddg","dgggggggggg"]

//console.log(groupAnagrams(strs))
console.log(checkAnagram(strs[0],strs[1]))