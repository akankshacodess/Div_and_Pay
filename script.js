function myfun() {
    var a = document.getElementById('amount').value;
    var b = document.getElementById('people').value;
    var c = document.getElementById('tip').value;
    var d = Number(a)+Number(c);
    if (tip.value !== "") {
        document.querySelector('#result').innerHTML = (d / b).toFixed(2);
    }else{    
        document.querySelector('#result').innerHTML = (a / b).toFixed(2);
    }
}
function splitReset(){
    document.getElementById('result').innerHTML="00";
    document.getElementById('amount').value="";
    document.getElementById('people').value="";
    document.getElementById('tip').value="";
}