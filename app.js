let cards = document.querySelectorAll(".-card");
let dark_hover = document.querySelector(".dark-hover");

cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        dark_hover.style.display = 'block';
    });

    card.addEventListener('mouseout', () => {
        dark_hover.style.display = 'none';
    });
});
