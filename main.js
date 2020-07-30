/* Using control structures, do the following: */

// 1. Display in the console the numbers from 1 to 20
function displayNrFrom1to20() {
    console.log('====================== \n Numbers from 1 to 20: \n======================');
    
    for (let i = 0; i < 20; i++) {
        console.log(i+1);
    }
}

displayNrFrom1to20();


// 2. Display in the console the odd numbers from 1 to 20
function displayOddNr() {
    console.log('========================== \n Odd numbers from 1 to 20: \n==========================');

    for (let i = 0; i < 20; i+=2) {
        console.log(i+2);
    }    
}

displayOddNr();

// 3. Compute the sum of the elements of an array and display it in the console
function sumOfElem() {
    const arr = [2, 7, 18, 4, 23, 9, 14, 4];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log('======================== \n Sum of the elements is: \n========================');
    console.log(sum);
}

sumOfElem();
        
// 4. Compute the maximum of the elements of an array and display it in the console 
const arr2 =[90, 7, 12, 114, 0, 15, 44, 82, 84];

function maxOfArr(array) {
    console.log('============================ \n Maximum of the elements is: \n============================');
    
    let max = array[0];

    for (var i = 1; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
        }
    }
    return max;
}

console.log(maxOfArr(arr2));

// 5. Compute how many times a certain element appears in an array
const arr3 = [4, 3, 2, 1, 7, 4, 7, 2, 2, 1, 1, 4, 5];  

console.log('========================================== \n How many times a certain element appears: \n==========================================');

function frequencyOfNr(array, number) {

    let count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === number) {
            count++;
        }
    }
    console.log(`Number ${number} appears ${count} times`);
}
    
    frequencyOfNr(arr3, 7);
    frequencyOfNr(arr3, 1);


/* Challenge - Using nested for generate the following pattern
0 1 0 1

1 0 1 0

0 1 0 1

1 0 1 0 */

function nestedPattern() {
    console.log('================ \n Nested Pattern: \n================');

    let display = '';
    const rows = 4;
    
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < rows; c++) {
            if(r % 2 == 0) {
                display += (c % 2 == 0) ? 0 : 1;
            } else {
                display += (c % 2 !== 0) ? 0 : 1;
            }
        }
        display += '\n';
    }
    console.log(display)
}

nestedPattern();




