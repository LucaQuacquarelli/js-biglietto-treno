// Chiedee all'utente quanti anni ha
var yourAge = parseInt(prompt("Quanti anni hai?"));
document.getElementById("age").innerHTML = yourAge + " Anni";

// Chiedere all'utente quanti km vuole percorrere
var travel = parseInt(prompt("Quanti KM vuoi percorrere?"));
document.getElementById("km").innerHTML = travel + " Km";

// Calcolo del costo del biglietto
var ticketPrice = (travel * 0.21);
document.getElementById("price").innerHTML = ticketPrice + " &euro;";

// Sconto
var sconto = 0;
if (yourAge < 18) {
    sconto = (ticketPrice - ((ticketPrice * 20) / 100)).toFixed(2);
    document.getElementById("price").innerHTML = sconto + " &euro;";
} else if (yourAge >= 65) {
    sconto = (ticketPrice - ((ticketPrice * 40) / 100)).toFixed(2);
    document.getElementById("price").innerHTML = sconto + " &euro;";
}