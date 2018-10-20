var box;

window.onload = function() {
    box = document.getElementById("box");

    var btnOk = document.getElementById("btnOk");
    btnOk.onclick = ocultar();

}

function ocultar() {
    box.classList.add("ocultar");
}