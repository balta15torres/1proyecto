window.onload = function () {
    document.getElementById("home").style.height = window.innerHeight + "px";
    document.getElementById("start-button").onclick = function () {
        Game.init("canvas")
        document.getElementById("canvas").removeAttribute("class", "none");
        document.getElementById("home").classList.add("none");

        document.onkeypress = function (e) {
            if (e.keyCode === 32) {
                Game.reset();
                Game.start();
            }
        }
    }
}