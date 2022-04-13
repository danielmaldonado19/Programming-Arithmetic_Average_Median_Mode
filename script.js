/*
Program: It has to calculate the arithmetic average, median and mode for any given list. The user should insert the list elements (there is not a limit of elements). The program has to show the unordered list (as the user inserted it), the ordered list and the result for each operation.
1. Insert the formula for the average
2. Insert the formula for the median
3. Insert the formula for the mode
*/

var numList = [4,5,6,5,4,6,6,5,8,7,9,4,1,1,2,3,5,4,6,6,1,1,2,3,8,7,8];

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

//3.
function listMode(array){
    const modeObject = {};
    let modePair;
    let modeNumber;
    let modeCounter;
    /*This is an object variable which will store the pair (numList element, how many times appears in the original array)*/

    array.map(listCount);
    /* This method go over each numList item and activate the function listCount in each one*/
    function listCount(item){ 
        if(modeObject[item]){
            modeObject[item] = modeObject[item] + 1;
        }
        else{
            modeObject[item] = 1;
        }
        /*Conditional count one unit for each time the item appears in the numList array. ITEM = NUMBER*/
    }

    var modeArray = Object.entries(modeObject);
    /* Object.entries() method convert an object to array*/

    modeArray.sort(order);
    function order(a, b){
        return b[1] - a[1];
    }
    mode = modeArray[0];

    modeNumber = mode[0];
    modeCounter = mode[1];

    return modeNumber;
}




