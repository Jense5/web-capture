import capture from '../src/index';

describe('Default tests', () => {
  it('should add', (done) => {
    capture('invalid', '')
    .then(() => { done('Should not succeed!'); })
    .catch(() => done());
  });
});
