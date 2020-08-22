//Generate pin number
function generateRandomPin() {
    const randomNumber = Math.floor(1000 + Math.random() * 9000);
    document.getElementById("display-random-number").value = randomNumber;
}

//Display number in the input field
function displayNumber(num) {
    document.getElementById("display-input-number").value = document.getElementById("display-input-number").value +  num;
}

//Submit pin number to match the pin is valid or not
function submitPinNumber() {
    const displayRandomNumber = document.getElementById("display-random-number").value;
    const displayInputNumber = document.getElementById("display-input-number").value;

    if (displayInputNumber == "" || displayInputNumber.length != 4) {
        alert("Please Enter the 4 Digit Pin Number!");
        return;
    }

    if(displayRandomNumber == displayInputNumber){
        document.getElementById("attempt-number").innerText = "3";
        document.getElementById("green-sign").style.display = "block";
        document.getElementById("red-signal").style.display = "none";
    }else{
        //3 try left
        const countAttempt = parseInt(document.getElementById("attempt-number").innerText) - 1;
        document.getElementById("attempt-number").innerText = countAttempt;
        if(countAttempt < 1){
            document.getElementById("submit").style.display = "none";
        }
        
        document.getElementById("green-sign").style.display = "none";
        document.getElementById("red-signal").style.display = "block";
    }
}

//clear input field
document.getElementById("clear").addEventListener("click",function(){
    document.getElementById("display-input-number").value = "";
})


//backspace input field
function backspace() {
    var value = document.getElementById("display-input-number").value;
    document.getElementById("display-input-number").value = value.substr(0, value.length - 1);
}
