function convert(type) {
    const inputCelsius = document.getElementById("inputCelsius");
    const inputFahrenheit = document.getElementById("inputFahrenheit");
  
    if (type === 'C') {
      // Convert from Celsius to Fahrenheit
      const celsius = parseFloat(inputCelsius.value);
      const fahrenheit = (celsius * 9/5) + 32;
      inputFahrenheit.value = isNaN(fahrenheit) ? "" : fahrenheit;
    } else if (type === 'F') {
      // Convert from Fahrenheit to Celsius
      const fahrenheit = parseFloat(inputFahrenheit.value);
      const celsius = (fahrenheit - 32) * 5/9;
      inputCelsius.value = isNaN(celsius) ? "" : celsius;
    }
  }
  