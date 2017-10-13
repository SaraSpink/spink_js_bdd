export class ageCalculator {
  constructor(age) {
  this.age = age;
  }

  yearToSeconds(age) {
    const yearInSeconds = 31536000;
    let ageInSeconds = age * yearInSeconds;
    return ageInSeconds
  }

  yearToMercury(age) {
    const yearInMercury = 0.24;
    let ageInMercury = age * yearInMercury;
    return ageInMercury
  }

  yearToVenus(age) {
    const yearInVenus = 0.62;
    let ageInVenus = age * yearInVenus;
    return ageInVenus
  }

  yearToMars(age) {
    const yearInMars = 1.88;
    let ageInMars = age * yearInMars;
    return ageInMars
  }

  yearToJupiter(age) {
    const yearInJupiter = 11.86;
    let ageInJupiter = age * yearInJupiter;
    return ageInJupiter
  }



}
