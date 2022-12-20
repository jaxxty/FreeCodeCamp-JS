function checkCashRegister(price, cash, cid) {
    let precio = [100,20,10,5,1,0.25,0.1,0.05,0.01]
    let vuelta = cash-price
    let dincaja = 0
    let si = 0
    let res = []
    let cont = -1
    for (let i in cid.reverse())dincaja+=cid[i][1]
    // if((vuelta)>dincaja)return {status: "INSUFFICIENT_FUNDS", change: []}
    if((vuelta)===dincaja) return {status:"CLOSED", change:cid.reverse()}
    for (let i in cid){
      if(vuelta>=precio[i]){
        res.push([cid[i][0],0])
        cont++
      }
      while(vuelta>=precio[i]&&cid[i][1]!=0){
        cid[i][1]-=precio[i]
        vuelta-=precio[i]
        vuelta = Number(vuelta.toFixed(2))
        console.log(vuelta)
        res[cont][1]+=precio[i]
      }
    }
    for (let i in res)si+=res[i][1]
    if((vuelta)>si)return {status: "INSUFFICIENT_FUNDS", change: []}
    return {status:"OPEN", change:res}
  }