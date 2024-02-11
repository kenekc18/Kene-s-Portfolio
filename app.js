//NAVIGATION FUNCTION
let smallNavItems = document.querySelector('.mobile-items');
let NavBtn = document.querySelector('.hamburger-btn');

NavBtn.addEventListener('click', ()=>{
    smallNavItems.classList.add('d-mobile-items');
})

NavBtn.addEventListener('dblclick', ()=>{
    smallNavItems.classList.remove('d-mobile-items');
})

// CAROSUEL FUNCTION

