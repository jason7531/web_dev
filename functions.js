let num = Number(prompt("Enter a number"))

function isEven(num) {
    if (num % 2 === 0)
        return true;

    else
        return false;

}
let ret = isEven(num);
console.log("If the number is even: " + ret)

function factorial(num) {
    let fact = 1
    while (num != 0) {
        fact = fact * num;
        num--;
    }
    return fact;
}
let result = factorial(num);
console.log("The factorial of the number is " + result)
var myStr = prompt("Enter a snake case sentence");

function replace(string) {
    var newStr = myStr.replace(/_/g, '-');
    return newStr;
}
let newStr = replace(myStr);
console.log(newStr);