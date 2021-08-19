//generate random number
const inputPinNumber = document.querySelector(".displayPin");
document.querySelector(".generate-btn").addEventListener("click", function(){
    const pinNum = Math.round(Math.random() *10000);
    inputPinNumber.value = pinNum;
});

// keypad Handler
const displayInput = document.querySelector(".inputDisplay");
const numberBtn =  document.getElementsByClassName('button');

for (let i = 0; i <numberBtn.length; i++) {
    const btnElement = numberBtn[i];
    btnElement.addEventListener("click", function(event){
        displayInput.value += event.target.innerText;
    })
    
}

//clear handler
document.getElementById("clear").addEventListener('click', function(){
    displayInput.value = "";
})
// clear a single Number backSpace

document.querySelector('.backSpace').addEventListener('click', function() {
    var total = displayInput.value;
    displayInput.value = total.substr(0, total.length - 1);
})
    


//pin matcher
const tried = document.getElementById("threeTimes");
let triedNumber = parseInt(tried.innerText);

document.querySelector(".submit-btn").addEventListener('click', function(){
    if(displayInput.value == inputPinNumber.value ){
        document.querySelector(".notify1").style.display = "block";
        document.querySelector(".notify").style.display = "none";
    }
    else{
        document.querySelector(".notify").style.display = "block";
        document.querySelector(".notify1").style.display = "none";

        triedNumber -= 1;
        if(triedNumber > 0){
            tried.innerText = triedNumber;
        }
        else{
            alert("You have tried much times")
        }
    }
})






