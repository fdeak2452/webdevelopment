const setup = () => {
    const button = document.getElementById("btn");
    const input = document.getElementById("inputveld");

    const maakMetSpaties = (inputText) => {
        if (typeof inputText !== "string") return "";
        const chars = [];
        for (let i = 0; i < inputText.length; i++) {
            const ch = inputText[i];
            if (!/\s/.test(ch)) {
                chars.push(ch);
            }
        }
        return chars.join(" ");
    };

    button.addEventListener("click", () => {
        const raw = input.value ?? "";

        // 1) Output met spaties
        const result = maakMetSpaties(raw);
        console.log(result);

        // 2) 'hond' check op de GEBRUIKERSINVOER (case-insensitive)
        const tekst = raw.toLowerCase();
        const zoekwoord = "hond";
        const eersteIndex = tekst.indexOf(zoekwoord);
        const laatsteIndex = tekst.lastIndexOf(zoekwoord);

        if (eersteIndex !== -1) {
            console.log(
                `De tekst bevat '${zoekwoord}' (eerste op index ${eersteIndex}, laatste op index ${laatsteIndex}).`
            );
        } else {
            console.log(`De tekst bevat '${zoekwoord}' niet.`);
        }
    });
};

window.addEventListener("load", setup);