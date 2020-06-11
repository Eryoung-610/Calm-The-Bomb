document.addEventListener("DOMContentLoaded", function () {
    // DOM REFS
    let gameGrid = document.getElementById("gameGrid");
    let currentScore = document.getElementById("csValue");
    let highScore = document.getElementById("hsValue");
    let easy = document.getElementById("easy");
    let medium = document.getElementById("medium");
    let hard = document.getElementById("hard");
    let start = document.getElementById("start");
    let bomb1 = document.getElementById("bomb bomb1");
    let bomb2 = document.getElementById("bomb bomb2");
    let bomb3 = document.getElementById("bomb bomb3");
    let bomb4 = document.getElementById("bomb bomb4");
    let bomb5 = document.getElementById("bomb bomb5");
    let bomb6 = document.getElementById("bomb bomb6");
    let bomb7 = document.getElementById("bomb bomb7");
    let bomb8 = document.getElementById("bomb bomb8");
    let bomb9 = document.getElementById("bomb bomb9");

    // Game Logic Variables
    let score = 0;
    let highScoreValue = 0;
    let lastBomb;
    let gameOver = false;4
    const MAX = 2000;
    const MIN = 1000;
    const bombs = [bomb1,bomb2,bomb3,bomb4,bomb5,bomb6,bomb7,bomb8,bomb9];

    // Event Listeners
    start.addEventListener("click",init);
    // gameGrid.addEventListener("click",test);

    // function test(e) {
    //     score++;
    //     if (score > highScoreValue) {
    //         highScore.innerText = score;
    //     }
    //     console.log(e.target.id);
    //     currentScore.innerText = score;
    // }

    function init() {
        score = 0;
        // console.log(bombs);
        redBomb();
        randomBomb();
    }

    function timeFrame() {
        return Math.round(Math.random() * (MAX-MIN) + MIN)
    }

    function randomBomb(){
        const index = Math.floor(Math.random() * 9);

        const bomb = bombs[index];
        console.log(bomb);
        if (bomb === lastBomb) {
            return randomBomb();
        }

        lastBomb = bomb;
        return bomb;
        
    }

    function redBomb() {
        // Time interval for red bomb
        const interval = timeFrame();
        // Retrieve the random bomb from randomBomb
        const bomb = randomBomb();

    }

    // function test(e){
    //     console.log(e.target.id)

    //     e.target.src = "/imgs/bomb2.png";
    // }
    
})


