/**
 * @param {string[]} strs
 * @return {string[][]}
 */

const convertToBinary = (str1)=>{
    const table = {
        '':0,
        'a':0,
        'b':0,
        'c':0,
        'd':0,
        'e':0,
        'f':0,
        'g':0,
        'h':0,
        'i':0,
        'j':0,
        'k':0,
        'l':0,
        'm':0,
        'n':0,
        'o':0,
        'p':0,
        'q':0,
        'r':0,
        's':0,
        't':0,
        'u':0,
        'v':0,
        'w':0,
        'x':0,
        'y':0,
        'z':0
    }
    for(let i=0;i<str1.length;i++){
        table[str1[i]]++
    }
    return Object.values(table)
}


var groupAnagrams = function(strs) {
    const output = {}

    for(let i=0;i<strs.length;i++){
        const binary = convertToBinary(strs[i])
        if(output[binary]===undefined){
            output[binary] = [strs[i]]
        }else{
            output[binary].push(strs[i])
        }
    }
    return Object.values(output)
};

const strs = ["a"]

console.log(groupAnagrams(strs))
//console.log(convertToBinary('eat'))