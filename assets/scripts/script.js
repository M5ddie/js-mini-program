// Check input if Integer
function checkInteger() {
    let inputInteger = parseFloat(document.getElementById("inputInteger").value);
    
    if(inputInteger < 0) {
        document.getElementById("outputNegPos").innerHTML = "Negative";
    } else if(inputInteger > 0) {
        document.getElementById("outputNegPos").innerHTML = "Positive";
    }else if(inputInteger == 0) {
        document.getElementById("outputNegPos").innerHTML = "Neither Positive nor Negative";
    } else {
        document.getElementById("outputNegPos").innerHTML = "Please enter a number.";
    }
}


// Check input if Odd or Even
function checkOddEven() {
    // let inputOddEven = parseFloat(document.getElementById("inputOddEven").value);
    let inputOddEven = document.getElementById("inputOddEven").value;
    
    if(parseFloat(inputOddEven) % 2 == 0) {
        document.getElementById("outputOddEven").innerHTML = "Even";
    // } else if(inputOddEven % 2 == 1 || inputOddEven % 2 == -1) {
    } else if(inputOddEven % 2 !== 0) {
        document.getElementById("outputOddEven").innerHTML = "Odd";
    } else {
        document.getElementById("outputOddEven").innerHTML = "Please enter a number";
    }
}


// Check input if Eligible
function checkEligibility() {
    let legalAge = 18;
    let inputAge = document.getElementById("inputAge").value;
    let inputYes = document.getElementById("inputYes");
    let inputNo = document.getElementById("inputNo");
    let inputYearsResidence = document.getElementById("inputYearsResidence").value;

    if (inputYes.checked) {
        if (inputAge >= legalAge && inputYearsResidence >= 12) {
            document.getElementById("outputEligibility").innerHTML = "Eligible";
        } else {
            document.getElementById("outputEligibility").innerHTML = "NOT eligible"
        }
    } else if (inputNo.checked) {
        document.getElementById("outputEligibility").innerHTML = "NOT eligible";
    } else {
        document.getElementById("outputEligibility").innerHTML = "Please provide info";
    }
  
}