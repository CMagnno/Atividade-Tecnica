 function isFibonacci(num) {
    let a = 0, b = 1;
    while (b < num) {
        [a, b] = [b, a + b];
    }
    return b === num || num === 0;
}
// Entrad
const num = parseInt(prompt("Informe um número:"));

// Saida
if (isFibonacci(num)) {
    console.log(`O número ${num} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${num} NÃO pertence à sequência de Fibonacci.`);
}
