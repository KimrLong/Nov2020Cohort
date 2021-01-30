// Given an array nums. We define a running sum of an 
// array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.
// Example 1
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
// Example 2
// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

// const { kMaxLength } = require("buffer");





// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var runningSum = function(nums) {
//     if 
    
// };








// Write a function findLongestSubString that accepts a string and returns
// the length of longest sub string with unique characters
// findLongestSubString('thisishowwedoit')); //6 (wedoit)
// findLongestSubString('supercalifragilisticexpialidocious')); //10 (supercalif)

//loop
//sets   // like using an array new Set() == new Array (100??)

//with sliding window you use hwile loop

// var sStr = "thisishowwedoit";
// var lStr = "supercalifragilisticexpialidocious";

const findLongestSubString =(s) =>{
//     var sStr = "thisishowwedoit";
//     var lStr = "supercalifragilisticexpialidocious";
//     max str= 0;
//  if sStr.length > 1 ++1

    let set = new Set();

    let left = 0;
    let right = 0; //pointers
    let maxLength = 0;

    while(right < s.length){  //loop until right is at the end
        if(!set.has(s[right]))
        { //look up '!'
            set.add(s[right]);
            maxLength = Math.max(maxLength, set.size); //.size is same as array.length
            right++;  //increment just right pointer
        }
        else {
            set.delete(s[left]); //chops off beggining
            left++;
        }
    }

    return maxLength;

}

console.log(findLongestSubString('supercalifragilisticexpialidocious'));



//-------NOTES------------------------//
//n squared BI G O
//ask if you can use built in methods














    