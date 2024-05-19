function encriptar () {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let policia = document.getElementById("policia")

    let textoCifrado = texto
                        .replace(/e/gi, "enter")
                        .replace(/i/gi, "items")
                        .replace(/a/gi, "ai")
                        .replace(/o/gi, "over")
                        .replace(/u/gi, "ufat")
    if (texto.length !=0 ) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "texto encriptado con exito";
        parrafo.textContent = "";
        policia.src = "rocagif.gif";
    }
    else {
        policia.src = "policia.png";
        alert("Debes ingresar algun texto")
        tituloMensaje.textContent = "ningun mensaje encriptado"
        parrafo.textContent = "Ingrese el mensaje a encriptar";
    }

}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let policia = document.getElementById("policia")

    let textoCifrado = texto
                        .replace(/enter/gi, "e")
                        .replace(/items/gi, "i")
                        .replace(/ai/gi, "a")
                        .replace(/over/gi, "o")
                        .replace(/ufat/gi, "u")
    if (texto.length !=0 ) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "texto desencriptado con exito";
        parrafo.textContent = "";
        policia.src = "rocagif.gif";
    }
    else {
        policia.src = "travolta.png";
        alert("Debes ingresar algun texto")
        tituloMensaje.textContent = "ningun mensaje encriptado"
        parrafo.textContent = "Ingrese el mensaje a encriptar";
    }
}
