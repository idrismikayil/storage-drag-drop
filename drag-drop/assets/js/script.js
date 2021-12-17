let red = document.querySelector(".red")
let green = document.querySelector(".green")
let blue = document.querySelector(".blue")
let circles = document.querySelectorAll(".circle")
let dropZone = document.querySelectorAll(".drop-zone")

circles.forEach(circle => {
    circle.addEventListener("dragstart", function (e) {
        e.dataTransfer.setData("text", e.target.id)
    })
})

dropZone.forEach((zone) => {
    zone.addEventListener("dragover", function (e) {
        e.preventDefault();
    });
    zone.addEventListener("drop", function (e) {
        console.log("drop");
        let color = e.dataTransfer.getData("text");
        zone.style.backgroundColor = color;
    });
});