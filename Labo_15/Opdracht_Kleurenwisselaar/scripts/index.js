const setup = () => {

    const colorChangeButtons = document.querySelectorAll(".button");

    colorChangeButtons.forEach(button => {
        button.addEventListener("click", () => {
            button.classList.toggle("teal");
        });
    });
}
window.addEventListener("load", setup);