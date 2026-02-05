const maxScore = 100;
let arrayP1 = { sum: 0 };
let arrayP2 = { sum: 0 };

const score = document.getElementById("score");
const newGame = document.getElementById("newGame");
const p1 = document.getElementById("maxScore");
const scorep1 = document.getElementById("scorep1");
const hintP1 = document.getElementById("hintP1");
const currentScorep1 = document.getElementById("currentScorep1");
const p2 = document.getElementById("p2");
const scorep2 = document.getElementById("scorep2");
const hintP2 = document.getElementById("hintP2");
const currentScorep2 = document.getElementById("currentScorep2");
const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const roolDice = document.getElementById("roolDice");
const hold = document.getElementById("hold");
const whoIsPlaying = document.getElementById("whoIsPlaying");
newGame.addEventListener("click", startGame);
let cube1;
let cube2;

function startGame() {
    if(arrayP1.sum <100 && arrayP2.sum < 100 ){
  let SelectPlayer = Math.floor(Math.random() * 5) + 1;
  if (SelectPlayer % 2 === 0) {
    p1Play();
  } else {
    p2Play();
  }}
  else if(arrayP1.sum>=100){
    hintP1.textContent='player 1 is won'
    roolDice.style.display = "none";
    hold.style.display = "none"; 
  }
  else if (arrayP2.sum >=100){
    hintP2.textContent ='player 2 is won'
    roolDice.style.display = "none";
    hold.style.display = "none";
  }
}

function p1Play() {
    let flag =true
    if(flag){
    hold.addEventListener("click", ()=>{
        p2Play()
        scorep1.textContent=arrayP1.sum
    });

  whoIsPlaying.textContent = "player 1 is playing";
  roolDice.addEventListener("click", () => {
    cube1 = rooleDice1();
    cube2 = rooleDice2();

    if (cube1 !== cube2) {
      currentScorep1.textContent = `player 1 current score: ${cube1 + cube2}`;
      arrayP1.sum += cube1 + cube2;
      console.log("p1a", arrayP1);
    } else { flag=false
      arrayP1.sum = 0;
      p2Play();
     
      //   scorep1.textContent = arrayP1.reduce((a, b) => a + b, 0);
    }
  });
}}

function p2Play() {
  let flag =true
    if(flag){
hold.addEventListener("click", ()=>{
    p1Play()
    scorep2.textContent=arrayP2.sum

});

  whoIsPlaying.textContent = "player 2 is playing";
  roolDice.addEventListener("click", () => {
    cube1 = rooleDice1();
    cube2 = rooleDice2();

    if (cube1 !== cube2) {
      currentScorep2.textContent = `player 2 current score: ${cube1 + cube2}`;
      arrayP2.sum += cube1 + cube2;
      console.log("p2a", arrayP2);
    } else { flag=false
      arrayP2.sum = 0;

      p1Play();
           

    }
  });
}}

function rooleDice1() {
  let rDice1 = Math.floor(Math.random() * 6) + 1;

  dice1.textContent = rDice1;
  return rDice1;
}
function rooleDice2() {
  let rDice2 = Math.floor(Math.random() * 6) + 1;

  dice2.textContent = rDice2;
  return rDice2;
}
