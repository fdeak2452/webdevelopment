const setup = () => {
    const rokerCb = document.getElementById("isRoker");
    const taalRadios = document.getElementsByName("moedertaal");
    const buurlandSel = document.getElementById("buurland");
    const bestellingSel = document.getElementById("bestelling");
    const btn = document.getElementById("toonBtn");

    btn.addEventListener("click", () => {
        console.log(rokerCb.checked ? "is roker" : "is geen roker");

        let taal = "";
        for (const r of taalRadios) {
            if (r.checked) { taal = r.value; break; }
        }
        console.log(`moedertaal is ${taal}`);

        const buurland =
            buurlandSel.selectedIndex >= 0
                ? buurlandSel.options[buurlandSel.selectedIndex].text
                : "";
        console.log(`favoriete buurland is ${buurland}`);

        const gekozen = [];
        for (const opt of bestellingSel.options) {
            if (opt.selected) gekozen.push(opt.text);
        }
        console.log(`bestelling bestaat uit ${gekozen.join(" ")}`);
    });
};
window.addEventListener("load", setup);