<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inverter String</title>
</head>
<body>

    <h1>Inverter String</h1>
    <label for="inputString">Digite uma string:</label>
    <input type="text" id="inputString">
    <button id="invertBtn">Inverter</button>

    <h2>Resultado:</h2>
    <p id="result"></p>

    <script>
        // Funçao para inverter a string manualmente, sem uso de funções prontas
        function invertString() {
            var input = document.getElementById('inputString').value; // Pega o valor da entrada manualmente
            var reversed = '';
            
            for (var i = input.length - 1; i >= 0; i--) {
                reversed += input.charAt(i); // Concatena os caracteres de tras pra frente
            }
            
            // exibe o resultado manualmente no DOM, sem usar funções prontas como 'textContent'
            var resultElement = document.getElementById('result');
            resultElement.innerHTML = 'String invertida: ' + reversed; // Usa innerHTML sem função pronta
        }

        // Evento manual para o botão
        var button = document.getElementById('invertBtn');
        button.onclick = invertString;
    </script>

</body>
</html>
