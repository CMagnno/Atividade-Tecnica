const faturamento = [
    { dia: 1, valor: 221.45 },
    { dia: 2, valor: 332.56 },
    { dia: 3, valor: 0 }, // Feriado/final de semana
];

// Filtra valores maiores que 0
const valores = faturamento.filter(d => d.valor > 0).map(d => d.valor);
const menor = Math.min(...valores);
const maior = Math.max(...valores);
const media = valores.reduce((acc, val) => acc + val, 0) / valores.length;
const diasAcimaMedia = valores.filter(v => v > media).length;

console.log(`Menor valor de faturamento: ${menor}`);
console.log(`Maior valor de faturamento: ${maior}`);
console.log(`Dias com faturamento acima da média: ${diasAcimaMedia}`);
