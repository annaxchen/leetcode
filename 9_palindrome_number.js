/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let stringx = x.toString()
    console.log(stringx)
    let indexnum = [];
    for (let i = 0; i< stringx.length; i++) {
        let digit = stringx[i];
        indexnum.push(digit)}
    for (let j = 0; j<stringx.length/2; j++) {
        if (indexnum[j] === indexnum[indexnum.length-1-j]) 
        {continue}
        else {return false}
    }
    return true
};
