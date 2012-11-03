
var myScore = 0;  // Tu Puntaje
var robotScore = 0; // Puntaje Robot!
var maxScore = 100; // Puntaje Maximo!
var myName; // Nombre del Jugador

// Función Principal del Programa
// Tip: No necesitan modificar aquí ;)
var main = function() {
    
    // Solicitamos el Nombre del Jugador
    myName = prompt("Nombre del Jugador");
    drawName(myName);
    
    // Jugamos hasta que exista un ganador!!
    while(!isWinner(myScore, robotScore)) {
        play();        
    }
};


var play = function() {
    // Tu Jugador
    var my1 = rollDice();
    var my2 = rollDice();
    drawPlay(myName, my1, my2);
    
    // Robot
    var robot1 = rollDice();
    var robot2 = rollDice();
    drawPlay('Robot', robot1, robot2);

    // Calculamos los puntajes
    myScore += calculateScore(my1, my2);
    robotScore += calculateScore(robot1, robot2);
    
    drawScore('my', myScore);
    drawScore('robot', robotScore);
};


var rollDice = function() {
    return rand(6);
};


var calculateScore = function(d1, d2) {
    var score = 0;
    
    if(isOne(d1, d2)) {
       score = 1
    } else if(isPair(d1, d2)) {
       score = (d1+ d2)*2
    } else {
       score = d1 + d2
    }
    
    return score;
};


var isOne = function(d1, d2) {
       return d1==1 || d2==1;                 
};


var isPair = function(d1, d2) {
    return d1==d2;
};


var isWinner = function(my, robot) {
    if (my >= 100){
         winner('my')
             }
    if (robot >= 100){
         winner('robot')
             }            
    return (my >= 100 || robot >= 100);
    
   
};

































var rand = function(number) {
    return Math.floor(Math.random(number)*number) + 1;
};

var drawPlay = function(who, d1, d2) {
    var message = document.createElement('p');
    var text = document.createTextNode(who + ': ' + d1 + ' y ' + d2 + ' - Ganó ' + calculateScore(d1, d2) + ' puntos');
    message.appendChild(text);
  document.getElementById('result').appendChild(message);
};

var drawScore = function(who, points) {
   document.getElementById(who + 'Score').innerHTML = points;
};

var drawName = function(name) {
  document.getElementById('username').innerHTML = name;
};

var winner = function(who) {
  document.getElementById(who + 'Score').style.color = '#0F0';
};

main();
​