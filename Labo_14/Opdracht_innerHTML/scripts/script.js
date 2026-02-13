const setup = () => {
    let pElement=document.getElementById("txtOutput");
    pElement.innerHTML="Welkom!";
}
let btnWijzig = document.getElementById("btnWijzig");
btnWijzig.addEventListener("click", setup);