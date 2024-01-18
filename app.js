let projects = document.querySelectorAll(".pro");
let dark_hover = document.querySelector(".dark-hover");

projects.forEach(project => {
    project.addEventListener('mouseover', () => {
        dark_hover.style.display = 'block';
    });

    project.addEventListener('mouseout', () => {
        dark_hover.style.display = 'none';
    });
});
