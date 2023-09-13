function iniciarContador() {
  var dataInserida = window.prompt(
    "Por favor, insira uma data no formato -> 'YYYY/MM/DD':"
  )

  if (dataInserida !== null) {
    var partesData = dataInserida.split("/")
    if (partesData.length === 3) {
      var ano = parseInt(partesData[0], 10)
      var mes = parseInt(partesData[1], 10) - 1
      var dia = parseInt(partesData[2], 10)

      var dataAlvo = new Date(ano, mes, dia).getTime()

      var contadorInterval = setInterval(function () {
        var agora = new Date().getTime()
        var diferenca = dataAlvo - agora

        if (diferenca <= 0) {
          clearInterval(contadorInterval)
          document.getElementById("contador").innerHTML = "Tempo esgotado!"
        } else {
          var dias = Math.floor(diferenca / (1000 * 60 * 60 * 24))
          var horas = Math.floor(
            (diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          )
          var minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60))
          var segundos = Math.floor((diferenca % (1000 * 60)) / 1000)

          var contadorTexto =
            dias + "d " + horas + "h " + minutos + "m " + segundos + "s "
          document.getElementById("contador").innerHTML = contadorTexto
          document.querySelector("h1").classList.add("hidden")
          document.querySelector("button").classList.add("hidden")
          document.getElementById("contador").classList.remove("hidden")
        }
      }, 1000)
    } else {
      alert("Formato de data inválido. Use o formato 'YYYY/MM/DD'.")
    }
  }
}
