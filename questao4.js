const faturamentoEstados = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

// Total
const total = Object.values(faturamentoEstados).reduce((acc, val) => acc + val, 0);

// percentuais
const percentuais = {};
for (const [estado, valor] of Object.entries(faturamentoEstados)) {
    percentuais[estado] = ((valor / total) * 100).toFixed(2);
}
 console.log("Percentual de representação por estado:");
for (const [estado, percentual] of Object.entries(percentuais)) {
    console.log(`${estado}: ${percentual}%`);
 }
