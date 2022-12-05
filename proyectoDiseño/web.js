window.onload;{
    
//Texto de Opinión parpadeando
var estado = true;
        setTimeout("verOpinion()", 450);
        function verOpinion() {
            estado = !estado;
            if (estado == true)
                texto1.style.visibility = "visible";
            else texto1.style.visibility = "hidden";
            setTimeout("verOpinion()", 450);
        } 



}
function clickTitulo(){
    console.log("Click en-> titulo (realizado)");
    
}
const titulo1=document.getElementById("tituloPagina");
titulo1.addEventListener("click",clickTitulo);
