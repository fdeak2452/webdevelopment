const setup = () => {
    let btnAdd = document.createElement("button");
    document.body.appendChild(btnAdd);
    btnAdd.textContent = "Add Paragraph";
    btnAdd.addEventListener("click", addParagraph);
}
window.addEventListener("load", setup);

const addParagraph = () => {
    const p = document.createElement("p");
    p.innerText = "Dit is een div-element";
    let div = document.querySelector("#myDIV")
    div.appendChild(p);
}