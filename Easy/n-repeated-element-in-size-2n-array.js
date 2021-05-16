/* In a array nums of size 2 * n, there are n + 1 unique elements, and exactly one of these elements is repeated n times.

Return the element repeated n times.



Example 1:

Input: nums[1,2,3,3]
Output: 3
Example 2:

Input: nums[2,1,2,5,3,2]
Output: 2 */

var repeatedNTimes = function(A) {
    let a = A.find((a, index, array) => array.indexOf(a) !== index)
    console.log(a)
  };