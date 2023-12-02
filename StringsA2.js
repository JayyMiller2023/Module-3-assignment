function database() {
    var prompt = document.getElementById("Prompt").value;
    var Subject = prompt;
    var reverse = "";

    for (i = Subject.length - 1; i >= 0; i--){
        reverse += Subject[i];
    }
    prompt = prompt.replace(/ /, "");
    reverse = reverse.replace(/ /, "");
    prompt = prompt.toLowerCase();
    reverse = reverse.toLowerCase();
    if (prompt == reverse) {
        document.getElementById("Result").innerHTML = "This is a palindrome";
    } else {
        document.getElementById("Result").innerHTML = "This is not a palindrome";
    }


}

function systemBase() {
    var first = document.getElementById("First").value;
    var second = document.getElementById("Second").value;
    var Zip = document.getElementById("ZIPCode").value;

    var Link = first + second;

    if (Link.length > 20) {
        document.getElementById("Warning").innerHTML = "This Name is too long!";
    } else {
        if (Zip.length > 5) {
            document.getElementById("Warning").innerHTML = "Invalid Zip!";
        } else if (Zip.length < 5) {
            document.getElementById("Warning").innerHTML = "Invalid Zip!";
        } else {
            document.getElementById("Warning").innerHTML = "Unlocked the secret message! This one, the one you're reading!";
        }
    }
}