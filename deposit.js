// step;1 , add deposit button 
document.getElementById('btn-deposit').addEventListener('click', function () {
    // step:2 get the deposit amount from the input field
    const depositField = document.getElementById('deposit-field');
    const deposit = depositField.value;
    depositField.value = '';
    if (isNaN(deposit)) {
        alert('Please Provide a Valid Number');
        return;
    }
    // step:3 get the current deposit total
    // for non-input(element  other than input, textarea) user innerText to get the text
    const depositTotalElement = document.getElementById('deposit-value');
    const previousTotal = depositTotalElement.innerText;
    const currentDepositTotal = parseFloat(previousTotal) + parseFloat(deposit);
    depositTotalElement.innerText = currentDepositTotal.toFixed(5);
    const previousBalance = document.getElementById('balance-value');
    const balance = previousBalance.innerText;
    const currentBalance = parseFloat(deposit) + parseFloat(balance);
    previousBalance.innerText = currentBalance.toFixed(5);


})

document.getElementById('btn-withdraw').addEventListener('click', function () {
    // step:2 get the withdraw amount from the input field
    const withdrawField = document.getElementById('withdraw-field');
    const withdraw = withdrawField.value;
    withdrawField.value = '';
    if (isNaN(withdraw)) {
        alert('Please Provide a Valid Number');
        return;
    }
    const withdrawTotalElement = document.getElementById('withdraw-value');

    const previousBalance = document.getElementById('balance-value');
    const balance = previousBalance.innerText;
    if (withdraw > balance) {
        alert("You don't have enough balance")
        return;
    }
    const withdrawTotal = withdrawTotalElement.innerText
    const currentWithdrawTotal = parseFloat(withdrawTotal) + parseFloat(withdraw);
    withdrawTotalElement.innerText = currentWithdrawTotal.toFixed(5);
    const currentBalance = parseFloat(balance) - parseFloat(withdraw);
    previousBalance.innerText = currentBalance.toFixed(5);

})
