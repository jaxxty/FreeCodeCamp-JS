function telephoneCheck(str) {
    let res = false
    let esp = /^(1 )?\d{3} \d{3} \d{4}$/gm
    let gui = /^(1 )?\d{3}-\d{3}-\d{4}$/gm
    let jun = /^(1 )?\d{10}$/gm
    let par = /^1? ?\(\d{3}\) ?\d{3}-\d{4}$/gm
    if(esp.test(str)||gui.test(str)||jun.test(str)||par.test(str))res = true
    return res
  }