const setup = () => {
    const tekst = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    function vervangDe(input) {
        let resultaat = "";
        let i = 0;

        while (i < input.length) {
            if (input[i] === 'd' && input[i + 1] === 'e') {
                resultaat += "het";
                i += 2;
            } else {
                resultaat += input[i];
                i += 1;
            }
        }
        console.log(resultaat);
    }
    vervangDe(tekst);
    vervangDe("de man riep de");
}
window.addEventListener("load", setup);