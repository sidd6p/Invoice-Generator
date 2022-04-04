const btnEle1 = document.getElementById("btn-1");
const btnEle2 = document.getElementById("btn-2");
const btnEle3 = document.getElementById("btn-3");
const invoiceBtn = document.getElementById("invoice-btn");
const removebtn1 = document.getElementById("remove-btn-1");
const removebtn2 = document.getElementById("remove-btn-2");
const removebtn3 = document.getElementById("remove-btn-3");
const costEles = document.getElementsByClassName("amt");
const totalEl = document.getElementById("total-el");
const quantityEls = document.getElementsByClassName("quantity-el");



let items = [0, 0, 0];
let prices = [10, 20, 30];
let totalAmt = 0;


btnEle1.addEventListener("click", function () {
    updateItem(0, 1);
});
btnEle2.addEventListener("click", function () {
    updateItem(1, 1);    
});
btnEle3.addEventListener("click", function () {
    updateItem(2, 1);   
});
invoiceBtn.addEventListener("click", function() {
    checkOut();
})
removebtn1.addEventListener("click", function () {
    updateItem(0, -1);   
})
removebtn2.addEventListener("click", function () {
    updateItem(1, -1);   
})
removebtn3.addEventListener("click", function () {
    updateItem(2, -1);    
})


function updateItem(item, count) {
    items[item] = Math.max(0, items[item] + count);
    quantityEls[item].innerText = `x ${items[item]}`;
    updateCost(item);
}

function checkOut() {
    alert("Thanks you for Shopping with us!, Your Total is: " + totalAmt)
    totalAmt = 0;
    for (let i = 0; i < 3; i++) {
        items[i] = 0;
        quantityEls[i].innerText = `x ${items[i]}`;
        costEles[i].innerText = 0;
    }
    totalEl.innerText = 0;
}

function updateCost(item) {
    costEles[item].innerText = items[item] * prices[item];
    totalAmt = getTotal(); 
    totalEl.innerText = totalAmt;
}

function getTotal() {
    let total = 0;
    for (let i = 0; i < 3; i++) {
        total += (items[i] * prices[i]);
    }
    return total
}