
function greeting() {
    alert("Hello, World!");
}

function bigger() {
    greeting();
    document.getElementById("input_text_area").style.fontSize="24pt";
}

function fancify() {

    let textArea = document.getElementById("input_text_area");
    if (document.getElementById("fancyshmancy").checked) {
        greeting();
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    }
    else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "";
    }
}

function moo() {
    let textArea = document.getElementById("input_text_area");
    textArea.value = textArea.value.split(".").join("-Moo.");
}