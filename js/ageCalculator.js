import { moment } from "./../node_modules/moment/moment.js"
export class AgeCalculator {
  constructor(age) {
  this.age = age;
  }

  yearToSeconds(years) {
    const yearInSeconds = 31536000;
    let ageInSeconds = years * yearInSeconds;
    return ageInSeconds
  }

  yearsOld(birthday) {
    let today = new Date();
    let dateEntered = new Date(birthday);
    let yearsOld = today.getFullYear() - dateEntered.getFullYear()
    return yearsOld;
  }

  secondsOld(birthday)

  yearToMercury(age) {
    const yearInMercury = 0.24;
    let ageInMercury = age * yearInMercury;
    return (ageInMercury.toFixed(2))*1
  }

  yearToVenus(age) {
    const yearInVenus = 0.62;
    let ageInVenus = age * yearInVenus;
    return (ageInVenus.toFixed(2))*1
  }

  yearToMars(age) {
    const yearInMars = 1.88;
    let ageInMars = age * yearInMars;
    return (ageInMars.toFixed(2))*1
  }

  yearToJupiter(age) {
    const yearInJupiter = 11.86;
    let ageInJupiter = age * yearInJupiter;
    return (ageInJupiter.toFixed(2))*1
  }
}
