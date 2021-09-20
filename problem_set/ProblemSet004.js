// Problem 1 
// write a code to generate binary number from decimal numbers
// function getBinary(number) => string
// bonus:
// 1. with Recursion, without Recursion

function getBinaryNumber(num){
    return ""
}
// 4 => "100"
// 7 => "111"
// 54 => "110110"

// 31
// 15r1 => "1"
//  7r1 => "11"
//  3r1 => "111"
//  1r1 => "1111"
//  0r1 => "11111"




// Problem 2
// Two Sum
// Given an array of integers `nums` and an integer `target`, return indices of
// the two numbers such that they add up to `target`
// You may assume that each input would have exactly one solution
const twoSum = function (nums, target){
    return [-1,-1]
}
// twoSum([2,7,11,15], 9) => [0,1]
// twoSum([3,2,4], 6) => [1,2]
// twoSum([4,8,1,6,3], 14) => [1,3]


// Problem 3
//
// Cutting a rod 
// Given a rod of length n inches and an array of prices that includes prices of all pieces of size smaller than n. 
// Determine the maximum value obtainable by cutting up the rod and selling the pieces. For example, if the length
// of the rod is 8 and the values of different pieces are given as the following, then the maximum obtainable value
// is 22 (by cutting in two pieces of lengths 2 and 6) 
const LENGTH = [
    {length:1, price:1},
    {length:2, price:5},
    {length:3, price:8},
    {length:4, price:9},
    {length:5, price:10},
    {length:6, price:17},
    {length:7, price:17},
    {length:8, price:20}
]
const INIT_LENGTH_1 = 8 
const INIT_LENGTH_2 = 9

function getMaxPrice(initLength, length=LENGTH){
    return -1
}
console.log(getMaxPrice(INIT_LENGTH_1)) // Expected Result: 22 
console.log(getMaxPrice(INIT_LENGTH_2)) // Expected Result: 25
// Coin Change
// 
// def getCoinChangeCombinations(sum=5, denominations=[1,2,5]):
//       if(sum === 0) return 1
//       if(sum < 0) return 0
//       result = 0
//       for e in denominations:
//          result += getCoinChangeCombinations(sum - e, denominations)
//      return result