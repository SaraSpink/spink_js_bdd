import { AgeCalculator } from './../js/ageCalculator.js';
$(document).ready(function() {
  $('#birthdayInput').submit(function(event) {
    event.preventDefault();
    let birthday = $("#birthdate").val()
    let today = new Date ()
    let calculator = new AgeCalculator()
    let yearsOld = calculator.yearsOld(birthday)
    console.log(yearsOld)
    console.log(birthday)
    let text = `Your Current Age: ${yearsOld}`

    $('#ageInSeconds').text(text).show()


  })
  //
  // $('#getInstrumentsForm').submit(function(event) {
  //   event.preventDefault();
  //   let store = $("input:radio[name=musicstore]:checked").val();
  //   $('#beginning').slideUp()
  //   if (store === "pawn") {
  //     $('#pete').slideDown()
  //   } else {
  //     $('#archibald').slideDown()
  //   };
  // });
  //
  // $('#peteInstruments').submit(function(event) {
  //   event.preventDefault();
  //   let instrument = $("input:radio[name=instrument]:checked").val();
  //   $('#pete').slideUp();
  //   if (instrument !== "6") {
  //     band.addInstrument(instrument)
  //     $('#balance').text(band.addPoints(band.points));
  //     $('#instruments').text(band.instruments);
  //     $('#chords').text(band.chords)
  //     $('#practiceBar').show();
  //   }
  //
  //   if (band.addPoints(band.points) < 1){
  //     $('#loser').show();
  //   } else {
  //     $('#practiceBar').show();
  //   }
});
