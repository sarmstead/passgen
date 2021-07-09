const program = require('commander');

program.version('0.1.0').description('Simple Password Generator');

program
    .option('-l, --length <number>', 'length of password', '8')
    .option('-s, --save', 'save password to passwords.txt')
    .option('-nn, --no-numbers', 'remove numbers') // The number option is true by default
    .option('-ns, --no-symbols', 'remove symbols') // The symbol option is true by default
    .parse();

console.log(program.opts());