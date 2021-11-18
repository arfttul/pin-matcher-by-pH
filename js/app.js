function getPin() {
    const pinDisplayField = document.getElementById('generate-pin-btn');
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) return pin;
    return getPin();
}
//check pins function
function checkPins(generatedPin, userInputedPin) {
    console.log('generatedPin in checkPins: ' + generatedPin);
    console.log('userInputedPin in checkPins: ' + userInputedPin);
    let countSubmit = parseInt(document.getElementById('count-submit').innerText);
    if (generatedPin == userInputedPin) {
        document.getElementById('action-left').style.display = 'none';
        document.getElementById('not-match-msg').style.display = 'none';
        document.getElementById('match-msg').style.display = 'block';
        document.getElementById('submit').style.backgroundColor = 'green';
        document.getElementById('submit').setAttribute('disabled', true);
    }
    else {
        document.getElementById('not-match-msg').style.display = 'block';
        document.getElementById('match-msg').style.display = 'none';
    }
    countSubmit--;
    // console.log(countSubmit);
    document.getElementById('count-submit').innerText = countSubmit;
    if (countSubmit == 0) {
        document.getElementById('submit').style.backgroundColor = 'red';
        document.getElementById('submit').setAttribute('disabled', true);
    }
}
//generate pin =====================================================>
let randonGeneratedPin;
document.getElementById('generate-pin-btn').addEventListener('click',
    function () {
        const generatedPin = getPin();
        randonGeneratedPin = generatedPin;
        const generatedPinDisplay = document.getElementById('generated-pin-display');
        generatedPinDisplay.value = generatedPin;
    });
// input pin from user  =====================================================>
const buttons = document.getElementsByClassName('button');
const pinInputField = document.getElementById('pin-input-field');
let userInputedPinNumber;
for (const numberButton of buttons) {
    numberButton.addEventListener('click', function () {
        userInputedPinNumber = pinInputField.value + this.innerText;
        pinInputField.value = userInputedPinNumber;
        if (numberButton.innerText == 'C') pinInputField.value = '';
        if (numberButton.innerText == '<') {
            pinInputField.value = Math.floor(parseInt(pinInputField.value) / 10);
        }
    }
    );
}
// check computer generated pin & user inputed pin
const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', function () {
    console.log('pinInputField.value: ' + pinInputField.value);
    checkPins(randonGeneratedPin, pinInputField.value);
});

