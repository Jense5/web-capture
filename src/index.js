// @flow

import path from 'path';
import isUrl from 'is-url';
import webshot from 'webshot';

// The options to fetch the full webpage.
const OPTIONS = { shotSize: { width: 'all', height: 'all' } };

/**
 * Returns a promise to capture the full site in an image that will be written to the given output
 * location. The output will be an PNG image.
 * @param {string} url The url of the website to create an image of
 * @param {string} outputPath The outputPath where the image should be written to
 * @returns {Promise<string>} A promise that will create the image and returns the absolute path. */
export default (url: string, outputPath: string) => {
  const aop = path.resolve(process.cwd(), outputPath);
  const output = path.extname(aop) === '.png' ? aop : path.resolve(aop, 'output.png');
  return new Promise((resolve, reject) => {
    if (isUrl(url)) {
      webshot(url, output, OPTIONS, (err) => {
        if (err) { reject(err); }
        resolve(output);
      });
    } else { reject('Invalid url provided.'); }
  });
};
