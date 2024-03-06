function converter() {
    var celsius = parseFloat(document.getElementById('celsius').value);
    var fahrenheit = (celsius * 9/5) + 32;
    var resultado = document.getElementById('resultado');
    resultado.innerHTML = celsius + ' graus Celsius é equivalente a ' + fahrenheit.toFixed(2) + ' graus Fahrenheit.';
  }