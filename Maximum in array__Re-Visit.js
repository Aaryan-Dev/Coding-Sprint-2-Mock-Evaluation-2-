// You are given an array, stored in a variable with the sizearr

// The size of the array is stored in a variable with the namen

// You have to find the maximum number in the array

// For example, consider the array asarr = [1 2 3 4 5], and the value stored in n = 5

// Then, the required output will be5, as it is the largest number in the array

function maximumInArray(N,arr){
    
    var initial = arr[0];
    for(i=0; i<arr.length-(arr.length-N); i++){
        if(initial<=arr[i]){
         var initial = arr[i];
        }
    }
        console.log(initial); 
}
    