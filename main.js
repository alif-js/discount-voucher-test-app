document.getElementById('btn-apply').addEventListener('click', function () {
    const costPriceElement = document.getElementById('cost-price');
    const costPriceString = costPriceElement.innerText;
    const costPrice = parseFloat(costPriceString);

    const voucherCodeElement = document.getElementById('voucher-code');
    const voucherCodeElementString = voucherCodeElement.value;

    if (voucherCodeElementString === "DISC30") {
        const finalCost = costPrice * 0.7;

        const discountedPriceElement = document.getElementById('discounted-price');
        discountedPriceElement.innerText = finalCost;
    }
    else{
        alert('Wrong voucher. No discount applied.');
    }



})