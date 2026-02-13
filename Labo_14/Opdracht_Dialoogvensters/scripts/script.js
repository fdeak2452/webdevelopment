const setup = () => {
// Probeer eerst eens elk van de drie soorten popups uit in een javascript programma.
// window.alert("Dit is een mededeling.");
// window.confirm("Weet u het zeker?");
// window.prompt("Wat is uw naam", "onbekend");

//Zet nu de return value van de prompt call op de console als je een tekst intypt en op 'ok' drukt.
let returnCall =  window.prompt("Wat is uw naam", "onbekend");
console.log(returnCall);
}
window.addEventListener("load", setup);
