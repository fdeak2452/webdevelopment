const setup = () => {
    const colorDemo = document.querySelector(".colorDemo");
    const sliders = document.getElementsByClassName("slider");
    const containerColors = document.getElementById("containerColors");

    const btnSave = document.createElement("button");
    btnSave.id = "saveBtn";
    btnSave.textContent = "Save";
    containerColors.appendChild(btnSave);

    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("input", update);
        sliders[i].addEventListener("change", update);
    }

    update();

    btnSave.addEventListener("click", saveColor);
};
const update = () => {
    const sliders = document.getElementsByClassName("slider");
    const values = document.getElementsByClassName("value");
    const colorDemo = document.querySelector(".colorDemo");

    let r = sliders[0].value;
    let g = sliders[1].value;
    let b = sliders[2].value;

    values[0].innerText = r;
    values[1].innerText = g;
    values[2].innerText = b;

    colorDemo.style.backgroundColor = `rgb(${r},${g},${b})`;
};
const saveColor = () => {
    const sliders = document.getElementsByClassName("slider");
    const containerColors = document.getElementById("containerColors");

    let r = sliders[0].value;
    let g = sliders[1].value;
    let b = sliders[2].value;

    const swatch = document.createElement("div");
    swatch.className = "swatch";
    swatch.style.backgroundColor = `rgb(${r},${g},${b})`;

    swatch.dataset.r = r;
    swatch.dataset.g = g;
    swatch.dataset.b = b;

    const btnDelete = document.createElement("button");
    btnDelete.className = "deleteBtn";
    btnDelete.textContent = "X";
    btnDelete.addEventListener("click", (e) => {
        e.stopPropagation();
        swatch.remove();
    });
    swatch.addEventListener("click", () => {
        sliders[0].value = swatch.dataset.r;
        sliders[1].value = swatch.dataset.g;
        sliders[2].value = swatch.dataset.b;
        update();
    });
    swatch.appendChild(btnDelete);
    containerColors.appendChild(swatch);
};
window.addEventListener("load", setup);