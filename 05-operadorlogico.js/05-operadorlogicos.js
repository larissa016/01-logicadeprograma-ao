// operadores logicos
var souPobre = true;
console.log("----------------------------");
console.log("sou pobre?" ,souPobre);
console.log("Negação de souPobre:", !souPobre);

var manha = true;
var sono =true;
console.log("---------------------------");
console.log("Manhã:", manha, " | Estou com sono?:", sono);

//condicional simples 
console.log("operador AND (E):", manha && sono);
console.log("operador OR (OU):", manha || sono);

manha = false;
console.log("------------------------------");
console.log("Manhã:", manha, " | Estou com sono?:", sono);

console.log("operador AND (E):", manha && sono);
console.log("operador OR (OU):", manha || sono);

sono = false;
console.log("------------------------------");
console.log("Manhã:", manha, " | Estou com sono?:", sono);

console.log("operador AND (E):", manha && sono);
console.log("operador OR (OU):", manha || sono);
