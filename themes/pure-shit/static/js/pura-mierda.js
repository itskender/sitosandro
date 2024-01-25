$(function(){
    $('#menu').click(function(){
        $('#navbar').toggleClass('hidden-sm');
        $('#main-image').toggleClass('hidden-sm');
        $('#content').toggleClass('hidden-sm');
        var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  x[slideIndex-1].style.display = "block"; 
}
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const log = console.log,
    array = ["img/001.jpg", "img/002.jpg", "img/003.jpg", "img/004.jpg", "img/005.jpg", "img/006.jpg", "img/007.jpg", "img/008.jpg", "img/016.jpg"],
    random = Math.floor(Math.random() * array.length),
    target = document.getElementById("target");
  target.src = `${array[random]}`;
  log(target);
});



document.addEventListener("DOMContentLoaded", () => {
  const log = console.log,
    array = ["img/009.jpg", "img/010.jpg", "img/011.jpg", "img/012.jpg", "img/013.jpg", "img/014.jpg", "img/015.jpg"],
    random = Math.floor(Math.random() * array.length),
    target = document.getElementById("targetmobile");
  target.src = `${array[random]}`;
  log(target);
});
