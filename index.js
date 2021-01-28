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