import { suma, multiplica } from './controller.js'
import chalk from 'chalk';


const sum1 = suma(4, 5)
const sum2 = suma(1, 2)
const multi = multiplica(sum1, sum2)

console.log(sum1)
console.log(sum2)
console.log(chalk.green(multi))


console.log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));