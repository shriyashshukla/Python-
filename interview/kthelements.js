function findkth(nums,k){
    nums.sort((a,b)=>b-a);
    return nums[k-1];
}
console.log(findkth([1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9],3)); 