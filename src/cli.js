// @flow

import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import winston from 'winston';
import commander from 'commander';

import capture from './index';

winston.remove(winston.transports.Console);
winston.add(winston.transports.Console, { showLevel: false });

const pkg = path.resolve(__dirname, '../package.json');
const conf = JSON.parse(fs.readFileSync(pkg, 'utf8'));
winston.info(chalk.bold(`WEB-CAPTURE v${conf.version}`));

commander
.version(conf.version)
.usage('<options>')
.option('-u, --url [url]', 'Url to capture')
.option('-o, --output [output]', 'Output path')
.parse(process.argv);

if (!commander.url) {
  winston.error(chalk.red('No url provided. Please use the --url option.'));
  process.exit();
}

const rawOutputPath = commander.output || 'output.png';
const outputPath = path.resolve(__dirname, rawOutputPath);
const outputFile = path.extname(outputPath) === '.png' ? outputPath : `${outputPath}.png`;

winston.info(`Capturing ${chalk.cyan(commander.url)}`);
winston.info(`Writing to ${chalk.cyan(outputFile)}`);

capture(commander.url, outputFile)
.then(() => winston.info(chalk.cyan('Done.')))
.catch(error => winston.error(chalk.red(error)));
