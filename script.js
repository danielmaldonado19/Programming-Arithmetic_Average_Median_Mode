/*
Program: It has to calculate the arithmetic average, median and mode for any given list. The user should insert
the list elements (no limit elements number). The program has to show the unordered list (as the user inserted it), the ordered list and the result for each operation.
1. Insert the formula for the average
2. Insert the formula for the median
*/

var numList = [150, 45, 180, 100];

//1.
function listAverage(array){
    let arraySum = array.reduce(sum);
    function sum(totalSum, arrayElement){
        totalSum = totalSum + arrayElement;
        return totalSum;
    }
    //This code block sum all the array elements

    let average = arraySum / array.length;
    return average;
}

//2.1.
/*var orderedList = numList.sort(compare); //This code block order the array list
function compare(a, b){
    comparation = a - b;
    return comparation;
}
console.log(numList);
if(numList.length % 2 === 0){
    let midSubindex = numList.length / 2;
    let midNum1 = numList[midSubindex];
    let midNum2 = numList[midSubindex - 1];
    let medianList = [midNum1, midNum2];
    

}
else{

}
*/

