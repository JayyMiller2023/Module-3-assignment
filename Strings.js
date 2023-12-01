function systemCheck(){

    var typeface = document.getElementById("testName").value;
    var reverse = "";
    for (i= typeface.length-1; i >= 0; i--){
        reverse += typeface[i];
    }
    document.getElementById("testNamedisplay").innerHTML = "Test #22: esreveR V2: " + reverse;
}


