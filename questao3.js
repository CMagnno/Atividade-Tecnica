const fs = require('fs');
const xml2js = require('xml2js');

// Funçao para processar dados de faturamento
function processarFaturamento(dados) {
    // Filtra dias validos (valores > 0)
    const valoresValidos = dados.filter(dia => dia.valor > 0).map(dia => dia.valor);

    // Calcula o menor e maior valor de faturamento
    const menorValor = Math.min(...valoresValidos);
    const maiorValor = Math.max(...valoresValidos);
    const mediaMensal = valoresValidos.reduce((acc, val) => acc + val, 0) / valoresValidos.length;

    // conta os dias em que o faturamento foi superior a media mensal
    const diasAcimaMedia = valoresValidos.filter(valor => valor > mediaMensal).length;

    return { menorValor, maiorValor, mediaMensal, diasAcimaMedia };
}

// Função para interpretar o JSON
function interpretarJSON(jsonData) {
    const dados = JSON.parse(jsonData);
    return dados.map(item => ({ dia: item.dia, valor: item.valor }));
}

// Função para interpretar o XML
function interpretarXML(xmlData) {
    let dadosConvertidos = [];
    xml2js.parseString(xmlData, (err, result) => {
        if (err) {
            console.error('Erro ao interpretar XML:', err);
        } else {
            dadosConvertidos = result.root.row.map(row => ({
                dia: parseInt(row.dia[0]),
                valor: parseFloat(row.valor[0]),
            }));
        }
    });
    return dadosConvertidos;
}

// função principal para determinar o formato e processar
function interpretarEProcessar(caminhoArquivo) {
    const dadosArquivo = fs.readFileSync(caminhoArquivo, 'utf8');
    let dadosFaturamento;

    if (caminhoArquivo.endsWith('.json')) {
        dadosFaturamento = interpretarJSON(dadosArquivo);
    } else if (caminhoArquivo.endsWith('.xml')) {
        dadosFaturamento = interpretarXML(dadosArquivo);
    } else {
        console.error('Formato de arquivo não suportado.');
        return;
    }

    const resultado = processarFaturamento(dadosFaturamento);
    console.log('Resultado:', resultado);
}

//código funciona tanto com json, como com xml, teste com arquivos de entrada (exemplo: "dados.json" ou "dados.xml")
interpretarEProcessar('dados.json');
