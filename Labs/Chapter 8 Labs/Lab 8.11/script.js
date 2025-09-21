let nums = [4, 2, 9, 1, 8];
function divideArray(nums) {
  odd_nums = [];
  even_nums = [];
  for (i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0){
      even_nums.push(nums[i]);
    }
    else {
      odd_nums.push(nums[i])
    }
  }

  function compareFunction(a, b) {
    return a - b;
  }

  even_nums.sort(compareFunction);
  odd_nums.sort(compareFunction);

  console.log("Even numbers:");
  if (even_nums.length == 0) {
    console.log("None");
  }
  else {
    for (i = 0; i < even_nums.length; i++) {
      console.log(even_nums[i]);
    }
  }
  console.log("Odd numbers:");
  if (odd_nums.length == 0) {
    console.log("None");
  }
  else {
    for (i = 0; i < odd_nums.length; i++) {
      console.log(odd_nums[i]);
    }
  }
}
