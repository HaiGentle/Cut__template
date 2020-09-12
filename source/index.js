//function to load top of page for btn-load-top
let btnloadtop = document.getElementById("btn-load-top");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btnloadtop.style.display = "block";
    } else {
        btnloadtop.style.display = "none";
    }
  }
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
//function to scroll down for but-hmid-click
function scrollDown() {
  let elmnt = document.getElementById("content");
  elmnt.scrollIntoView();
}