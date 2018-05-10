const app = require('../scripts/app');

describe('Given an array of strings', () => {
  it('returns the pair if they have the same number of letters', () => {
    const strings = ['dog', 'god', 'arrow', 'balloon'];
    const expected = ['dog,god'];

    expect(app.manipulateStrings(strings)).toEqual(expected);
  });

  it('returns an empty string if there are no words with the same number of letters', () => {
    const strings = ['dog', 'balloon', 'rainbows', 'mathematics', 'no'];
    const expected = '';

    expect(app.manipulateStrings(strings)).toEqual(expected);
  });

  it('returns the pair only if they have the exact same letters', () => {
    const strings = ['dog', 'cat', 'arrow', 'balloon'];
    const expected = '';

    expect(app.manipulateStrings(strings)).toEqual(expected);
  });

  it('returns each single pair if there is more than one', () => {
    const strings = ['dog', 'god', 'overcast', 'overacts', 'balloon', 'rainbow'];
    const expected = ['dog,god', 'overcast,overacts']
  });
});