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

// referenced https://www.w3schools.com/howto/howto_js_lightbox.asp
// create "lightbox" on click

function openModal(event, id) {
    event.preventDefault();
    console.log(event)
    console.log(id)
    var modal = document.getElementById("modal");
    var modalContent = document.getElementById("modal-content");
    var video = document.getElementById(id);
    var src = video.src;
    var width = "100%";
    modalContent.innerHTML = "<iframe src="+ src +" width="+ width +">";
    modal.style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("modal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

/*document.getElementById("0").addEventListener("click", function(event) {
    event.preventDefault();
});
document.getElementById("1").addEventListener("click", function(event) {
    event.preventDefault();
});
document.getElementById("2").addEventListener("click", function(event) {
    event.preventDefault();
});
document.getElementById("3").addEventListener("click", function(event) {
    event.preventDefault();
});
document.getElementById("4").addEventListener("click", function(event) {
    event.preventDefault();
});
document.getElementById("5").addEventListener("click", function(event) {
    event.preventDefault();
});
document.getElementById("6").addEventListener("click", function(event) {
    event.preventDefault();
});
document.getElementById("7").addEventListener("click", function(event) {
    event.preventDefault();
});
document.getElementById("8").addEventListener("click", function(event) {
    event.preventDefault();
});*/
