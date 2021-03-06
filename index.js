#!/usr/bin/env node

const program = require('commander');
const clipboardy = require('clipboardy');
const chalk = require('chalk');
const createPassword = require('./utils/createPassword');

program.version('0.1.0').description('Simple Password Generator');

program
    .option('-l, --length <number>', 'length of password', '130')
    .option('-s, --save', 'save password to passwords.txt')
    .option('-nn, --no-numbers', 'remove numbers') // The number option is true by default
    .option('-ns, --no-symbols', 'remove symbols') // The symbol option is true by default
    // .option('-ne, --no-emojis', 'remove emojis') // The emoji option is true by default
    .parse();

const {length, save, numbers, symbols} = program.opts();

// Get generated password
const generatedPassword = createPassword(length, numbers, symbols);

// Copy to clipboard
clipboardy.writeSync(generatedPassword);

// Inform user about copied password
console.log(chalk.green('Success! Your password is copied to your clipboard.'));