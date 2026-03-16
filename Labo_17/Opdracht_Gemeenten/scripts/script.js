const setup = () => {
    let gemeenten = [];
    let input;

    while ((input = prompt("Geef een gemeente in"))) {
        input = input.trim();
        if (input.toLowerCase() === "stop") break;
        if (input) gemeenten.push(input);
    }

    gemeenten = [...new Set(gemeenten.map(g => g.trim()))]
        .sort((a, b) => a.localeCompare(b, "nl", { sensitivity: "base" }));

    const select = document.createElement("select");
    gemeenten.forEach(g => {
        select.innerHTML += `<option>${g}</option>`;
    });

    document.body.appendChild(select);
};

window.addEventListener("load", setup);