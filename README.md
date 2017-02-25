
<h1 align="center">Web Capture</h1>

<p align="center"><b>Promise and cli wrapper for <a href="https://github.com/brenden/node-webshot">node-webshot</a></b></p>

```sh
# Capture screenshots of websites via terminal.
$ npm install -g web-cap.ure
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
