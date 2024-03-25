const maxArr = (nums)  => {
    let max = - Infinity
    let currentNum = 0 
    for( i = 0 ;  i <  nums.length ;  i++){
        currentNum = Math.max(nums[i], currentNum + nums[i])
        max  = Math.max(currentNum, max)


    }
    return max
}

console.log(maxArr) ;
