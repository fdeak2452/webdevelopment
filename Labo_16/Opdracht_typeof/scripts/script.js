const setup = () => {
    // Variabelen uit de opdracht
    let leeftijd = 34;
    let intrest = 0.12;
    let isGevaarlijk = true;
    let vandaag = new Date();
    const print = (message) => {
        console.log(message);
    };

    const output = document.getElementById("output");

    function toonType(naam, waarde) {
        let type = typeof waarde;

        if (waarde instanceof Date) {
            type = "date (object)";
        }

        const p = document.createElement("p");
        p.innerHTML = `<code>${naam}</code> = <strong>${type}</strong>`;
        output.appendChild(p);
    }

    toonType("leeftijd", leeftijd);
    toonType("intrest", intrest);
    toonType("isGevaarlijk", isGevaarlijk);
    toonType("vandaag", vandaag);
    toonType("print", print);
};

window.addEventListener("load", setup);