// Sätt datumet för påsklovet
var easterVacationDate = new Date('2023-06-13');

// Räkna ut antalet millisekunder mellan idag och påsklovet
var timeDiff = easterVacationDate.getTime() - Date.now();

// Räkna ut antalet dagar kvar till påsklovet
var daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));

// Räkna ut antalet vardagar kvar till påsklovet
var weekdaysLeft = 0;
for (var i = 0; i < daysLeft; i++) {
  var day = new Date(Date.now() + (i * 24 * 3600 * 1000)).getDay();
  if (day >= 1 && day <= 5) {
    weekdaysLeft++;
  }
}

// Uppdatera texten på sidan med antalet dagar kvar och antalet vardagar kvar
var daysElement = document.getElementById('days');
daysElement.textContent = daysLeft;

var weekdaysElement = document.getElementById('weekdays');
weekdaysElement.textContent = weekdaysLeft;

