const setup = () => {

    let student = {
        voornaam: "Florin",
        familienaam: "Deak",
        geboorteDatum: new Date("2005-2-22"),
        adres: { // een object
            straat: "Lindenstraat 63",
            postcode: "8800",
            gemeente: "Roeselare"
        },
        isIngeschreven: true,
        namenVanExen:
            ["Luna", "Ariana"], // een array
        aantalAutos: 1
    }

    let JSONStudent = JSON.stringify(student);
    console.log(JSONStudent);
    let JSONParsedStudent = JSON.parse('{"voornaam":"Florin","familienaam":"Deak","geboorteDatum":"2005-02-21T23:00:00.000Z","adres":{"straat":"Lindenstraat 63","postcode":"8800","gemeente":"Roeselare"},"isIngeschreven":true,"namenVanExen":["Luna","Ariana"],"aantalAutos":1}');
    console.log(JSONParsedStudent.voornaam);

}
window.addEventListener("load", setup);