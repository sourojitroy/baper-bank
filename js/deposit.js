document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositField=document.getElementById('deposit-field');
    const newDepositAmountString=depositField.value;
    const newDepositAmount=parseFloat(newDepositAmountString);
    console.log(typeof newDepositAmount)    

    const depositTotalElement=document.getElementById('deposit-total');
    const previousDepositTotalString=depositTotalElement.innerText;
    const previousDepositTotal=parseFloat(previousDepositTotalString);

    const currentDipositTotal=previousDepositTotal+newDepositAmount;

    depositTotalElement.innerText=currentDipositTotal;

    const balanceTotalElement=document.getElementById('balance-total');
    const previousBalanceTotalString=balanceTotalElement.innerText;
    const previousBalanceTotal= parseFloat(previousBalanceTotalString);


    const currentBalanceTotal=previousBalanceTotal+currentDipositTotal;
    balanceTotalElement.innerText=currentBalanceTotal;

    depositField.value='';
})