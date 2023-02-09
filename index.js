
let text = document.getElementById('text');
let objright = document.getElementById('objright');
window.addEventListener('scroll', () => {
    let value = window.scrollY;
    text.style.marginTop = value* 2.5 + 'px';
    objright.style.left = value* 2.5 + 'px';


})
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})
