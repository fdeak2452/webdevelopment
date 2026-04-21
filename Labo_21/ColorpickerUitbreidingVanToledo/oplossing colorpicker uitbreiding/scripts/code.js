const initialize = () => {
    let btnSave = document.getElementById("btnSave");
    let sliders = document.getElementsByClassName("slider");

    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }

    restoreSliders();

    restoreFavorites();

    update();
    btnSave.addEventListener("click", saveSwatch);
};

const saveSliders = () => {
    let red = document.getElementById("sldRed").value;
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;

    localStorage.setItem("slider.red", red);
    localStorage.setItem("slider.green", green);
    localStorage.setItem("slider.blue", blue);
};

const restoreSliders = () => {
    if (localStorage.getItem("slider.red") !== null && localStorage.getItem("slider.green") !== null &&
        localStorage.getItem("slider.blue") !== null) {
        document.getElementById("sldRed").value = localStorage.getItem("slider.red");
        document.getElementById("sldGreen").value = localStorage.getItem("slider.green");
        document.getElementById("sldBlue").value = localStorage.getItem("slider.blue");
    }
};

const saveFavorites = () => {
    let swatchComponents = document.getElementById("swatchComponents");
    let swatches = swatchComponents.getElementsByClassName("swatch");

    let favoriteData = [];

    for (let i = 0; i < swatches.length; i++) {
        favoriteData.push({
            r: swatches[i].getAttribute("data-red"),
            g: swatches[i].getAttribute("data-green"),
            b: swatches[i].getAttribute("data-blue")
        });
    }

    if (favoriteData.length > 0) {
        localStorage.setItem("colorpicker.favorites", JSON.stringify(favoriteData));
    } else {
        localStorage.removeItem("colorpicker.favorites");
    }
};

const restoreFavorites = () => {
    let data = localStorage.getItem("colorpicker.favorites");
    if (data) {
        let favoriteData = JSON.parse(data);
        let swatchComponents = document.getElementById("swatchComponents");

        favoriteData.forEach(color => {
            let swatch = buildSwatchComponent(color.r, color.g, color.b);
            swatchComponents.appendChild(swatch);
        });
    }
};

const saveSwatch = () => {
    let swatchComponents = document.getElementById("swatchComponents");
    let r = document.getElementById("sldRed").value;
    let g = document.getElementById("sldGreen").value;
    let b = document.getElementById("sldBlue").value;

    let swatch = buildSwatchComponent(r, g, b);
    swatchComponents.appendChild(swatch);

    saveFavorites();
};

const buildSwatchComponent = (r, g, b) => {
    let swatch = document.createElement("div");
    let btnDelete = document.createElement("input");

    swatch.className = "swatch";
    configureSwatch(swatch, r, g, b);
    swatch.addEventListener("click", setColorPickerFromSwatch);

    btnDelete.setAttribute("type", "button");
    btnDelete.setAttribute("value", "X");
    btnDelete.addEventListener("click", deleteSwatch);

    swatch.appendChild(btnDelete);
    return swatch;
};

const configureSwatch = (swatch, r, g, b) => {
    swatch.setAttribute("data-red", r);
    swatch.setAttribute("data-green", g);
    swatch.setAttribute("data-blue", b);
    swatch.style.background = `rgb(${r},${g},${b})`;
};

const setColorPickerFromSwatch = (event) => {
    if (event.target.classList.contains("swatch")) {
        let swatch = event.target;
        document.getElementById("sldRed").value = swatch.getAttribute("data-red");
        document.getElementById("sldGreen").value = swatch.getAttribute("data-green");
        document.getElementById("sldBlue").value = swatch.getAttribute("data-blue");
        update();
    }
};

const deleteSwatch = (event) => {
    let swatch = event.target.parentNode;
    swatch.parentNode.removeChild(swatch);

    saveFavorites();
    event.stopPropagation();
};

const update = () => {
    let red = document.getElementById("sldRed").value;
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;

    document.getElementById("lblRed").innerHTML = red;
    document.getElementById("lblGreen").innerHTML = green;
    document.getElementById("lblBlue").innerHTML = blue;

    let swatchPreview = document.getElementById("swatch");
    swatchPreview.style.background = `rgb(${red},${green},${blue})`;

    saveSliders();
};

window.addEventListener("load", initialize);