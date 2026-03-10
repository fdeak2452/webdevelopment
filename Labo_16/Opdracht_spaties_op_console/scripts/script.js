const setup = () => {
    const button = document.getElementById("btn");
    const input = document.getElementById("inputveld");

    const toSpacedChars = (text) => {
        const chars = [];
        for (let i = 0; i < text.length; i++) {
            const ch = text[i];
            if (!/\s/.test(ch)) {
                chars.push(ch);
            }
        }
        return chars.join(" ");
    };

    button.addEventListener("click", () => {
        const raw = input.value ?? "";
        const result = toSpacedChars(raw);
        console.log(result);
    });
};

window.addEventListener("load", setup);