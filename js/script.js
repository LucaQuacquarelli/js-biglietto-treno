// Chiedee all'utente quanti anni ha
var yourAge = parseInt(prompt("Quanti anni hai?"));
console.log(yourAge);
document.getElementById("age").innerHTML = yourAge + " Anni";

// Chiedere all'utente quanti km vuole percorrere
var travel = parseInt(prompt("Quanti KM vuoi percorrere?"));
console.log(travel);
document.getElementById("km").innerHTML = travel + " Km";

// Calcolo del costo del biglietto
var ticketPrice = (travel * 0.21).toFixed(2);
console.log("Prezzo base", ticketPrice);
document.getElementById("price").innerHTML = ticketPrice + " &euro;";

// Sconto
var sconto = 0;
if (yourAge < 18) {
    sconto = (ticketPrice - ((ticketPrice * 20) / 100)).toFixed(2);
    console.log("Prezzo scontato", sconto);
    document.getElementById("price").innerHTML = sconto + " &euro;";
    document.getElementById("scount").innerHTML = "Congratulazioni!! Hai applicato uno sconto del 20% perchè sei minorenne!";
} else if (yourAge >= 65) {
    sconto = (ticketPrice - ((ticketPrice * 40) / 100)).toFixed(2);
    console.log("Prezzo scontato", sconto);
    document.getElementById("price").innerHTML = sconto + " &euro;";
    document.getElementById("scount").innerHTML = "Congratulazioni!! Hai applicato uno sconto del 40% perchè sei Over 65!";
}