// var a  =  1
// var all = new Array   
// for (i =0 ; i<4; i++){
//  all[i] = a ; 
//  a++
// }

// alert(all[1])
// alert(all[2])
// alert(all[3])

// let arr = []
// for (i =0 ; i<4; i++){
//     arr[i] = i
// }
// console.log(arr)

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var runningSum = function(nums) {
    let str1 =  new Array(nums.length)
    str1[0] = nums[0]
for ( i = 0 ;  i<nums.length; i++){
 

    str1 = str1[i - 1 ] + nums[i+1] 
  
    
    console.log(runningSum)
 
  }
 
}



// this forEach is a method of array, Perform an action on each element, of an array. 


// we can't do the chaining  here beacuse is doesnt create new elmemnts 
// and we can't use return keyword in forEach elements  
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
number.forEach((curElement) => {
console.log(curElement)
})
console.log(number)