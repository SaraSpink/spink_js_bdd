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

    it('checks the date entered', function() {
      let dateEntered = "09/13/2017"
      expect(reusableAgeCalculator.dateEntered("09/13/2017")).toEqual("09/13/2017")
    });
});
