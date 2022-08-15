//SECOND TRY//
import { createRequire } from "module";
const require = createRequire(import.meta.url);
import chalk from 'chalk'
const prompt = require('prompt-sync')();

//fazer um objeto aqui, usar os prompts pra popular esse objeto, depois chamar as propriedades do objeto no console.log

let usuario = prompt(chalk.greenBright('Quem é o usuário, ou seja, o proprietário dessa história, a pessoa que irá utilizar a funcionalidade?  '))

let requisito = prompt(chalk.greenBright('E qual é o requisito dessa história, ou seja, o que o usuário precisa fazer?  '))

let objetivo = prompt(chalk.greenBright('E qual é o objetivo a ser alcançado por essa história, ou seja, o que se espera que aconteça após a ação ser executada?  '))


console.log(chalk.bgBlack.white(`Eu, como ${chalk.cyan.underline(usuario)}, preciso ${chalk.magenta.underline(requisito)} para ${chalk.yellow.underline(objetivo)} `))