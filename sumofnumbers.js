const listOfNum = [1,2,3,4];

function sumFor(nums) {
  let add = 0;
  for (const curr of nums) {
    add += curr;
  }
  return add;
}
console.log(sumFor(listOfNum));

function sumWhile(nums) {
    let curr = 0;
    let add = 0;
    while (curr < nums.length) {
      add += nums[curr];
      curr++;
    }
    return add;
}
console.log(sumWhile(listOfNum));

function sumRecursion(num) {
  if (num.length === 0) {
    return 0;
  }
  let total = 0;
  return num[0] + sumRecursion(num.slice(1, num.length));
}
console.log(sumRecursion(listOfNum));

function sumTheSimpleWay(num) {
  return _.reduce(num, function(memo, item) {return memo + item;}, 0);
}
console.log(sumTheSimpleWay(listOfNum));
