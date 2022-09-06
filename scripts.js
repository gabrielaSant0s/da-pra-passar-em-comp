function clicar(){
    var mat = document.querySelector(".matematica").value
    var nat = document.querySelector(".natureza").value
    var ling = document.querySelector(".linguagens").value
    var hum = document.querySelector(".humanas").value
    var red = document.querySelector(".redacao").value

    var resultadoEngUFRJ = (parseFloat(mat)*5+ parseFloat(nat)*4 +parseFloat(ling)*2 +parseFloat(hum)*1+ parseFloat(red)*3)/15
    var resultadoCCUFRJ = (parseFloat(mat)*5+ parseFloat(nat)*4 +parseFloat(ling)*5 +parseFloat(hum)*3+ parseFloat(red)*3)/20
    var resultadoCCCefet = (parseFloat(mat)*4+ parseFloat(nat)*3 +parseFloat(ling)*3 +parseFloat(hum)*1+ parseFloat(red)*3)/14
    document.querySelector(".resultado").innerHTML = `eng de comp UFRJ : ${resultadoEngUFRJ} ||
    CC ufrj: ${resultadoCCUFRJ} ||
    CC Cefet : ${resultadoCCCefet}`
}