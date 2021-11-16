function getPin() {
    const pin = Math.round(Math.random() * 10000);
    console.log(pin);
    const pinString = pin + '';
    if (pinString.length != 4) return getPin();
    return pin;
}

function inputPin() {
    
}

function checkPin() {
    
}

document.getElementById('generate-pin').addEventListener('click', function () {
    const generatedPin = getPin();
    document.getElementById('pin-display').value = generatedPin;

});

document.getElementsByClassName('buttons');

for(const button of buttons ){
    button.addEventListener('click',function(){
        const inputDisplay = document.getElementById('input-number-display');
        let emptyString = '';
        inputDisplay.innerText = button.innerText + emptyString;
    })
}