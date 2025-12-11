let pantalla = document.getElementById("pantalla");
let numeroAnterior = "";
let operacionActual = "";
let operador = "";

function agregarNumero(num) {
  if (pantalla.innerText === "0" || operacionActual === "") {
    pantalla.innerText = num;
  } else {
    pantalla.innerText += num;
  }
  operacionActual += num;
}

function seleccionarOperacion(op) {
  numeroAnterior = operacionActual;
  operador = op;
  operacionActual = "";
  pantalla.innerText = "0";
}

function calcular() {
  let resultado = 0;
  let actual = operacionActual;

  switch (operador) {
    case "+":
      resultado = parseFloat(numeroAnterior) + parseFloat(actual);
      break;
    case "-":
      resultado = parseFloat(numeroAnterior) - parseFloat(actual);
      break;
    case "*":
      resultado = parseFloat(numeroAnterior) * parseFloat(actual);
      break;
    case "/":
      resultado = parseFloat(numeroAnterior) / parseFloat(actual);
      break;
  }

  pantalla.innerText = resultado;
  operacionActual = resultado.toString();
  numeroAnterior = "";
  operador = "";
}

function limpiar() {
  pantalla.innerText = "0";
  numeroAnterior = "";
  operacionActual = "";
  operador = "";
}
