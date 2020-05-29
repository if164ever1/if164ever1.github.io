var arr= [1,2,3,4,5,6,7,8,9,10];
for (let index = 0; index < arr.length; index++) {
    if (arr[index]%2==0) {console.log(index + "-" + arr[index] + "--> парне число");}
    else {console.log(index + "-" + arr[index] + "--> не парне число");}
}