window.onload = function() {
    document.getElementById("home").style.height = window.innerHeight + "px";
    document.getElementById("start-button").onclick = function () {   
    Game.init("canvas")
    document.getElementById("canvas").removeAttribute("class", "none");
    document.getElementById("home").classList.add("none");
 }
}