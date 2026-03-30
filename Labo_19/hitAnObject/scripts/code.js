let global = {
    IMAGE_COUNT: 5,
    IMAGE_SIZE: 48,
    IMAGE_PATH_PREFIX: "images/",
    IMAGE_PATH_SUFFIX: ".png",
    MOVE_DELAY: 1500,     // elke seconde
    intervalId: null,
    moveId: null
};

const setup = () => {
    let img = document.getElementById("target");
    let field = document.getElementById("playField");
    let startBtn = document.getElementById("startBtn");
    let score = document.getElementById("score");
    let i = 0;

    img.addEventListener("click", () => {

        if (img.src.includes("0.png")) {
            clearInterval(global.intervalId);
            clearInterval(global.moveId);
            alert("Game over! Je hebt op de bom geklikt.");
            return;
        }

        moveImage(img, field);
        i++;
        score.innerText = i.toString();
    });


    startBtn.addEventListener("click", () => {

        global.intervalId = setInterval(() => {
            console.log("tick");
        }, global.MOVE_DELAY);

        global.moveId = setInterval(() => {
            randomImage(img);
            moveImage(img, field);
        }, global.MOVE_DELAY);
    });
};

const moveImage = (img, field) => {
    const maxX = field.clientWidth - global.IMAGE_SIZE;
    const maxY = field.clientHeight - global.IMAGE_SIZE;

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    img.style.left = newX + "px";
    img.style.top = newY + "px";
}


let previousIndex = -1;

const randomImage = (img) => {
    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * global.IMAGE_COUNT);
    } while (randomIndex === previousIndex);

    previousIndex = randomIndex;

    img.src = global.IMAGE_PATH_PREFIX + randomIndex + global.IMAGE_PATH_SUFFIX;
};


window.addEventListener("load", setup);