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

  secondsOld(birthday) {
    let today = Date.parse(new Date())
    let dateEntered = Date.parse(new Date(birthday));
    let dif = (today - dateEntered) * 1e-3
    let secondsOld = Math.abs(dif)
    return secondsOld;
    console.log(secondsOld)
  }

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

  lifeExpectancy(location, smoker){
    let lifeExpectancy = 0
    if(location === "United States" && smoker === false){
      lifeExpectancy = 79
    } else if (location === "United States" && smoker === true){
      lifeExpectancy = 70
    } else if (location === "France" && smoker === false){
      lifeExpectancy = 82
    } else if (location === "France" && smoker === true){
      lifeExpectancy = 74
    } else if (location === "New Zealand" && smoker === false){
      lifeExpectancy = 81
    } else if (location === "New Zealand" && smoker === true){
      lifeExpectancy = 72
    } else if (location === "China" && smoker === false){
      lifeExpectancy = 76
    } else if (location === "China" && smoker === true){
      lifeExpectancy = 67
    } else if (location === "Kenya" && smoker === false){
      lifeExpectancy = 63
    } else if (location === "Kenya" && smoker === true){
      lifeExpectancy = 55
    } else if (location === "Brazil" && smoker === false){
      lifeExpectancy = 75
    } else if (location === "Brazil" && smoker === true){
      lifeExpectancy = 67
    } else {
      lifeExpectancy = 79
    }
    return lifeExpectancy;
  }

  surpassedLifeExpectancy(age, lifeExpectancy) {
    if (lifeExpectancy - age > 0) {
      return (lifeExpectancy - age)
    } else {
      return "Shouldn't you be dead by now?"
    }
  }
}
