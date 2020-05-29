var size;
var sum=0;
var value=1;
//console.log("Введіть кількість значень " );
size = prompt(" Введіть кількість значень: ");

if(size!=0){
    for (let index = 0; index < size; index++) {
        sum += value;
        value = value*10+1;
    }
}
console.log("the sum is " + sum);