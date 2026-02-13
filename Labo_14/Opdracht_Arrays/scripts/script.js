const setup = () => {
   let familieleden = ['Florin','Stefan','Anca','Simon','Justin'];
// shcrijf naar console hoeveel elementen de array bevat.
   console.log(familieleden.length);
// schrijf het eerste, derde en vijfde element uit de array naar de console
   console.log(familieleden[0]);
   console.log(familieleden[2]);
   console.log(familieleden[4]);
// Vraag met prompt() een extra naam op en voeg deze toe aan de Array. Probeer dit via
// een zelf geschreven functie VoegNaamToe. Maak gebruik van pass-by-reference. Schrijf
// vervolgens het resultaat naar de console.
   const VoegNaamToe = () => {
      const naam = window.prompt("Geef een extra naam");
      familieleden.unshift(naam);
   }
   VoegNaamToe();
   console.log(familieleden);
// Converteer de array naar een string en toon deze op de console.
   console.log(familieleden.join(' - '));
}
window.addEventListener("load", setup);