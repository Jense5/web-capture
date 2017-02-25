import path from 'path';
import fsExtra from 'fs-extra';
import capture from '../src/index';

describe('Default tests', () => {
  it('should request valid url', (done) => {
    const file = path.resolve(__dirname, 'output.png');
    capture('http://google.com', file)
    .then(() => {
      fsExtra.removeSync(file);
      done();
    })
    .catch(done);
  }).timeout(25000);
  it('should not request invalid url', (done) => {
    capture('invalid', '')
    .then(() => { done('Should not succeed!'); })
    .catch(() => done());
  });
});
