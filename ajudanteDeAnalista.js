//FALTA:
//colocar nomes das histórias
//ajustar números das histórias nas perguntas
//enumerar as perguntas

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

import chalk from 'chalk'
const prompt = require('prompt-sync')();

let qtdHistorias = 0
let listaUsuarios = []
let listaRequisitos = []
let listaObjetivos = []

async function criaHistorias() {
    
    qtdHistorias = await prompt(chalk.greenBright.underline('Quantas histórias você deseja criar?')+'  ')
        
    if (qtdHistorias >= 1) {
        
        for (let i = 1; i <= qtdHistorias; i++){
            
            console.log((``))
            console.log(chalk.greenBright(`História ${i}:`))
            listaUsuarios.push( await prompt(chalk.greenBright('1. Quem é o usuário, ou seja, o proprietário dessa história, a pessoa que irá utilizar a funcionalidade?  ')))
            listaRequisitos.push( await prompt(chalk.greenBright('2. E qual é o requisito dessa história, ou seja, o que o usuário precisa fazer?  ')))
            listaObjetivos.push( await prompt(chalk.greenBright('3. E qual é o objetivo a ser alcançado por essa história, ou seja, o que se espera que aconteça após a ação ser executada?  ')))
            
        }

        console.log((``))
        console.log(chalk.yellow.underline(`Suas histórias foram criadas!`))
        console.log((``))
        
        for (let i = 0; i <= qtdHistorias-1; i++){
            
            console.log(chalk.yellow(`História ${i+1}:`))
            console.log(chalk.yellow(`Eu, como ${chalk.cyan.underline(listaUsuarios[i])}, preciso ${chalk.magenta.underline(listaRequisitos[i])} para ${chalk.blue.underline(listaObjetivos[i])} `))   
            console.log((``))
            
        }
    
    } else {
        
        console.log(chalk.red.underline(`Nenhuma história criada`))

    }

}

criaHistorias()
