function convertToFar() {
    const celsiusInput = document.getElementById('celsius');
    const resultElement = document.getElementById('result');

    const celsius = parseFloat(celsiusInput.value);
    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9/5) + 32;
        resultElement.textContent = fahrenheit.toFixed(2) + ' °F';
    } else {
        resultElement.textContent = 'Invalid input';
    }
}
