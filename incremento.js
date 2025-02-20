// operadores de incremento e decremento / pré e pós incremento
var idade = 16;
console.log(idade);

idade++; //  = idade + 1
console.log(idade);

idade--; // idade = idade - 1
console.log(idade);
console.log("----------------------------");

var novaIdade = idade++
console.log( "Idade:", idade, " | Nova Idade:", novaIdade);

novaIdade = ++idade;
console.log( "Idade:", idade, " | Nova Idade:", novaIdade);

//operadores de atribuição aritmética
console.log("---------------------------------------");
var X = 10;
var y = 5;
console.log("x =", X, "| y =", y);

X += y; // x = x + y
console.log("x =", X, "| y =", y);

X -= y;
console.log("x =", X, "| y =", y);


X *= y; // X = X * y
console.log("x =", X, "| y =", y);


X **= y // X = X elevado a y
console.log("x =", X, "| y =", y);

X = 13;
X %= y // X = resto da divisão inteira de X por y 
console.log("x =", X, "| y =", y);





