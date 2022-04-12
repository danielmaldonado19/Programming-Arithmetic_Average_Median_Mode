/*
Program: It has to calculate the arithmetic average, median and mode for any given list. The user should insert the list elements (there is not a limit of elements). The program has to show the unordered list (as the user inserted it), the ordered list and the result for each operation.
1. Insert the formula for the average
2. Insert the formula for the median
*/

var numList = [150, 45, 69, 180];

//1.
function listAverage(array){ //This code block sum all the array elements
    let arraySum = array.reduce(sum);
    function sum(totalSum, arrayElement){
        totalSum = totalSum + arrayElement;
        return totalSum;
    }
    
    let average = arraySum / array.length;
    return average;
}

//2.
var orderedList = numList.sort(compare); //This code block order the array list
function compare(a, b){
    comparation = a - b;
    return comparation;
}

function listMedian(array){
    let midSubindex = parseInt(array.length / 2);   
    let midNum1 = array[midSubindex];
    let midNum2 = array[midSubindex - 1];
    let median;

    if(array.length % 2 === 0){
    //This conditional applies for a list which has no a center element (its even)
        
        median = listAverage([midNum1, midNum2]);
    }
    else{
    //This conditional applies for the list which have a center element (its odd)
        median = array[midSubindex];
    }

    return median;
}





