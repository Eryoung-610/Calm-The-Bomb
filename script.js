    // Game Logic Variables
    let score = 0;
    let highScoreValue = 0;
    let lastBomb;
    let gameOver = false;
    let MAX = 1500;
    let MIN = 1000;
    


document.addEventListener("DOMContentLoaded", function () {
    // DOM REFS
    let currentScore = document.getElementById("csValue");
    let highScore = document.getElementById("hsValue");
    let easyBtn = document.getElementById("easy");
    let mediumBtn = document.getElementById("medium");
    let hardBtn = document.getElementById("hard");
    let start = document.getElementById("start");
    let resetBtn = document.getElementById("reset");


    // Query Selector here?
    let bomb1 = document.getElementById("bomb bomb1");
    let bomb2 = document.getElementById("bomb bomb2");
    let bomb3 = document.getElementById("bomb bomb3");
    let bomb4 = document.getElementById("bomb bomb4");
    let bomb5 = document.getElementById("bomb bomb5");
    let bomb6 = document.getElementById("bomb bomb6");
    let bomb7 = document.getElementById("bomb bomb7");
    let bomb8 = document.getElementById("bomb bomb8");
    let bomb9 = document.getElementById("bomb bomb9");

    // Not sure how to refactor
    const bombs = [
        bomb1,
        bomb2,
        bomb3,
        bomb4,
        bomb5,
        bomb6,
        bomb7,
        bomb8,
        bomb9
    ];

    // Event Listeners
        // Not sure how to refactor
    bomb1.addEventListener("click", tap);
    bomb2.addEventListener("click", tap);
    bomb3.addEventListener("click", tap);
    bomb4.addEventListener("click", tap);
    bomb5.addEventListener("click", tap);
    bomb6.addEventListener("click", tap);
    bomb7.addEventListener("click", tap);
    bomb8.addEventListener("click", tap);
    bomb9.addEventListener("click", tap);
    start.addEventListener("click", init);

    resetBtn.addEventListener("click", reset);
    easyBtn.addEventListener("click", easy);
    mediumBtn.addEventListener("click",medium);
    hardBtn.addEventListener("click",hard);

    // Game Duration time
    let gameDuration = setTimeout(() => gameOver = true, 60000);
    let bombTimeout;

    function init() {
        // Resets all bombs to black
        for (let i = 0; i < bombs.length; i++) {
            bombs[i].src = "imgs/bomb1.png";
        }

        gameOver = false;
        score = 0;
        redBomb();
        gameDuration;

        //If gameOver, clear the game
        if (gameOver = true) {
            clearTimeout(gameDuration)
        }

    }


    //Time frame for bombs to blow up
    function timeFrame() {
        return Math.round(Math.random() * (MAX - MIN) + MIN)
    }


    // Function to randomly select a bomb.
    function randomBomb() {
        // Random index num for random bomb
        const index = Math.floor(Math.random() * bombs.length);
        // Selects random bomb
        const bomb = bombs[index];
        // Ensure that last bomb isn't chosen again
        if (bomb === lastBomb) {
            return randomBomb();
        }
        lastBomb = bomb;
        return bomb;
    }


    // Changes to red bomb
    function redBomb() {
        pop();
        const interval = timeFrame();
        const randBomb = randomBomb();

        randBomb.src = "imgs/bomb2.png";

        bombTimeout = setTimeout(() => {
            randBomb.src = "imgs/boom.png";
            explosion();
            if (!gameOver) {
                redBomb();
            } else {
                gameOver = true;
            }
        }, interval);

    }


    function reset() {
        score = 0;
        currentScore.innerText = score;

        clearTimeout(gameDuration);
        clearTimeout(bombTimeout);

        for (let i = 0; i < bombs.length; i++) {
            bombs[i].src = "imgs/bomb1.png";
        }
    }

    function pop() {
        document.getElementById("pop").play();
    }

    function explosion() {
        document.getElementById("explosion").play();
    }

    function tap(e) {

        if (e.target.src === "https://eryoung-610.github.io/Calm-The-Bomb/imgs/bomb2.png") {
            e.target.src = "https://eryoung-610.github.io/Calm-The-Bomb/imgs/bomb1.png"

            clearTimeout(bombTimeout);
            redBomb();
            score++;
            currentScore.innerText = score;
        }

        if (score > highScoreValue) {
            highScoreValue = score;
            highScore.innerText = highScoreValue;
        }
    }

    function easy() {
        MAX = 2000;
        MIN = 1500;

        easyBtn.style.border = "5px solid white";
        easyBtn.style.borderRadius = "5px";

        mediumBtn.style.border = "none";
        hardBtn.style.border = "none";
    }

    function medium(){
        MAX = 1500;
        MIN = 1000;

        mediumBtn.style.border = "5px solid white";
        mediumBtn.style.borderRadius = "5px";

        easyBtn.style.border = "none";
        hardBtn.style.border = "none";
    }

    function hard(){
        MAX = 500;
        MIN = 450;

        hardBtn.style.border = "5px solid white";
        hardBtn.style.borderRadius = "5px";

        easyBtn.style.border = "none";
        mediumBtn.style.border = "none";

    }
})
