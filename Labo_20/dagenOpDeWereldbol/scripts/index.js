const setup = () => {
    let geboortedatum = new Date("February 22, 2005 03:15:00")
    let today = Date.now();

    console.log(Math.floor((today - geboortedatum) / 86400000));
}
window.addEventListener("load", setup);