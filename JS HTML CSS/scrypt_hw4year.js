var year = prompt ("Введіть рік: ");
function isLeap(numbers) {
    return (year%4==0 ||  (year%400==0 && !(year%100==0)))? "Це високосний рік " : " Це не високоснийц рік";
}
isLeap(year);