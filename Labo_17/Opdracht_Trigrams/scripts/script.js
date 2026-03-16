const setup = () => {
    let word = "onoorbaar";
    let b = 3;

    for (let a = 0; a < word.length-2; a++) {
        console.log(word.slice(a,b));
        b++
    }
}
window.addEventListener("load", setup);