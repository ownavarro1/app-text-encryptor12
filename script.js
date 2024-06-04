const textArea =  document.querySelector(".text-area");
const mensaje =  document.querySelector(".mensaje");

function validarTexto(){
    let validador = textArea.value.match(/^[A-Za-zñÑ\s]*$/);
    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}
function btnEncriptar(){
    if(!validarTexto()) {
    textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
    }        
}

function encriptar(stringEncriptado){
let matrizCodigo = [["e","enter"],["i","ines"],["a","ia"],["o","ober"],["u","ufat"]];
stringEncriptado = stringEncriptado.toLowerCase();

for(let i=0;i<matrizCodigo.length;i++) {
    if(stringEncriptado.includes(matrizCodigo[i][0])) {
        stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
    }
}

return stringEncriptado
}

function btnCopiar() {
   textoCopiado = mensaje.value
   textArea.value = textoCopiado;
   mensaje.value = "";
    console.log(textoCopiado)
}

function btnDesencriptar(){
    
    textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    
   
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e","enter"],["i","ines"],["a","ia"],["o","ober"],["u","ufat"]];
    console.log(matrizCodigo);
    stringDesencriptado= stringDesencriptado.toLowerCase();
    for(let i=0;i<matrizCodigo.length;i++) {
        if(stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    
    return stringDesencriptado
}