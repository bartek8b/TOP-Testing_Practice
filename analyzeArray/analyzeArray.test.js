import { analyzeArray } from './analyzeArray';

describe('analyzeArray', () => {
  it('returns correct average, min, max, and length', () => {
    //With variables
    const input = [1, 8, 3, 4, 2, 6];
    const result = analyzeArray(input);
    expect(result).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });

  it('works for single element array', () => {
    //Without variables
    expect(analyzeArray([5])).toEqual({
      average: 5,
      min: 5,
      max: 5,
      length: 1,
    });
  });

  it('works for negative numbers', () => {
    const result = analyzeArray([-3, -7, 2]);
    expect(result).toEqual({
      average: -2.67,
      min: -7,
      max: 2,
      length: 3,
    });
  });
});
