//Banner rotativo - autor: Itamar Maxmimo De Sena//
//INI//
var time = 2500,
currentImageIndex = 0,
images = document.querySelectorAll("#slider img")
max = images.length;

function nextImage() {
    console.log(images)

    images[currentImageIndex]
        .classList.remove("selected")

    currentImageIndex++

    if(currentImageIndex >= max)
    currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("selected")
}

function start() {
    setInterval(() => {
        nextImage()
    }, time)

} 
window.addEventListener("load", start)
//Fim//
//Banner rotativo - autor: Itamar Maxmimo De Sena//