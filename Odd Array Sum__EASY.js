// You are given an array, stored in a variable with the sizearr

// The size of the array is stored in a variable with the namen

// You have to traverse the array, and print the sum of odd elements in the array.

// For example, consider the array asarr = [1 2 3 4 5], and the value stored inn = 5

// Then, the sum of odd elements are : 1 + 3 + 5 = 9

// 9

function oddArraySum(n, arr){
    
    sum = 0;
    for(i=0; i<arr.length-(arr.length-n); i++){
        if(arr[i]%2!==0){
            sum = sum +arr[i];
        }
    }
    console.log(sum);
    
}
