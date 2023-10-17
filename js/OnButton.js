const para = document.querySelector(".info-section");
const home_para_readmore = document.querySelector(".home_para_readmore");
const home_para_readless= document.querySelector(".home_para_readless");
const paragraph = document.querySelector(".extra-para");

home_para_readmore.addEventListener("click", () => {
    para.classList.toggle("active");
    console.log("Home Read More Button Clicked");
    // home_para_readless.style.display = "block";
    // home_para_readmore.style.display = "none";
   
});

// home_para_readless.addEventListener("click", () => {
//     para.classList.toggle("");
//     console.log("Home Read More Button Clicked");
    
// });