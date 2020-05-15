let arr = [1, 2, 3, 4, 5]

function reverseArray(arr) {
    for (i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i])
    }

}
reverseArray(arr);

function max(arr) {
    let max = arr[0]
    for (i = 0; i < arr.length; i++) {
        if (arr[i] >= max)
            max = arr[i]
    }
    console.log("The max element is :" + max)
}

function sumArray(arr) {
    let sum = 0
    for (i = 0; i < arr.length; i++)
        sum += arr[i]
    console.log("The sum of elements is: " + sum)
}

function isUniform(arr) {
    let x = arr[0]
    for (i = 0; i < arr.length; i++) {
        if (x != arr[i])
            return false;
    }
    return true;
}
max(arr);
sumArray(arr);
let result = isUniform([2, 2, 2, 2, 2]);
console.log("If the array is uniform: " + result)