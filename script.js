/*
Program: It has to calculate the arithmetic average, median and mode for any given list. The user should insert
the list elements (no limit elements number). The program has to show the unordered list (as the user inserted it), the ordered list and the result for each operation.
1. Insert the formula for the average
*/

var numList = [150, 45, 180, 7];
var listSum;
var average;

//1.
listSum = numList.reduce(sum);
function sum(totalSum, listElement){
    totalSum = totalSum + listElement;
    return totalSum;
}

function listAverage(listSum){
    let listAverage = listSum / numList.length;
    return listAverage;
}

