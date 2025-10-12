//home score
let homeScore = document.getElementById("home-score");
let homeScoreNum = 0;

//guest score
let guestScore = document.getElementById("guest-score");
let guestScoreNum = 0;

//new game
let newGame = document.getElementById("new-game");

//functions
function HomeIncrement(score) {
    homeScoreNum += score
    homeScore.innerHTML = homeScoreNum;
}

function GuestIncrement(score) {
    guestScoreNum += score;
    guestScore.innerHTML = guestScoreNum;
}

function NewGame() {
    homeScoreNum = 0;
    guestScoreNum = 0;
    homeScore.innerHTML = homeScoreNum;
    guestScore.innerHTML = guestScoreNum;
}