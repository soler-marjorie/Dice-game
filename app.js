// ------------------------------------------------ START MY VARIABLES ------------------------------------------
let main = document.querySelector('main');

//player1
let redDot1 = document.getElementById('redDot1');
let playerTitle1 = document.getElementById('playerTitle1');
let global1 = 0;
let totalGlobal = 0;
let current1 = 0;
let total = 0;

//button
let newGameBtn = document.getElementById('newGame');
let rollBtn  = document.getElementById('roll');
let holdBtn = document.getElementById('btn-hold');

//player2
let redDot2 = document.getElementById('redDot2');
let playerTitle2 = document.getElementById('playerTitle2');
let global2 = 0;
let totalGlobal2 = 0;
let current2 = 0;
let total2 = 0;


//what turn on this variable
let player = 0;
//------------------------------------------------ END MY VARIABLES -----------------------------------------------

// ----------------------------------------------- START BODY JS --------------------------------------------------

//function new game start ------------------------------------------------
function newgame(){

  global1 = 0;
  totalGlobal = 0;
  document.getElementById('global1').textContent = totalGlobal;
  current1 = 0;
  total = 0;
  document.getElementById('current1').textContent = total;

  global2 = 0;
  totalGlobal2 = 0;
  document.getElementById('global2').textContent = totalGlobal2;
  current2 = 0;
  total2 = 0;
  document.getElementById('current2').textContent = total2;

  rollBtn.addEventListener('click', roll);
  holdBtn.addEventListener('click', hold);

  main.style.background = 'white';
  redDot1.style.opacity = '0';
  redDot2.style.opacity = '0';
  playerTitle1.style.fontWeight = 'normal';
  playerTitle2.style.fontWeight = 'normal';

  whoActive();
  currentStyleCss();

  alert(`${player} start`);
  
}
newGameBtn.addEventListener('click', newgame);
//-----------------------------------------------------------------------------


//Function roll button event -------------------------------------------------------
function roll(){
  whoActive();
  currentStyleCss();

  currentScore();
}
rollBtn.addEventListener('click', roll);
//----------------------------------------------------------------------------------

//function hold button who add current at global
function hold(){

  if(player === 'player1'){
    global1 += total;
    totalGlobal = global1;
    console.log(global1);
    document.getElementById('global1').textContent = totalGlobal;
    player = 'player2';
    current1 = 0;
    document.getElementById('current1').textContent = current1;

  } else if (player === 'player2'){
    global2 += total2;
    totalGlobal2 = global2;
    console.log(global2);
    document.getElementById('global2').textContent = totalGlobal2;
    player = 'player1';
    current2 = 0;
    document.getElementById('current2').textContent = current2; 
  }

  
  winner();
}
holdBtn.addEventListener('click', hold);
//-------------------------------------------------------------------------------



// ----------------------------------------------- END BODY JS ----------------------------------------------------


// ----------------------------------------------- START USED FUNCTIONS -------------------------------------------

//function random number --------------------------------------------
//function picture on dice--------------------------------------------
function pictureDice(){
  let dice = Math.ceil(Math.random()*6);

  //random number
  let picture = dice;
  //Picture dice
  picture = document.getElementById('dicePicture');
  picture.src = 'images/dice-' + dice + '.png';
  return dice;
}
//--------------------------------------------------------------------



//function who active player : player1 or player2 --------------------
function whoActive(){
  if(player === 0){
      player = Math.ceil(Math.random()*2);
      return player = `player${player}`;
  }  
}


//function who switch player when dice = 1 --------------------------
function switchPlayer(){
  if (player === 'player1'){
    document.getElementsByClassName('currentScore1').style.display = "block";
    document.getElementsByClassName('currentScore2').style.display = "hidden";
  } 
  if(player === 'player2'){
    document.getElementsByClassName('currentScore1').style.display = "hidden";
    document.getElementsByClassName('currentScore2').style.display = "block";
  }
}


//function css for active player -------------------------------------
function currentStyleCss(){

  if (player == 'player1'){
    main.style.background = 'linear-gradient(90deg, #BDC0C0 50%, white 50%)';
    redDot1.style.opacity = '100';
    redDot2.style.opacity = '0';
    playerTitle1.style.fontWeight = 'bolder';
    playerTitle2.style.fontWeight = 'normal';
  } 
  
  else if (player == 'player2'){
    main.style.background = 'linear-gradient(90deg, white 50%, #BDC0C0 50%)';
    redDot2.style.opacity = '100';
    redDot1.style.opacity = '0';
    playerTitle2.style.fontWeight = 'bolder';
    playerTitle1.style.fontWeight = 'normal';
  }
}
//-----------------------------------------------------------------------------



//function current score with roll dice ---------------------------------------
function currentScore(){
  let nbrrand = pictureDice();

  if (nbrrand > 1){
    if(player === 'player1'){
      current1 += nbrrand;
      total = current1;
      console.log(current1);
      document.getElementById('current1').textContent = total;
    }else if (player === 'player2'){
      current2 += nbrrand;
      total2 = current2;
      console.log(current2)
      document.getElementById('current2').textContent = total2;
    }
  } 
  if (nbrrand === 1){
    if(player === 'player1'){
      player = 'player2';
      current1 = 0;
      total = 0;
      document.getElementById('current1').textContent = current1;
    }else if(player === 'player2'){
      player = 'player1';
      current2 = 0;
      total2 = 0;
      document.getElementById('current2').textContent = current2;
      
    }
  }

  holdBtn.addEventListener('click', hold);
}
//------------------------------------------------------------------------------

//function player win -----------------------------------------------------------
function winner(){
  if (global1 >= 100) {
    alert('Player 1 won !!!');
  } else if (global2 >= 100){
    alert('player 2 won !!!');
  }
}
//---------------------------------------------------------------------------------