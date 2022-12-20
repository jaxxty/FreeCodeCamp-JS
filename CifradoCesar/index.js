function rot13(str) {
    let res =""
    let a = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    for(let i in str){
      if(a.indexOf(str[i])===-1){
        res+=str[i]
        continue
      }
      if(a.indexOf(str[i])<=12){
        res+=(a[a.indexOf(str[i])+13])
      }
      if(a.indexOf(str[i])>12){
        res+=(a[a.indexOf(str[i])-13])
      }
     
    }
    return res
  }