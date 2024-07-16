function sumar() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    
    if (!num1 || !num2) {
        document.getElementById('resultado').innerText = 'Por favor ingresa ambos números';
        return;
    }

    const resultado = parseFloat(num1) + parseFloat(num2);
    document.getElementById('resultado').innerText = `El resultado de la suma es: ${resultado}`;
}

function restar() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    
    if (!num1 || !num2) {
        document.getElementById('resultado').innerText = 'Por favor ingresa ambos números';
        return;
    }

    const resultado = parseFloat(num1) - parseFloat(num2);
    document.getElementById('resultado').innerText = `El resultado de la resta es: ${resultado}`;
}

function multiplicar() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    
    if (!num1 || !num2) {
        document.getElementById('resultado').innerText = 'Por favor ingresa ambos números';
        return;
    }

    const resultado = parseFloat(num1) * parseFloat(num2);
    document.getElementById('resultado').innerText = `El resultado de la multiplicación es: ${resultado}`;
}

function dividir() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    
    if (!num1 || !num2) {
        document.getElementById('resultado').innerText = 'Por favor ingresa ambos números';
        return;
    }

    if (parseFloat(num2) === 0) {
        document.getElementById('resultado').innerText = 'No se puede dividir por cero';
        return;
    }

    const resultado = parseFloat(num1) / parseFloat(num2);
    document.getElementById('resultado').innerText = `El resultado de la división es: ${resultado}`;
}
