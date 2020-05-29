var arr = {};
var string = "HelLo world";
var string2 = string.split();

for (let index = 0; index < string.length; index++) {
    var a = (string[index].split());
    //arr.push((string[index].split()));
    !(arr.hasOwnProperty(a)) ? arr[index] += a : break;
    console.log(arr);
}