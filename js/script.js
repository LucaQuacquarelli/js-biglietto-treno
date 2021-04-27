// Chiedee all'utente quanti anni ha
var yourAge = prompt("Quanti anni hai?");
document.getElementById("age").innerHTML = yourAge + " Anni";

// Chiedere all'utente quanti km vuole percorrere
var travel = prompt("Quanti KM vuoi percorrere?");
document.getElementById("km").innerHTML = travel + " Km";

// Calcolo del costo del biglietto
var ticketPrice = (travel * 0.21);
document.getElementById("price").innerHTML = ticketPrice + " &euro;";

// Sconto
if (yourAge < 18) {
    var youngster = (ticketPrice - ((ticketPrice * 20) / 100)).toFixed(2);
    document.getElementById("price").innerHTML = youngster + " &euro;";
} else (yourAge > 65); {
    var senior = (ticketPrice - ((ticketPrice * 40) / 100)).toFixed(2);
    document.getElementById("price").innerHTML = senior + " &euro;";
}