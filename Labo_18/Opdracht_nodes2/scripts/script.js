const setup = () => {

    const style = document.createElement('style');
    style.textContent = `
    .listitem{color: red;}`
    document.head.append(style);

    const li = document.querySelectorAll('ul > li')
    for (let i = 0; i < li.length; i++) {
        li[i].classList.add("listitem");
    }
}
window.addEventListener("load", setup);