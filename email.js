// highlight tab when hovering
function highlightHover(id) {
    var clickedTab = document.getElementById(id);
    clickedTab.setAttribute("class", "hover");
}

// unhighlight tab after mouse leaves
function unhighlightHover(id) {
    var clickedTab = document.getElementById(id);
    clickedTab.setAttribute("class", "");
}

function validateEmail() {
    var address = document.getElementById("address").value;
    console.log(address);
    // check validity
    if((address.endsWith(".com") || address.endsWith(".edu")) && address.includes("@")) {
        // address is valid
        var message = "<h2>Email successfully recorded.</h2>"
    } else {
        // address is invalid
        var message = "<h2>Invalid email address.</h2>"
    }

    document.getElementById("content").innerHTML = message;
}