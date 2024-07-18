function obtenerValores() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;

    // Validar si los valores están vacíos
    for (const valor of [num1, num2]) {
        if (!valor) {
            document.getElementById('resultado').innerText = 'Por favor ingresa ambos números';
            return null;
        }
    }

    return [parseFloat(num1), parseFloat(num2)];
}

function sumar() {
    const valores = obtenerValores();
    if (!valores) return;

    const [num1, num2] = valores;
    const resultado = num1 + num2;
    document.getElementById('resultado').innerText =`el resultado de la suma es: ${resultado}`;
}

function restar() {
    const valores = obtenerValores();
    if (!valores) return;

    const [num1, num2] = valores;
    const resultado = num1 - num2;
    document.getElementById('resultado').innerText =`El resultado de la resta es: ${resultado}`;
}

function multiplicar() {
    const valores = obtenerValores();
    if (!valores) return;

    const [num1, num2] = valores;
    const resultado = num1 * num2;
    document.getElementById('resultado').innerText = `El resultado de la multiplicación es: ${resultado}`;
}

function dividir() {
    const valores = obtenerValores();
    if (!valores) return;

    const [num1, num2] = valores;

    if (num2 === 0) {
        document.getElementById('resultado').innerText = 'No se puede dividir por cero';
        return;
    }

    const resultado = num1 / num2;
    document.getElementById('resultado').innerText = `El resultado de la división es: ${resultado}`;
}