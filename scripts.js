function clicar(){
    var mat = document.querySelector(".matematica").value
    var nat = document.querySelector(".natureza").value
    var ling = document.querySelector(".linguagens").value
    var hum = document.querySelector(".humanas").value
    var red = document.querySelector(".redacao").value

    var resultado = (parseFloat(mat)*5+ parseFloat(nat)*4 +parseFloat(ling)*2 +parseFloat(hum)*1+ parseFloat(red)*3)/15
    document.querySelector(".resultado").innerHTML = resultado
}