function calculateTip(){
    var billAmt = document.getElementById('billamt').value;
    var serviceQuality = document.getElementById('quality').value;
    var people = document.getElementById('numOfPeople').value;

    if(billAmt === "" || serviceQuality == 0){
        alert("Please enter values");
        return;
    } 

    if (numOfPeople === "" || numOfPeople <= 1) {
        numOfPeople = 1;
        document.getElementById("each").style.display = "none";
    }else{
        document.getElementById("each").style.display = "block";
    }

    var total = (billAmt * serviceQuality) / people;
    total = Math.round(total*100)/100;
    total = total.toFixed(2);
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
    
}

document.getElementById('each').style.display = "none";
document.getElementById('totalTip').style.display = "none";

document.getElementById('calculate').onclick = function(){
    calculateTip();
}