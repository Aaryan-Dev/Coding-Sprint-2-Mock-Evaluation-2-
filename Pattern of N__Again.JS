// You are given a number stored in a variable with the nameN

// You have to print all the numbers in the range from1 to N*N, such that there are exactlyNnumbers on each line

// For example, if the value stored inN = 3, then all the numbers in the range, from [1,9] need to be printed, such that there are 3 numbers on each line. Therefore, the required output is

// 1 2 3
// 4 5 6
// 7 8 9

function patternOfN(N) {
  
    for(i=1; i<=N; i++){
        bag = "";
        for(j=1+N*(i-1); j<=N*i; j++){
            bag = bag + j +" ";
        }
            console.log(bag);
       
    }
    
  }
  