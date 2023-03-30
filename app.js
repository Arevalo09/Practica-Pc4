import {seleccion,celdas } from "./dom.js";
import {comprobarEmpate, checkWin} from "./game.js"; 


// Definir los jugadores y su respectivo símbolo  game
const player1 = "X";
const player2 = "O";

// Variables para llevar la cuenta de los turnos y el jugador actual game
let turnoActual = 1;
let jugadorActual = player1;

// Variables celda ,jugadoractual,result, comprobarempate() turno actual,checkwin()

celdas.forEach( celda => celda.addEventListener("click", () => marcarCelda(celda) )) 

function marcarCelda(celda) {
  console.log(celda)
  console.log(jugadorActual)
  console.log(turnoActual)

  if (celda.innerHTML !== "") {
    alert("Esta celda ya ha sido marcada. Por favor seleccione otra.");
    return;
  }

  celda.innerHTML = jugadorActual;

  if (checkWin(jugadorActual)) {
    seleccion("#result").innerHTML = `El ganador es ${jugadorActual}`
    return;
  }

 
  if (comprobarEmpate()) {
    seleccion("#result").innerHTML = "¡Empate!";
    return;
  }

  
  turnoActual++;
  jugadorActual = turnoActual % 2 === 0 ? player2 : player1;
}

document.getElementById("reset").addEventListener("click", () => {
    
  turnoActual = 1;
  jugadorActual = player1;
 
celdas.forEach( celda => celda.innerHTML = "")
  document.querySelector("#result").innerHTML = "";
});

