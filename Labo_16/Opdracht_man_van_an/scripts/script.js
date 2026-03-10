const setup = () => {
    const textarea = document.getElementById("tekst");
    const btn = document.getElementById("telBtn");
    const zoektermEl = document.getElementById("zoekterm");
    const countIndexOfEl = document.getElementById("countIndexOf");
    const countLastIndexOfEl = document.getElementById("countLastIndexOf");

    const needle = "an";
    zoektermEl.textContent = `"${needle}"`;

    const telMetIndexOf = (bron, zoek) => {
        if (!bron || !zoek) return 0;
        const hay = bron.toLowerCase();
        const ndl = zoek.toLowerCase();

        let count = 0;
        let pos = hay.indexOf(ndl);
        while (pos !== -1) {
            count++;
            pos = hay.indexOf(ndl, pos + 1);
        }
        return count;
    };

    const telMetLastIndexOf = (bron, zoek) => {
        if (!bron || !zoek) return 0;
        const hay = bron.toLowerCase();
        const ndl = zoek.toLowerCase();

        let count = 0;
        let pos = hay.lastIndexOf(ndl);
        while (pos !== -1) {
            count++;
            pos = hay.lastIndexOf(ndl, pos - 1);
        }
        return count;
    };

    const telEnToon = () => {
        const tekst = textarea.value ?? "";

        const countIndexOf = telMetIndexOf(tekst, needle);
        const countLastIndexOf = telMetLastIndexOf(tekst, needle);

        countIndexOfEl.textContent = countIndexOf;
        countLastIndexOfEl.textContent = countLastIndexOf;

        console.log(`Tekst: "${tekst}"`);
        console.log(`Sequentie: "${needle}"`);
        console.log(`Aantal (indexOf): ${countIndexOf}`);
        console.log(`Aantal (lastIndexOf): ${countLastIndexOf}`);
    };

    btn.addEventListener("click", telEnToon);

    telEnToon();
};
window.addEventListener("load", setup);