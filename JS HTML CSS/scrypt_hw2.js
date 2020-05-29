var arr = [1,2,3,4,5,6,7,8,9,10];
var sum=0;
var prod=1;
for (let index = 0; index < arr.length; index++) {
    sum += arr[index];
    prod *= arr[index];
}
console.log("The sum of numbers is " + sum);
console.log("The product of numbers is " + prod);