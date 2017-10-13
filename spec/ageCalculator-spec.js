import { AgeCalculator } from './../js/ageCalculator.js';


describe('AgeCalculator', function() {
  var reusableAgeCalculator;

  beforeEach(function() {
    reusableAgeCalculator = new AgeCalculator()
  });
    it('converts one earth year into seconds', function() {
      expect(reusableAgeCalculator.yearToSeconds(1)).toEqual(31536000)
    });

    it('converts one earth year into mercury years', function() {
      expect(reusableAgeCalculator.yearToMercury(3)).toEqual(0.72)
    });

    it('converts one earth year into Venus years', function() {
      expect(reusableAgeCalculator.yearToVenus(3)).toEqual(1.86)
    });

    it('converts one earth year into Mars years', function() {
      expect(reusableAgeCalculator.yearToMars(3)).toEqual(5.64)
    });

    it('converts one earth year into Jupiter years', function() {
      expect(reusableAgeCalculator.yearToJupiter(3)).toEqual(35.58)
    });

    it('tells how many YEARS old you are today based on entered birthday', function() {
      expect(reusableAgeCalculator.yearsOld("03/17/1984")).toEqual(33)
    });

    it('tells how many SECONDS old you are today based on entered birthday', function() {
      let today = Date.parse(new Date())
      let dateEntered = Date.parse(new Date("03/17/1984"));
      let dif = (today - dateEntered) * 1e-3
      let ageInSeconds = Math.abs(dif)
      expect(reusableAgeCalculator.secondsOld("03/17/1984")).toEqual(ageInSeconds)
    });

    it('calculates life expectancy based on region and smoking habits', function() {
      expect(reusableAgeCalculator.lifeExpectancy("France", true)).toEqual(74)
      expect(reusableAgeCalculator.lifeExpectancy("United States", false)).toEqual(79)
    });

    it('lets you know how much longer you can expect to live', function() {
      expect(reusableAgeCalculator.surpassedLifeExpectancy(33, 79)).toEqual(46)
    });

    it('lets you know how far past your life expectancy you have lived', function() {
      expect(reusableAgeCalculator.surpassedLifeExpectancy(88, 79)).toEqual(9)
    });


});
