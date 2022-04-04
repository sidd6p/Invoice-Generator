const btnItemEls = document.getElementsByClassName("btn-items-el");
const invoiceBtn = document.getElementById("invoice-btn");
const removebtns = document.getElementsByClassName("remove-btn");
const costEles = document.getElementsByClassName("amt");
const totalEl = document.getElementById("total-el");
const quantityEls = document.getElementsByClassName("quantity-el");



let quantity = [0, 0, 0];
let prices = [10, 20, 30];
let totalAmt = 0;



btnItemEls[0].addEventListener("click", function () {
    updateItem(0, 1);
});
btnItemEls[1].addEventListener("click", function () {
    updateItem(1, 1);    
});
btnItemEls[2].addEventListener("click", function () {
    updateItem(2, 1);   
});
invoiceBtn.addEventListener("click", function() {
    checkOut();
})
removebtns[0].addEventListener("click", function () {
    updateItem(0, -1);   
})
removebtns[1].addEventListener("click", function () {
    updateItem(1, -1);   
})
removebtns[2].addEventListener("click", function () {
    updateItem(2, -1);    
})



function updateItem(item, count) {
    quantity[item] = Math.max(0, quantity[item] + count);
    quantityEls[item].innerText = `x ${quantity[item]}`;
    updateCost(item);
}

function checkOut() {
    alert("Thanks you for Shopping with us!, Your Total is: " + totalAmt)
    totalAmt = 0;
    for (let i = 0; i < 3; i++) {
        quantity[i] = 0;
        quantityEls[i].innerText = `x ${quantity[i]}`;
        costEles[i].innerText = 0;
    }
    totalEl.innerText = 0;
}

function updateCost(item) {
    costEles[item].innerText = quantity[item] * prices[item];
    totalAmt = getTotal(); 
    totalEl.innerText = totalAmt;
}

function getTotal() {
    let total = 0;
    for (let i = 0; i < 3; i++) {
        total += (quantity[i] * prices[i]);
    }
    return total
}