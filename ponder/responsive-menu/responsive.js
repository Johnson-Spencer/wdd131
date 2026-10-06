// 1. Select menu from the DOM
let menuBtn = document.querySelector(".menu-btn");

// 2. Add event listener to the menu button
menuBtn.addEventListener("click", (e) =>  {
    


// 3. Toggle whether the links are displayed or not
let nav = document.querySelector("nav");

if(nav.style.display === ''){
    nav.style.display = 'flex';
} else {
    nav.style.display = '';
}
// 4. Toggle X animation for menu button
    menuBtn.classList.toggle('change');

});