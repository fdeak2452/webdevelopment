const splitString = () => {

    const string = document.getElementById("txtInput").value;
    const start = Number(document.getElementById("firstSubstring").value);
    const end = Number(document.getElementById("secondSubstring").value);

    const result = string.substring(start, end);

    document.getElementById("txtOutput").textContent = result;
};
let pELEMENT = document.getElementById("btnSubstring");
pELEMENT.addEventListener("click",splitString);