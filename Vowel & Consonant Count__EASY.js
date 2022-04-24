// You are given a string, stored in a variable with the name,str

// The size of the string is stored in another variable with the nameN

// You have to find the count of vowels, and consonants in the string, and print it

// For example, consider the value stored instr = "nrupul", and the value stored inN = 6, then the vowels, in the string isu, which is present twice. Therefore, the count of vowels becomes 2, and the rest of the characters are consonants, so the count of consonants becomes 4. Therefore, the required output will be

// 2 4
// Note : All characters in the string are lowercase English alphabets

// Note : The vowels in the English alphabet are the following - a,e,i,o,u. All the characters are considered as consonants

function vowelAndConsonantCount(N, str) {
  
    count = 0;
    count1 = 0;

for(i=0; i<str.length-(str.length-N); i++){
    if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"){
        count++
    }else{
        count1++
    }

}
    console.log(count, count1);
}
