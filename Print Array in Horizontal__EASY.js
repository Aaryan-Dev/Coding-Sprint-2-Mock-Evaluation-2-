// You are given an array, whose size is stored in a variable of sizen

// The array is stored in a variable with the name,arr

// You have to traverse the array, and print each element on a new line

// For example, the value stored inN = 5, and the array isarr = [1 2 3 4 5]

// Therefore, the required output will be

// 1 2 3 4 5

function printHorizontalArray(N,arr){
    
    bag = "";
    for(i=0; i<arr.length-(arr.length-N); i++){
        bag = bag + arr[i] + " ";
    }
    console.log(bag);
