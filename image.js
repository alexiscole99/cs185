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

// display button
function displayButton() {
    var topButton = document.getElementById("top-button");
    topButton.style.display = "inline-block";
}

// hide button
function hideButton() {
    var topButton = document.getElementById("top-button");
    topButton.style.display = "none";
}

// return to top of page
function toTop() {
    document.body.scrollTop= 0;
    hideButton();
}

// measure if scrolled past quarter of page
// referenced http://www.javascriptkit.com/javatutors/detect-user-scroll-amount.shtml

var windowHeight, documentHeight, trackLength, throttle;
var percent = 0;
// get window measurements
function getMeasurements() {
    windowHeight = window.innerHeight;
    documentHeight = document.documentElement.scrollHeight;
    trackLength = documentHeight - windowHeight;
}

// measure percentage scrolled
function measureScroll() {
    var scroll = window.pageYOffset;
    percent = Math.floor(scroll/trackLength * 100);
}

getMeasurements();

// get measurements every time the window resizes
window.addEventListener("resize", getMeasurements);

// add a throttled event listener to scroll
window.addEventListener("scroll", function() {
    clearTimeout(throttle);
    throttle = setTimeout(function() {
        measureScroll();
        if(percent >= 25) {
            // show button
            displayButton();
        } else {
            // hide button
            hideButton()
        }
    }, 50)
});

// referenced https://www.w3schools.com/howto/howto_js_lightbox.asp
// create "lightbox" on click

var portrait = [0,2,6,7,10,12,13];
var landscape = [1,3,4,5,8,9,11,14,15,16];

function openModal(id) {
    var modal = document.getElementById("modal");
    var modalContentPort = document.getElementById("modal-content-p");
    var modalContentLand = document.getElementById("modal-content-l");
    var image = document.getElementById(id);
    var src = image.src;
    var width = "100%";
    var height = "100%";
    if(portrait.includes(Number(id))) {
        modalContentLand.style.display = "none";
        modalContentPort.innerHTML = "<img src="+ src +" height="+ height +">";
        modalContentPort.style.display = "block";
    } else if(landscape.includes(Number(id))){
        modalContentPort.style.display = "none";
        modalContentLand.innerHTML = "<img src="+ src +" width="+ width +">";
        modalContentLand.style.display = "block";
    }

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

