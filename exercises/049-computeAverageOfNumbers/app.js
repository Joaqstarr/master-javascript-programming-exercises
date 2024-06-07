// Write your function here
function computeAverageOfNumbers(nums){
    let total = 0;
    if(nums.length == 0) return 0;
    for(let i = 0; i < nums.length; i++){
        total += nums[i];
    }
    total = total/nums.length;
    return total;
}
computeAverageOfNumbers([1, 4 , 3]);