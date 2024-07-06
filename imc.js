const alturaInput = document.getElementById('altura');
const pesoInput = document.getElementById('peso');
const calcularButton = document.getElementById('calcular');
const resultadoElement = document.getElementById('resultado');

calcularButton.addEventListener('click', function () {
    // Aqui vamos colocar o código para calcular o IMC
});

calcularButton.addEventListener('click', function () {
    const altura = parseFloat(alturaInput.value);
    const peso = parseFloat(pesoInput.value);

    if (altura > 0 && peso > 0) {
        const imc = peso / (altura * altura);
        resultadoElement.textContent = `Seu IMC é ${imc.toFixed(2)}`;
  
      // Aqui podemos adicionar uma lógica para classificar o IMC(opcional)
        Exemplo:
        if (imc < 18.5) {
            resultadoElement.textContent += ' - Abaixo do peso';
        } else if (imc < 24.9) {
            resultadoElement.textContent += ' - Peso normal';
        } else if (imc < 29.9) {
            resultadoElement.textContent += ' - Sobrepeso';
        } else {
            resultadoElement.textContent += ' - Obesidade';
        }
    } else {
        resultadoElement.textContent = 'Por favor, insira valores válidos para altura e peso.';
    }
});
