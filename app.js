let card_container = document.querySelectorAll(".projects");
let dark_hover = document.querySelector(".dark-hover");

card_container.forEach(item => {
    item.addEventListener('mouseover', () => {
        dark_hover.style.display = 'block';
    });

    item.addEventListener('mouseout', () => {
        dark_hover.style.display = 'none';
    });
});
