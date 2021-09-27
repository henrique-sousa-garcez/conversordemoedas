function ConverterReal() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolar = parseFloat(valor);

  var valorEmReal = valorEmDolar * 5;
  console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var resultado = "O resultado em Real é de: R$ " + valorEmReal;
  elementoValorConvertido.innerHTML = resultado;
}

function ConverterDolar() {
  var valorNumero = document.getElementById("valor");
  var valor = valorNumero.value;
  var valorEmReal = parseFloat(valor);

  var valorEmDolar = valorEmReal / 5;
  console.log(valorEmDolar);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var resultado = "O resultado em Dolar é de: $ " + valorEmDolar;
  elementoValorConvertido.innerHTML = resultado;
}
//get.ElementById já possui no navegador que é uma biblioteca