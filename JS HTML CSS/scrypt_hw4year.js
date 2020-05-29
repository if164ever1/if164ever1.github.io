var year = prompt ("Введіть рік: ");
function isLeap(numbers) {
    return (year%4==0)? "Це високосний рік " : " Це не високоснийц рік";
}
isLeap(year);