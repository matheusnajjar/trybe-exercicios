// Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7: 

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

for (let index = 0; index < numbers.length; index++) {
    console.log(`Índice do array na posição ${index}: ${numbers[index]}`);
}

console.log();
console.log('---------------------------------------------------------');
console.log();

// 2 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let soma = 0;

for (let index = 0; index < numbers.length; index++) {
    soma += numbers[index]
}

console.log(`A soma de todos os valores do array é igual a: ${soma}`);

console.log();
console.log('---------------------------------------------------------');
console.log();

// 3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

const media = soma / 10;

console.log(`A média aritmética dos valores contidos no array é: ${media}`);

console.log();
console.log('---------------------------------------------------------');
console.log();

// 4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if (media > 20) {
    console.log('Valor maior que 20');
} else {
    console.log('Valor menor ou igual a 20');
}

console.log();
console.log('---------------------------------------------------------');
console.log();

// 5 - Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let maiorNumero = 0;

for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > maiorNumero) {
        maiorNumero = numbers[index];
    }
}

console.log(`O maior número contido no array é: ${maiorNumero}`);

console.log();
console.log('---------------------------------------------------------');
console.log();

// 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numerosImpares = 0;

for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] % 2 != 0) {
        numerosImpares += 1;
    }
    
}

if (numerosImpares == 0) {
    console.log(`Nenhum valor ímpar encontrado`);
} else {
    console.log(`Existem ${numerosImpares} valor(es) ímpar(es) no array`);
}

console.log();
console.log('---------------------------------------------------------');
console.log();

// 7 - Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let menorNumero = 999999999;

for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] < menorNumero) {
        menorNumero = numbers[index];
    }
}

console.log(`O menor número contido no array é: ${menorNumero}`);

console.log();
console.log('---------------------------------------------------------');
console.log();

// 8 - Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

let myArray = [];

for (let index = 1; index <= 25; index++) {
    myArray.push(index);
}

console.log(myArray);

console.log();
console.log('---------------------------------------------------------');
console.log();

// 9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

for (let index = 0; index < myArray.length; index++) {
    console.log(`O resultado de ${index + 1} dividido por 2 é = ${myArray[index] / 2}`);
}

console.log();
console.log('---------------------------------------------------------');
console.log();