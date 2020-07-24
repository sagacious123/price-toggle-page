var price1 = document.querySelector(".price-block");
var priceNone1 = document.querySelector(".price-none");
var price2 = document.querySelector(".price-block2");
var priceNone2 = document.querySelector(".price-none2");
var price3 = document.querySelector(".price-block3");
var priceNone3 = document.querySelector(".price-none3");
// var price3 = document.querySelector(".price-block");
var toggleBg = document.querySelector(".toggle-bg");
var ttoggle = document.querySelector(".toggle");


toggleBg.addEventListener("click", function() {
    ttoggle.classList.toggle("tttoggle");
    
    price1.classList.toggle("price-nonejs"); //none
    priceNone1.classList.toggle("price-blockjs"); //block

    price2.classList.toggle("price-nonejs"); //none
    priceNone2.classList.toggle("price-blockjs"); //block

    price3.classList.toggle("price-nonejs"); //none
    priceNone3.classList.toggle("price-blockjs"); //block
    // price101.style.display = "block";
    // price1.style.display = "none";
    // price101.getElementsByClassName.display
    // toggle.style.marginLeft = "-1rem";
})