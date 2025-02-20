/*****************************************************
                Lista de exercicio 03
 *****************************************************/
// 1. Crie um array de frutas com os seguintes elementos: Banana, Maçã, Pera, Uva, Morango.
// 2. Adicione Tangerina no final.
// 3. Adicione Goiaba no inicio.
// 4. Exiba o conteudo do indice 5.
// 5. Exclua o elemento uva.
// 6. Crie uma copia do array apenas com os elementos com indice 2, 3, e 4

console.log("-----------------atividade1----------------------")
var frutas = ["Banana","Maça","Pera","Uva","Morango"]
console.table(frutas);
console.log("-------------------atividade2-----------------")
frutas.push("tangerina")
console.table(frutas);
console.log("-------------------------atividade3---------------")
frutas.unshift("Goiaba")
console.table(frutas);
console.log("-----------------atividade4------------------------------")
console.log(frutas[5]);
console.log("-----------------------atividade5------------------")
var posiçao = frutas.indexOf("Uva");
frutas.splice(posiçao, 1);
console.log(frutas);
console.log("--------------------atividade6-----------------")
var copia = frutas.slice(2, 5);
console.table(copia);

//Criando um array numerico
var numero = [4, 3, 1, 9, 7, 2];
console.table(numeros)

console.log(numeros)[1];
console.log(numeros)[3];
console.log(numeros)[5];

// verificando se o array contem um item 
console.log = ("contem 9:",numeros.includes(9));
console.log("contem 0:", contem0);

//ordenando os elementos do vetor
numeros.sort();
console.log(numeros);

//invertendo a ordem ou posicao itens 
numeros.reserve();
console.table(numeros);

//alterando o valor de um elemento com base em sua posiçao
numeros[2] = 5;
console.table(numeros);

numero[0] += 3;
console.table(numeros);
numeros[5] = numeros[0] + numeros[1];
console.table(numeros);

















