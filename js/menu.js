const header = document.querySelector("header");
const button = document.querySelector(".icon");

button.addEventListener("click", ()=>{
    header.classList.toggle("active");
    console.log("lol");
})