var today = new Date(); // skapar ett datumobjekt för dagens datum
var easterBreakStart = new Date(2023, 4, 11); // skapar ett datumobjekt för påsklovets startdatum (11 maj 2023)

var timeDiff = easterBreakStart.getTime() - today.getTime(); // räknar ut antalet millisekunder mellan datumen
var daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // omvandlar millisekunderna till dagar och avrundar uppåt

var weekdaysLeft = 0;
var excludedDates = [
  new Date(2023, 4, 6), // datumet för ledighet 1
  new Date(2023, 4, 7) // datumet för ledighet 2
];
var currentDate = today;
while (currentDate <= easterBreakStart) {
  var dayOfWeek = currentDate.getDay();
  var isExcludedDate = excludedDates.some(function(excludedDate) {
    return excludedDate.getTime() === currentDate.getTime();
  });
  if (dayOfWeek !== 0 && dayOfWeek !== 6 && !isExcludedDate) {
    weekdaysLeft++;
  }
  currentDate.setDate(currentDate.getDate() + 1);
}

document.getElementById("daysLeft").innerHTML = daysLeft; // visar antalet dagar kvar på webbsidan
document.getElementById("schooldaysLeft").innerHTML = weekdaysLeft; // visar antalet vardagar kvar på webbsidan
