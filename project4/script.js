$(document).ready(function() {
    const valueSpan = $('.valueSpan');
    const value = $('#range');
   valueSpan.html(value.val() + '%');
    value.on('input change', () => {
      valueSpan.html(value.val() + '%');
    });
  });
  //....................................

document.querySelector('#tip-form').onchange = function(){
    
var bill = document.querySelector('#my-amount').value;

var myrange = document.querySelector('#range').value;

console.log(bill , myrange);

var tipAmoun = document.querySelector('#TipAmount').value = bill * (myrange/100);
document.querySelector('#TotalBillTip').value = parseInt(bill)  +parseInt(tipAmoun);
}