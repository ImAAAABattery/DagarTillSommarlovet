var today = new Date(); // skapar ett datumobjekt för dagens datum
var summerBreakStart = new Date(2023, 5, 15); // skapar ett datumobjekt för sommarlovets startdatum (15 juni 2023)

var timeDiff = summerBreakStart.getTime() - today.getTime(); // räknar ut antalet millisekunder mellan datumen
var daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // omvandlar millisekunderna till dagar och avrundar uppåt

document.getElementById("daysLeft").innerHTML = daysLeft; // visar antalet dagar kvar på webbsidan