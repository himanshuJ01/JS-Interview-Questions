function Palindrome(str){
    let start = 0;
    let end = str.length-1;
    let isPalindrome = true;

  while(start<end){
    if(str[start] !== str[end]){
      isPalindrome = false;
      break;
    }
    start++;
    end--;
  }
  if(isPalindrome){
    return true;
  }
  else{
    return false;
  }

}

console.log(Palindrome("naman"))