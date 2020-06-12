document.addEventListener("DOMContentLoaded", function () {
    // DOM REFS
    let gameGrid = document.getElementById("gameGrid");
    let currentScore = document.getElementById("csValue");
    let highScore = document.getElementById("hsValue");
    let easy = document.getElementById("easy");
    let medium = document.getElementById("medium");
    let hard = document.getElementById("hard");
    let start = document.getElementById("start");
    let stopBtn = document.getElementById("stop");


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


    // Game Logic Variables
    let score = 0;
    let highScoreValue = 0;
    let lastBomb;
    let gameOver = false;
    const MAX = 2000;
    const MIN = 1000;

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
    start.addEventListener("click", init);
    gameGrid.addEventListener("click",tap);
    stopBtn.addEventListener("click", stop);

    let gameDuration = setTimeout(() => gameOver = true,10000);

    // Functions
    function init() {
        gameOver = false;
        score = 0;
        redBomb(); 

        // Game runs for 30 seconds
        gameDuration;

        if(gameOver = true){
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
        // Pop sound
        // pop();
        // Time interval for red bomb
        const interval = timeFrame();
        // Retrieve the random bomb from randomBomb
        const randBomb = randomBomb();

        //Change random bomb source to red bomb
        randBomb.src = "imgs/bomb2.png";

        setTimeout(() => {
            randBomb.src = "imgs/boom.png";
            // explosion();
            if (!gameOver) {
                redBomb();
            } else {
                gameOver = true;
            }
        }, interval);

        // console.log(randBomb.id);

        // if(randBomb.src === "imgs/bomb2.png" && isClicked)

    }


    function stop() {
        score = 0;
        currentScore.innerText = score;
        clearTimeout(gameDuration);

        console.log(gameDuration);

        // Resets all bombs to black
        for (let i = 0; i < bombs.length; i++) {
            bombs[i].src = "imgs/bomb1.png";
        }
    }

    function pop() {
        document.getElementById("pop").play();
    }

    function explosion(){
        document.getElementById("explosion").play();
    }

    function tap(e){


        // if(randBomb.src === "imgs/bomb2.png"){
        //     console.log("clicked");
        // }
        // score++;
        // currentScore.innerText = score;

        // if(score > highScoreValue){
        //     highScore.innerText = score;
        // }
    }

})