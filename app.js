var chalk = require('chalk');
//console.log(chalk.blue.underline.bold('hello world'));
require('./lib/server')(1337);


console.log('Server running on ' + chalk.blue.underline.bold('http://localhost:1337'));
