/*************************************************************************** */
// crie um vetor que receberá dados de um usuario.
var dados = [];
console.log("favor informar seu nome:");
dados.push("larissa");

console.table(dados);

console.log("Informe seu cpf:")
dados.push("123.456.789-90");

console.table(dados);

// Mostre ao usuario os dados e deum bom dia!
console.log("Bom dia",dados[0], "seu CPF é:", dados[1]);
