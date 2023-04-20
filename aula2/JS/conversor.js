function convertCelsiusToFahrenheit(event) {
    const celsiusInput = +document.querySelector(".input-js").value; //valor do input
    const conversionResult = celsiusInput * 1.8 + 32; //fazer conversão
    document.querySelector(".result-js").innerHTML = `<p class="${conversionResult < 50 ? "blue" : "red"}">A conversão de ${celsiusInput}ºC para fahrenheit é ${conversionResult}F</p>`;
}


// const celcius = +prompt("Introduza o valor em celcius");
// const fahrenheit = +prompt("Introduza o valor em fahrenheit");



