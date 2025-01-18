function reverseString(string) {
     let reversed = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reversed += string[i];
 } 
  return reversed;
}

// Entrada
const input = prompt("Digite uma string:");

// Saída
console.log(`String invertida: ${reverseString(input)}`);


