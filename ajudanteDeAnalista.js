//SECOND TRY//
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

import chalk from 'chalk'
const prompt = require('prompt-sync')();

//fazer um objeto aqui, usar os prompts pra popular esse objeto, depois chamar as propriedades do objeto no console.log
let qtdHistorias = 0
let listaUsuarios = []
let listaRequisitos = []
let listaObjetivos = []
let usuario = ""
let response = ""


async function criaHistorias() {
    
    qtdHistorias = await prompt(chalk.greenBright('Quantas histórias você deseja criar?  '))
        
    if (qtdHistorias >= 1) {
        for (let i = 1; i <= qtdHistorias; i++){
        
            let usuario = await prompt(chalk.greenBright('Quem é o usuário, ou seja, o proprietário dessa história, a pessoa que irá utilizar a funcionalidade?  '))
                listaUsuarios.push( await usuario)
            let requisito = await prompt(chalk.greenBright('E qual é o requisito dessa história, ou seja, o que o usuário precisa fazer?  '))
                listaRequisitos.push( await requisito)
            let objetivo = await prompt(chalk.greenBright('E qual é o objetivo a ser alcançado por essa história, ou seja, o que se espera que aconteça após a ação ser executada?  '))
                listaObjetivos.push(await objetivo)
        
        }
        
        for (let i = 0; i <= qtdHistorias-1; i++){
    
            console.log(chalk.yellow(`Eu, como ${chalk.cyan.underline(listaUsuarios[i])}, preciso ${chalk.magenta.underline(listaRequisitos[i])} para ${chalk.blue.underline(listaObjetivos[i])} `))   
        
        }
    
    }
}

criaHistorias()


// (async function criaHistorias() {
//     for (let i = 1; i <= qtdHistorias; i++) {
//         usuario = await prompt(chalk.greenBright('Quem é o usuário, ou seja, o proprietário dessa história, a pessoa que irá utilizar a funcionalidade?  '))
//     }
// },
// response = await usuario,
// console.log(usuario)
// )