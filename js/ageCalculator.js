export class ageCalculator {
  constructor(age) {
  this.age = age;
  }

  yearToSeconds(age) {
    const yearInSeconds = 31536000;
    let ageInSeconds = age * yearInSeconds;
    return ageInSeconds
  }



  // addInstrument(index){
  //   const availableItems = new Inventory()
  //   this.instruments.push(availableItems.instrumentInventory[index]);
  //   this.points.push(availableItems.instrumentPoints[index]);
  // }



}
