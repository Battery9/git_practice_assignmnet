//This programme will check if num is palingrome or not.

let num = '12121'; //change the value inside ''.
let revNum = '';

for(let i = num.length-1; i>=0; i--) {
  revNum+=num[i]; 
}

if(num==revNum) {
  console.log(num,'is a palindrome number.');
} else {
  console.log(num,'is not a palindrome number.');
}
