function getInputValue(){
    return document.getElementById("inputValue").innerText;
}

function showInputValue(num){
   document.getElementById("inputValue").innerText = num;
}

function getOutputValue() {
  return document.getElementById("outputValue").innerText;
}

function showOutputValue(num) {
    if (num == '') {
        document.getElementById("outputValue").innerText = num;
    }
    else{
         document.getElementById("outputValue").innerText =
           getFormattedNumber(num);
    } 
}

// To acheive comma in the output value //
function getFormattedNumber(num){
    let n = Number(num);
    let value = n.toLocaleString('en');
    return value;
}
///////////////////////////////////////



function reverseFormattedNumber(num){
    return Number(num.replace(/,/g, ''));
}

let operator = document.getElementsByClassName("operator");
for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function(){
        if (this.id == 'clear') {
            showInputValue('');
            showOutputValue('');
        }
    })   
}

let number = document.getElementsByClassName("number");
for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function () {
    var outPut = reverseFormattedNumber(getOutputValue());

    if (outPut != NaN) {
      // its mean output is number
      outPut = outPut + this.id;
      showOutputValue(outPut);
    }
  });
}