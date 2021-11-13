var price = "";
var cash = "";
var cid = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]];

// const doIt = () => {
//     document.getElementById("price").innerHTML = "Price of items:  " + price;
//     document.getElementById("cash").innerHTML = "Cash given:   " + cash;
//     document.getElementById("cid").innerHTML = "Cash in Drawer:   " + cid;

// }

function checkCashRegister() {
    price = document.getElementById("price").value;
    cash = document.getElementById("cash").value;
    var cashback = cash - price;
    let unitVal = [["PENNY", .01], ["NICKEL", .05], ["DIME", .1], ["QUARTER", .25], ["ONE", 1], ["FIVE", 5], ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 100]];
    let availCash = 0
    let changeObj = {status: "", change: []};
    document.getElementById("priceLabel").innerHTML = "Price of items:  " + price;
    document.getElementById("cashLabel").innerHTML = "Cash given:   " + cash;

    
    for (let j = 0; j < cid.length - 1; j++) {
        availCash += cid[j][1];
    }
    let newCid = cid;
    // document.getElementById("console").innerHTML = cashback + " " + availCash + " " + newCid;
    document.getElementById("cid").innerHTML = "Cash in Drawer:   " + (availCash - cashback);

    if (cashback > availCash) {
        changeObj.status = "INSUFFICIENT_FUNDS";
        // document.getElementById("status").innerHTML = changeObj.status;

        changeObj.change = [];
    } else if (cashback == availCash) {
        changeObj.status = "CLOSED";
        changeObj.change = cid;
        // document.getElementById("status").innerHTML = changeObj.status;

    } else {
        changeObj.status = "OPEN";
        // document.getElementById("status").innerHTML = changeObj.status;

        for (let i = 8; i >= 0; i--) {
            let unitInDrawer = newCid[i][1];
            console.log(unitInDrawer);
            let unit = unitVal[i][1];
            console.log(cashback);
            if (cashback >= unitInDrawer && unitInDrawer > 0) {  
                changeObj.change.push([unitVal[i][0], unitInDrawer]);
                cashback -= unitInDrawer;
                unitInDrawer = 0;
            } else if (cashback <= unitInDrawer) {
                let num = (Math.floor(cashback / unit) * unit);
                if (num > 0) {
                changeObj.change.push([unitVal[i][0], num]);
                cashback -= num;
                cashback = cashback.toFixed(2);
                unitInDrawer -= num;
                }
            }
        }
        if (cashback != 0) {
            changeObj.status = "INSUFFICIENT_FUNDS";
            // document.getElementById("status").innerHTML = changeObj.status;
            changeObj.change = [];
        }  
    }
    // console.log(changeObj);
    // return changeObj;
    document.getElementById("status").innerHTML = "Status:  " + changeObj.status;
    document.getElementById("change").innerHTML = "Change Due:   $"  + (cash - price);
    document.getElementById("twenties").innerHTML = changeObj.change[0][0] + ":  $" + changeObj.change[0][1];
    document.getElementById("tens").innerHTML = changeObj.change[1][0] + ":  $" + changeObj.change[1][1];
    document.getElementById("fives").innerHTML =  changeObj.change[2][0] + ":  $" + changeObj.change[2][1];
    document.getElementById("ones").innerHTML = changeObj.change[3][0] + ":  $" + changeObj.change[3][1];
    document.getElementById("quarters").innerHTML = changeObj.change[4][0] + ":  $" + changeObj.change[4][1];
    document.getElementById("dimes").innerHTML = changeObj.change[5][0] + ":  $" + changeObj.change[5][1];
    document.getElementById("nickels").innerHTML = changeObj.change[6][0] + ":  $" + changeObj.change[6][1];
    document.getElementById("pennies").innerHTML =  changeObj.change[7][0] + ":  $" + changeObj.change[7][1];
}