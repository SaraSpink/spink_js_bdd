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
  
});
