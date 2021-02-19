const btn = document.querySelector("#btn");
const img = document.getElementById("img");
btn.addEventListener("click", () => {
    img.classList.toggle("show");

});




// *****************************************.

const mouseEvent = document.querySelector(".mouseEvent");
const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");

// bd.addEventListener("mousemove", (e) => {
//     horizontal.innerHTML = e.x;
//     vertical.innerHTML = e.y;
// })
mouseEvent.addEventListener("mousemove", (e) => {
    horizontal.innerHTML = e.x;
    // vertical.innerHTML = e.y;
    mouseEvent.style.left = e.x / window.innerHeight * 100 + "%";
    if (e.x > 500) {
        document.body.style.filter = "blur(3px)";

    } else {
        document.body.style = "none";
    }

});


//***********************************
document.getElementById('input').addEventListener('input', (e) => {
    vertical.innerHTML = e.target.value;
})
