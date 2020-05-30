
var str = 'hello world';
var arr = str.split("");
var letterInString = {};

for (let index = 0; index < arr.length; index++) {
    if(arr[index]==" ") continue;
    if(letterInString[arr[index]] == undefined) 
        letterInString[arr[index]] = 0;
    letterInString[arr[index]]++;
}

for (var i in letterInString){
    console.log(i + ' = ' + letterInString[i]);
}

//