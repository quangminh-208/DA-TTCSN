function minus() {
    let minusBtns = document.querySelectorAll(".quantity-left-minus");

    minusBtns.forEach((minusBtn, index) => {
        minusBtn.onclick = function () {
            if (document.querySelectorAll("#quantity")[index].value > 0) {
                document.querySelectorAll("#quantity")[index].value--;
            }
        };
    });
}
function plus() {
    let plusBtns = document.querySelectorAll(".quantity-right-plus");

    plusBtns.forEach((minusBtn, index) => {
        minusBtn.onclick = function () {
            document.querySelectorAll("#quantity")[index].value++;
        };
    });
}
let btnUpdate = document.querySelector(".update-cart");
btnUpdate.onclick = function () {
    let plusBtns = document.querySelectorAll(".quantity-right-plus");
    plusBtns.forEach((minusBtn, index) => {
        document.querySelectorAll(".sum-price")[index].innerHTML =
            document.querySelectorAll(".unit-price")[index].innerHTML *
            document.querySelectorAll("#quantity")[index].value;
    });
    Sum();
};
function Sum() {
    let unitsSumPrice = document.querySelectorAll(".sum-price");
    let sum = 0;
    unitsSumPrice.forEach((unit, index) => {
        sum += parseInt(unit.innerHTML);
    });
    console.log(sum);
    document.querySelector(".subtotals").innerHTML = sum + " đ";
    document.querySelector(".totals").innerHTML = sum + " đ";
}