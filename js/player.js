function Player(game) {

    this.game = game
    this.speedX = 1
    this.speedY = 0.5
    this.x = 50
    // guardar posición original (suelo)
    this.y0 = this.game.canvas.height / 1.7
    this.y = this.y0
    this.img = new Image()
    this.img.src = 'images/player1.png'
    // medidas de la imagen a representar en el canvas
    this.w = 90
    this.h = 230
    this.vy = 1

    this.setListeners()

}

Player.prototype.pintar = function () {

    this.game.ctx.drawImage(this.img, this.x, this.y, this.w, this.h)

}

Player.prototype.mover = function () {

    var gravity = 0.5
    // solo salta cuando el personaje está en el suelo
    if (this.y >= this.y0) {
        this.vy = 1
        this.y = this.y0
    } else {
        this.vy += gravity
        this.y += this.vy

    }
}

Player.prototype.setListeners = function () {

    document.onkeydown = function (event) {

        if (event.keyCode === this.game.keys.TOP_KEY && this.y == this.y0) {

            this.y -= 5
            this.vy -= 18

        }
    }.bind(this)
}

