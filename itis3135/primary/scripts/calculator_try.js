function show(value){
    document.getElementById("results").value += value;
}

function clearText() {
    var getInput = document.getElementById("results");
    if (getInput.value != ""){
        getInput.value ="";
    }
}

function calculate(){
 var i = document.getElementById("results").value;
 var j = eval(i);
 document.getElementById("results").value = j;
}