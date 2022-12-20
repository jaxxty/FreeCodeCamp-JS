function palindrome(str) {
    let reg = /[\W _]/g
    let inicial = str.replace(reg,'').toLowerCase()
    let final = inicial.split("").reverse().join("")
    if(final === inicial){
      return true
    }else{
      return false
    }  
  }
  palindrome("0_0 (: /-\ :) 0-0");