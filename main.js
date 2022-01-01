// שאלה 1
// function digitSum(sum,num){
//     if (num){
//         sum = sum + num % 10;
//         num = Math.floor(num / 10);
//         return digitSum(sum, num)
//     }
//     return sum
// }
// console.log(digitSum(0,357));

// שאלה 2
// let arr = [9,5,4,2,90];
// function findMinNumber(min,array,i){
//     if(array.length === i){
//         return min;
//     }
//    if(min > arr[i]) min = arr[i];
    
//    return findMinNumber(min, array, i+1)
// }
// console.log(findMinNumber(arr[0],arr,0));

// שאלה 3
// let arrayNumbers = [];
// function getArrayNumbers() {
//     if (arrayNumbers.length === 3) {
//         return arrayNumbers;
//     }
//     let input = prompt("enter a number");
//     if (input) {
//         arrayNumbers.push(input)
//     }
//     return getArrayNumbers();
// }
// console.log(getArrayNumbers());

// שאלה 4
// let arr = [19,55,41,22,90];
// const mergeArrays = (a, b) => {
//     const c = []

//     while (a.length && b.length) {
//         c.push(a[0] > b[0] ? b.shift() : a.shift())
//     }

//     while (a.length) {
//         c.push(a.shift())
//     }
//     while (b.length) {
//         c.push(b.shift())
//     }

//     return c
// }

// const mergeSort = (a) => {
//     if (a.length < 2) return a
//     const middle = Math.floor(a.length / 2)
//     const a_l = a.slice(0, middle)
//     const a_r = a.slice(middle, a.length)
//     const sorted_l = mergeSort(a_l)
//     const sorted_r = mergeSort(a_r)
//     return mergeArrays(sorted_l, sorted_r)
// }
// console.log(arr);
// arr = mergeSort(arr);
// console.log(arr);