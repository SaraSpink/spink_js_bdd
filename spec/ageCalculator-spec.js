
import { ageCalculator } from './../js/ageCalculator.js';

describe('ageCalculator', function() {
  var reusableAgeCalculator;

  beforeEach(function() {
    reusableAgeCalculator = new ageCalculator()
  });
    it('converts one earth year into seconds', function() {
      expect(reusableAgeCalculator.yearToSeconds(1)).toEqual(31536000)
    });

    it('converts one earth year into mercury years', function() {
      expect(reusableAgeCalculator.yearToMercury(3)).toEqual(0.72)
    });

    it('converts one earth year into Mars years', function() {
      expect(reusableAgeCalculator.yearToMars(3)).toEqual(5.64)
    });

    it('converts one earth year into Mars years', function() {
      expect(reusableAgeCalculator.yearToMars(3)).toEqual(5.64)
    });

    it('converts one earth year into Jupiter years', function() {
      expect(reusableAgeCalculator.yearToJupiter(3)).toEqual(35.58)
    });


});
