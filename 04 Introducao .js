
/***************************************************** 
                Exercícios para fixação 
/*****************************************************/
/* 
1. Crie uma variável e atribua o nome de uma pessoa; 
2. Crie uma variável e atribua o nome de um banco; 
3. Crie uma variável e atribua o número da agência; 
4. Crie uma variável e atribua o número da conta; 
5. Crie uma variável e atribua o saldo da conta; 
6. Imprima os dados e o saldo da conta; 
7. Efetue e imprima 5 movimentações na conta; 
8. Imprima novamente os dados e o saldo da conta;
*/


let nome = "Pafúncio";
let banco = "SantoAndré";
let agencia = 5866;
let conta = "15874-9";
let saldo = 500;
console.log("*****************", banco, "*****************");
console.log("Cliente:", nome);
console.log("Agência:", agencia, "| Conta:", conta);
console.log("Seu saldo é de R$", saldo);


console.log("    + Depósito: R$75,00");
saldo = saldo + 75;
console.log("    + Depósito: R$100,00");
saldo = saldo + 100;
console.log("    - Saque: R$150,00");
saldo = saldo - 150;
console.log("    - Saque: R$200,00");
saldo = saldo - 200;
console.log("    + Depósito: R$50,00");
saldo += 50; //mesma coisa que > saldo = saldo + 50;



console.log("*****************", banco, "*****************");
console.log("Cliente:", nome);
console.log("Agência:", agencia, "| Conta:", conta);
console.log("Seu saldo é de R$", saldo);

//operações aritmeticas
var v1 = 12.5;
var v2 = 4.7;
console.log ("-------------------------------");
console.log("Valores: v1 =" , v1,"| v2 =," v2);
console.log("-----------------------------------");
console.log("soma: v1+v2 =", v1 + v2);
console.log("subtração: v1-v2 =", v1 - v2);
console.log("Multiplicação: v1*v2 =", v1 * v2);
console.log("divisão: v1/v2 =", v1 / v2);

v1 = 10;
v2 = 3;
console.log("--------------------");
console.log("Valores: v1 =", v1, " | v2 =", v2);
console.log("----------------------------------");
console.log("Resto da divisão inteira: v1 % v2 =", v1 % v2);
console.log("Exponeciação: v1**v2 (v1 elevado á v2) =", v1 ** v2);


