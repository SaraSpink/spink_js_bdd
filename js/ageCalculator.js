export class ageCalculator {
  constructor(age) {
    this.age = age;
  }

  yearToSeconds(age) {
    let age = age * 31536000
    return age;
  }

  yearToSeconds(age){
    const yearToSeconds = new ageCalculator()
    this.age.push(yearToSeconds.age[age]);
  }

  addInstrument(index){
    const availableItems = new Inventory()
    this.instruments.push(availableItems.instrumentInventory[index]);
    this.points.push(availableItems.instrumentPoints[index]);
  }

  addExtras(index){
    const availableItems = new Inventory()
    this.extras.push(availableItems.extrasInventory[index]);
    this.points.push(availableItems.extrasPoints[index]);
  }

  transaction(points){
    this.points.push(points);
  }

}
