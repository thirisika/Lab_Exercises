function display(value){
    document.getElementById("result").value+=value;
}

function del(){
    document.form.answer.value=document.form.answer.value.substr(0,form.answer.value.length-1);
}

function resetCalculator(){
    document.getElementById("result").value="";
}

function giveAns(){
     var a = document.getElementById("result").value;
    try {
        // Safely evaluate the mathematical expression using a Function constructor
        var result = new Function("return " + a)();
        document.getElementById("result").value = result;
    } catch (e) {
        // Handle errors gracefully
        document.getElementById("result").value = "Error";
    }
}