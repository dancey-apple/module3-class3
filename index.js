import {color, log, red, green} from 'console-log-colors';

console.log("hello world")

const numbers = [1, 2, 3, 4, 5]

function addOne(array){
    for (let i = 0 ; i < array.length; i++){
        console.log(color.red(array[i] + 1));
    }
}

addOne(numbers);

numbers.forEach(function(num){
    console.log(color.green(num+1));
});

numbers.forEach((num)=>{console.log(color.red(num+1))});

// Map Reduce Filter ("Holy Trinity" of higher level functions)
//-------------------------------------------------------------
//Filter:

function isOdd(array, oddArr = []){
    for(let i = 0; i <array.length; i ++){
        if (array[i] % 2 !== 0) {
            oddArr.push(array[i]);
        }
    }
}
const oddArray = isOdd(numbers);
console.log(oddArray)

const easyOddArray = numbers.filter((num)=> num % 2 !== 0);
console.log(easyOddArray);

//--------------------------------------------------------------
//Map:

function addOneMore(array, newArr = []){
    for (let i =0; i <array.lenght; i++){
        newArr.push(array[i] + 1);
    }
    return newArr;
}

const newArray = addOneMore(numbers);
console.log(newArray);

const newNewArray = numbers.map((num) => num + 1);
console.log(newNewArray);

//------------------------------------------------------------
//Reduce

//function total = numbers.reduce((sum, num) => sum + num );
//console.log(total);
