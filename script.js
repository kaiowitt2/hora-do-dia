function  carregar() {
var msg = document.getElementById('msg')
var img = document.getElementById('foto')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `agora são ${hora} horas `
if (hora >= 0 && hora < 12) {
    // bom DIA!
    img.innerHTML = '<img src="manhã.jpg">'
} else if (hora >= 12 && hora < 18){
    // Boa tarde
    img.innerHTML = '<img src="tarde.jpg">'
} else {
    img.innerHTML = '<img src="noite.jpg">'
    // Boa Noite
}

}