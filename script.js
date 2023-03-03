let round = 0;
let global = 0;
let round2 = 0;
let global2 = 0;
let player_one = true;
let player_two = false;

function rollTheDice() {
    
        let number = Math.floor(Math.random() * 6)+1;
        let dice = document.querySelector("img");
        dice.setAttribute("src", "dice" + number + ".png");

        if(player_one === true) {
          if(number === 1 ){
            round = 0;
            player_one = false;
            document.getElementById("score").textContent = round;
            document.getElementById("player_two").style.color = "red";
            document.getElementById("player_one").style.color = "black";
            player_two = true;
          }else {
            round = round + number;
            document.getElementById("score").textContent = round;
          }
        } else if (player_two === true) {
          if(number === 1  ){
            round2 = 0;
            document.getElementById("score2").textContent = round2;
            document.getElementById("player_one").style.color = "red";
            document.getElementById("player_two").style.color = "black";
            player_one = true;
            player_two = false;
          }else {
            round2 = round2 + number;
            document.getElementById("score2").textContent = round2;
          }

        }
        
};

function implementGlobal(){
  if (player_one === true){
    global = global + round;
    round = 0;
    document.getElementById("score").textContent = round;
    document.getElementById("final_score").textContent = global;
    document.getElementById("player_two").style.color = "red";
    document.getElementById("player_one").style.color = "black";
    player_two = true;
    player_one = false;
   
  } else {
    global2 = global2 + round2;
    round2 = 0;
    document.getElementById("score2").textContent = round2;
    document.getElementById("final_score2").textContent = global2;
    player_two = false;
    player_one = true;
    document.getElementById("player_one").style.color = "red";
    document.getElementById("player_two").style.color = "black";
  }
  
  if(global >= 100){
    alert('player one is the winner !')
  } else if (global2 >= 100){
    alert('player two is the winner!');
  }
};

function newGame() {
    global = 0;
    round = 0;
    global2 = 0;
    round2 = 0;
    document.getElementById("score").textContent = round;
    document.getElementById("final_score").textContent = global;
    document.getElementById("score2").textContent = round2;
    document.getElementById("final_score2").textContent = global2;
    alert('Une nouvelle partie va commencer');
}



