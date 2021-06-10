// Read color from color input fields
// Update css linear gradient with those colors

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background + ";"; /*  */
}

// Add event listener to color1
color1.addEventListener("input", setGradient);

// Add event listener to color2
color2.addEventListener("input", setGradient);