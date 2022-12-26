const arrow = document.querySelector(".arrow");
const menu = document.querySelector(".menu");
arrow.addEventListener("click", function(){
menu.classList.toggle("on");
arrow.classList.toggle("on");

})