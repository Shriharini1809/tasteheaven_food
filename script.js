const links=document.querySelectorAll(".mid-nav ul li a");
console.log(links);
links.forEach(link => {
    link.addEventListener("mouseenter",()=>{
        console.log("Hovered:", link.textContent);
        links.forEach(item => item.classList.remove("active"));
        link.classList.add("active");
    });
});

const menuBtn=document.querySelector(".menu-btn");
const nav=document.querySelector(".mid-nav");
menuBtn.addEventListener("click",()=>{
    nav.classList.toggle("show");
})