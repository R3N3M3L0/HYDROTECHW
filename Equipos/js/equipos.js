document.getElementById("iconoMenu").addEventListener("click", desplegarMenu);
document.getElementById("iconoMenuCerrado").addEventListener("click", redesplegarMenu);

function desplegarMenu() {
    document.getElementById("nav").style.display="block";
    document.getElementById("nav").style.animation="backInDown";
    document.getElementById("nav").style.animationDuration="800ms";
    document.getElementById("iconoMenuCerrado").style.display="inline-block";
    document.getElementById("iconoMenu").style.display="none";
}

function redesplegarMenu() {
    document.getElementById("nav").style.display="none";
    document.getElementById("iconoMenuCerrado").style.display="none";
    document.getElementById("iconoMenu").style.display="inline-block";
}
