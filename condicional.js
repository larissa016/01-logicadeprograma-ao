// condicional simples com IF
var anoNascimento = 2003;
if (anoNascimento > 2003) {
  console.log("A pessoa nasceu depois de 2003.");
}
if (anoNascimento > 2003) {
  console.log("A pessoa nasceu antes de 2003.");
}

if (anoNascimento == 2003) {
  console.log("A pessoa nasceu em 2003.");
}

//condições simples com if-Else
var anoNascimento = 2005;
if (anoNascimento > 2000) {
  console.log("A pessoa nasceu depois de 2000.");
} else {
  console.log("A pessoa nasceu em 2000 ou antes");
}

// condições compostas com If
const login = "admin";
const senha = "12345";

var loginUser = "admin";
var senhaUser = "12345";

if (loginUser == login && senhaUser == senha) {
  console.log("Acesso permitido!");
} else {
  console.log("Acesso negado!");
}

//Desvio condicional aninhado - IF-ELSEIF-ELSE
var semaforo = "vermelho";
if (semaforo == "verde") {
  console.log("Siga");
} else if (semaforo == "amarelo") {
  console.log("Atençao");
} else {
  console.log("Pare");
}

//Desvio condicional IF com bloco de comandos
// desvio condicional IF com bloco de comandos
var idade = 18;
if (idade <= 18) {
  console.log("Entrei no if...");
  idade++;
  console.log("Incrementei a idade...");
  console.log("A nova idade é", idade);
  console.log("Agora estou saindo do bloco if");
}
console.log("Terminei");

//criando variaveis locais com "let" (so existe dentro do bloco onde foram criadas)
var mes = "Agosto";
var dia = 15;

if (dia == 15 && mes == "Agosto") {
  let mensagem = "Hoje é dia 15 de Agosto";
  console.log(mensagem);
}
console.log("Tentando acessar a variavel local fora do bloco, vai dar erro!");
//console.log(mensagem);

// criando uma funçao com desvio condicional IF
const desconto = (valorCompra) => {
  let desconto = 0;

  if (valorCompra >= 1000) {
    desconto = (valorCompra * 12) / 100;
  }
  return desconto;
};

var totalCompra = 950;
console.log(
  "Valor total da compra: R$",
  totalCompra,
  "::: Desconto: R$",
  desconto(totalCompra)
);

var totalCompra = 1800;
console.log(
  "Valor total da compra: R$",
  totalCompra,
  "::: Desconto: R$",
  desconto(totalCompra)
);

// Desvio  condicional If inline (ternario)
//condição ? expressao_se_verdadeiro : expressao_se_falso
var preco = 500;
var resultado = preco <= 100 ? "Ta barato!" : "vish, ta muito caro!";

// O operador acima é o mesmo que escrever:
// if(preço <=100){
//  resultado = " ta barato!"
// else{
//  resultado = "vish, ta muito caro!"
//{
console.log("Preço: R$", preco, "-", resultado);

//If terminal com somente uma expressao 
// condicao && expressao
var logado = true;
logado && console.log("usuario esta logado!");