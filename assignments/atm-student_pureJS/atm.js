var checkingBalance = 0;
var savingsBalance = 0;


$(function(){
  //Code in here will execute on page load
  //similar to window onload

});

window.onload = function(){

  $('#checking-deposit').click(function getChecking(event){
  // document.getElementById('checking-deposit').onclick = function getChecking(event){
    // var amount = document.getElementById('checking-amount').value;
    var amount = $('#checking-amount').val();
    amount = parseInt(amount);
    checkingBalance = amount + checkingBalance;
    updateDisplay();
  });
  $('#savings-deposit').click(function(event) {
  // document.getElementById('savings-deposit').onclick = function(event){
    var amount = $('#savings-amount').val();
    // var amount = document.getElementById('savings-amount').value;
    amount = parseInt(amount);
    savingsBalance = amount + savingsBalance;
    updateDisplay();
  });

  $('#checking-withdraw').click( function(event){
  // document.getElementById('checking-withdraw').onclick = function(event){
    var amount = $('#checking-amount').val();
    // var amount = document.getElementById('checking-amount').value;
    amount = parseInt(amount);
    balances = withdrawFunds(amount, checkingBalance, savingsBalance);
    checkingBalance = balances[0];
    savingsBalance = balances[1];
    updateDisplay();
  });
  $('#savings-withdraw').click( function(event) {
  // document.getElementById('savings-withdraw').onclick = function(event){
    var amount = $('#savings-amount').val();
    // var amount = document.getElementById('savings-amount').value;
    amount = parseInt(amount);
    balances = withdrawFunds(amount, savingsBalance, checkingBalance);
    savingsBalance = balances[0];
    checkingBalance = balances[1];
    updateDisplay();
  });

  updateDisplay();

};

function withdrawFunds(amount, primary, secondary) {
  if (amount <= primary) {
    primary = primary - amount;
  } else if ((amount > primary) && (amount <= (secondary + primary))) {
    secondary = (primary + secondary) - amount;
    primary = 0;
  }
  return [primary, secondary];
}

function updateDisplay() {

  // var element = document.getElementById('checking-balance');
  var element = $('#checking-balance');
  if (checkingBalance <= 0) {
    // element.classList.add('zero');
    element.addClass('zero');
  } else {
    // element.classList.remove('zero');
    element.removeClass('zero');
  }

  // var element2 = document.getElementById('savings-balance');
  var element2 = $('#savings-balance');

  if (savingsBalance <= 0) {
    // element2.classList.add('zero');
    element2.addClass('zero');
  } else {
    // element2.classList.remove('zero');
    element2.removeClass('zero');
  }
  $('#checking-balance').text('$' + checkingBalance);
  $('#savings-balance').text('$' + savingsBalance);
  $('#checking-amount').val('');
  $('#savings-amount').val('');
  // document.getElementById('checking-balance').innerHTML = '$' + checkingBalance;
  // document.getElementById('savings-balance').innerHTML = '$' + savingsBalance;
  // document.getElementById('checking-amount').value = '';
  // document.getElementById('savings-amount').value = '';
}



