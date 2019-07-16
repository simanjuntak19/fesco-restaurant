
// Menyesuaikan tinggi header saat toggler aktif
let toggleBtn = document.querySelector(".navbar-toggler");
let header = document.querySelector(".header");




// toggleBtn.addEventListener("click",()=>{
//     header.classList.toggle("expand");
//     let headerExpand = document.querySelector(".expand");
//     if(headerExpand){
//         headerExpand.style.minHeight = "140vh";
//     } else {
//         header.style.minHeight = "100vh";
//     }
// })



window.addEventListener("resize",()=>{
//     if(document.documentElement.clientHeight <= 695){
//         header.style.minHeight = "695px";
//     }


    // Saat ukuran layar kecil dan nav di show lalu layar diperbesar maka nav show nya harus dihilangkan 
    let showNavLink = document.querySelector(".show");
    if(document.documentElement.clientWidth >= 768 && showNavLink != null){
        showNavLink.classList.remove("show");
        // header.classList.remove("expand");
    }
})