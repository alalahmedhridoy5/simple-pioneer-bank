     //  submit button even handler
     const submitBtn=document.getElementById("submit-btn" );
     submitBtn.addEventListener("click", function () {
     const loginArea=document.getElementById("login-area");
     loginArea.style.display="none";
     const transitionArea=document.getElementById("transition-area");
     transitionArea.style.display="block";
     })
    //   deposit button even handler
     const depositBtn=document.getElementById("deposit-btn");
     depositBtn.addEventListener("click" , function () {
     const depositAmount=document.getElementById("deposit-amount").value;
     const depositAmountNumber=parseFloat(depositAmount);
     const currentDeposit=document.getElementById("current-deposit").innerText;
     const currentDepositNumber=parseFloat(currentDeposit);
     const totalDeposit=depositAmountNumber + currentDepositNumber;
     document.getElementById("current-deposit").innerText=totalDeposit;
     const currentBalance=document.getElementById("current-balance").innerText;
     const currentBalanceNumber=parseFloat(currentBalance);
     const totalBalance=currentBalanceNumber + depositAmountNumber;
     document.getElementById("current-balance").innerText=totalBalance;
     document.getElementById("deposit-amount").value="";

     })
       //    withdraw button even handler
       const withdrawBtn=document.getElementById("withdraw-btn");
       withdrawBtn.addEventListener("click",function () {
       withdrawAmount=document.getElementById("withdraw-amount").value;
       const withdrawAmountNumber=parseFloat(withdrawAmount);
       const currentWithdraw=document.getElementById("current-withdraw").innerText;
       const currentWithdrawNumber=parseFloat(currentWithdraw);
       const totalWithdraw=currentWithdrawNumber + withdrawAmountNumber;
       document.getElementById("current-withdraw").innerText=totalWithdraw;
       const currentBalance=document.getElementById("current-balance").innerText;
       const currentBalanceNumber=parseFloat(currentBalance);
       const totalBalance=currentBalanceNumber - withdrawAmountNumber;
       document.getElementById("current-balance").innerText=totalBalance;
       document.getElementById("withdraw-amount").value="";
       })