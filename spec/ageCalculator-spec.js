
import { ageCalculator } from './../js/ageCalculator.js';

describe('ageCalculator', function() {
  var reusableAgeCalculator;

  beforeEach(function() {
    reusableAgeCalculator = new ageCalculator()
  });
    it('converts one earth year into seconds', function() {
      expect(ageCalculator.yearToSeconds(1)).toEqual([31536000])
    });



});
