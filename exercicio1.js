/* 

#let e const são palvras reservado do JS que são utilizadas na declaração de varáveis, let permite alterção do valor da variável enquanto const não permite, const são para valores contantes. 
Ex.:

let nome // sem o atribuição (=) ele nasce como undefined
let idade = 18 //Number
const estudante = true

# Comando prompt
prompt('frase ou pergunta ao usuário') retorna uma string
const pergunta = prompt('minha pergunta?')

# Função console.log() é uma gunção que imprime algo no console do navegador, utilizamos muito.

# Tipos de dados primitivos
Strings: 'isso é um texto' textos são ditos como Strings.
Numeros: 12, 15.2, 0, -2 são numeros ditos do tipo Number. 
Booleanos: true (verdadeiro) ou false (falso)

# Array
const meuArray = [] // arrays são conhecidos como listas, separamos os seus valores com , (vírgula)
const listSupermercado = ['1kg Cenoura', '30 ovos', '12 leites', '4kg arroz']
const idadesMinhaFamilia = [33, 30, 7, 4]
const arrayComValorMisto = ['Jessica', 33, 2, true, [1,2,3], { nome: 'Antonio', idade: 7 }]
* arrayComValorMisto[5] eu tenho o valor de um objeto { nome: 'Antonio', idade: 7 }
* array possuem indices 0, 1, 2, 3 ..., por exemplo console.log(arrayComValorMisto[0]) irá imprimir 'Jessica'
* arrayComValorMisto.length retorna a quantidade de itens no array, nesse caso são 4 itens no array
*** idadesMinhaFamilia.push(0) // o array novo terá os valores [33, 30, 7, 4, 0]

# Objeto
const meuObjeto = { nome: 'Jessica', idade: 30, filhos: 2, estudante: true, comidasPreferidas: ['lasanha', 'figo'] }
* console.log(meuObjeto.nome) ou console.log(meuObjeto['nome']) ambos impriram 'Jessica'
* console.log(meuObjeto.comidasPreferidas) -> imprime no console ['lasanha', 'figo']

# Funções
function nomeDaFuncaoAqueVoceQuiser(anosDeTrabalho) {
    const anosDeServico = anosDeTrabalho[0] + anosDeTrabalho[1] + anosDeTrabalho[2] //16
    console.log('O total de de anos trabalho são:' + anosDeServico) // irá imprimir no console 'O total de de anos trabalho são: 16'
}
nomeDaFuncaoAqueVoceQuiser([5, 3, 8])

function minhaFuncaoComParametros(nome, idade) {    
    console.log(`O nome da pessoa é ${nome} e ela tem ${idade} anos`)
}
Invocar uma função é muito facil... minhaFuncaoComParametros('Jessica', 33)

*** A palavra reservada para criar uma função se chama function.

# Comparadores lógicos
&& -> Só é verdade se ambos forem verdadeiros Ex: (true && true) é verdadeiro, (true && false) é falso.
|| -> Se um ou outro for verdadeiro já é o suficiente Ex. (true || false) é verdadeiro, só é falso quando ambos são falso (false || false)
! -> Negação inverte um valor, por exemplo x = true, !x será false. y = false, !y será true.

# Operadores de comparação ***
=== : igual
!== : diferente
> : maior
< : menor
>= : maior ou igual
<= : menor ou igual

Ex.:
1 === 1 // retorna true
1 === 2 // retorna false
1 !== 1 // retorna false
1 !== 2 // retorna true
2 > 3 // retorna false
4 > 1 // retorna true
2 > 2 // retorna false
2 < 3 // retorna true
4 < 1 // retorna false
2 > 2 // retorna false
1 >= 1 // retorna true
5 >= 1 //retorna false
1 <= 1 // retorna true
5 <= 1 //retorna false
0 <= 1 //retorna true

const x = 18 >= 20 || 12 !== 36 // x = true
const y = 18 === 18 && 12 > 10 // y = true

# Condicionais (if ou if + else ou if + else if + else)
* Se for verdadeiro entra no if
* O IF ele pergunta se a expressão é verdadeira e só entra nele se for verdadeira

if (18 === 18 && 12 > 10) {
    console.log('entrou no if') <--
}

if (1 !== 1) {
    console.log('entrou no if')
} else {
    console.log('entrou no else') <--
}

if (1 !== 1) {
    console.log('entrou no if')
} else if (1 === 1) {
    console.log('entrou no else if') <--
} else {
    console.log('entrou no else')
}

* else só existe se tivermos um IF, assim com else if também só existe se tivermo um IF

# Laços -> Servem para fazer repeticoes


function imprimeDadosAluno(nome) {
    console.log('Seja bem vindo ' + nome)
    console.log('Sua sala é a 203')
    console.log('Tenha uma ótima aula!')
}
imprimeDadosAluno('Jessica')
imprimeDadosAluno('Rafa')
imprimeDadosAluno('Vini')
imprimeDadosAluno('Manu')
imprimeDadosAluno('Rodrigo')

---- Soluçao com while

# while(expressao) -> enquanto for verdadeiro continua repetindo, quando for falso sai fora


Ex.:

let i = 0
const alunos = ['Jessica', 'Rafa', 'Vini', 'Manu', 'Rodrigo'] //length é 5

while (i < alunos.length) {
    imprimeDadosAluno(alunos[i])
    i++    
}


# Explicando o loop
1 - volta
    i = 0 -> while(0 < 5) -> imprimeDadosAluno('Jessica')

2 - i = 1 -> while(1 < 5) -> imprimeDadosAluno('Rafa')


*/



const idade = 18
const nome = "João"
let temCNH //undefined

let pergunta = prompt('Voce tem CNH? Digite S para sim e N para não.')
