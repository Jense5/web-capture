
<h1 align="center">Web Capture</h1>

<p align="center"><b>Promise and cli wrapper for <a href="https://github.com/brenden/node-webshot">node-webshot</a></b></p>

<p align="center">
  <img src="https://img.shields.io/travis/Jense5/web-capture.svg?style=flat-square"/>
  <img src="https://img.shields.io/npm/v/web-capture.svg?style=flat-square"/>
  <img src="https://img.shields.io/npm/l/web-capture.svg?style=flat-square"/>
  <img src="https://img.shields.io/codecov/c/github/Jense5/web-capture.svg?style=flat-square"/>
  <img src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square"/>
</p>

```sh
# Capture screenshots of websites via terminal.
$ npm install -g web-capture
$ web-capture --url 'http://consultant.js.org' --output 'consultant.png'
$ open 'consultant.png'
```

```js
// Use it via the module.
import capture from 'web-capture';
capture('http://consultant.js.org', 'consultant.png')
.then(() => winston.info('Done!'))
.catch(error => winston.error(error));
```

<p align="center" style="font-family:monospace"><b>- MIT -</b></p>
