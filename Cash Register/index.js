const button = document.querySelector("button");
const cashInput = document.querySelector("input.cash");
const billInput = document.querySelector("input.bill");
const outputColumns = document.querySelectorAll("table tr:nth-child(2) td");
const denominations = document.querySelectorAll("table tr:nth-child(3) td");
const audio = new Audio('Blastwave_FX_CashRegister_S08IN.92.mp3');
const returnAmount = document.querySelector('.return-amount');
button.addEventListener("click", () => {
    const cash = parseInt(cashInput.value, 10);
    const bill = parseInt(billInput.value, 10);
    var returnCash = cash - bill;
    var note;
    
    if(cash && bill){
        if(cash <0 || bill<0){
            returnAmount.innerText = `Please enter positive values for the inputs`
        }
        else{
            audio.play();
            setTimeout(()=>{
                denominations.forEach((column, index) => {
                    note = parseInt(column.innerText, 10);
                    returnAmount.innerText = cash-bill;
                    outputColumns[index].innerText = Math.floor(returnCash / note);
                    returnCash = returnCash % note;
                });
            }, 700);
        }
    }

})
