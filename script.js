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
    let gameActive = false;
    let lastBomb;
    let gameOver = false;
    const MAX = 2500;
    const MIN = 1500;

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
    bomb1.addEventListener("click",tap);
    start.addEventListener("click", init);
    stopBtn.addEventListener("click", stop);

    let gameDuration = setTimeout(() => gameOver = true,10000);

    // Functions
    function init() {
        gameOver = false;
        score = 0;

        if(gameActive = true){
            redBomb();
        }
         

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
        pop();
        // Time interval for red bomb
        const interval = timeFrame();
        // Retrieve the random bomb from randomBomb
        const randBomb = randomBomb();

        //Change random bomb source to red bomb
        randBomb.src = "imgs/bomb2.png";

        // Sets the random bomb to explosion after interval is over.
        // If game is not over, keep calling redBomb.
        setTimeout(() => {
            // randBomb.src = "imgs/boom.png";
            // explosion();
            if (!gameOver) {
                redBomb();
            } else {
                gameOver = true;
            }
        }, interval);
    }


    function stop() {
        score = 0;
        // Reset score to 0
        currentScore.innerText = score;

        // Stops the game interval
        clearTimeout(gameDuration);


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

        if(e.target.src === "http://127.0.0.1:5500/imgs/bomb2.png"){
            e.target.src = "http://127.0.0.1:5500/imgs/bomb1.png"
        } else {
            console.log("THIS SHIT DIDN'T WORK");
        }

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