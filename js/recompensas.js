function Recompensas(game, src) {
    this.game = game
    //medidas de la imagen a representar en el canvas
    this.w = 40
    this.h = 40
    this.dx = 10
    this.x = this.game.canvas.width
    this.y = this.game.player.y0 / 2
    this.img = new Image()
    this.img.src = src
}

Recompensas.prototype.pintar = function () {
    this.game.ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
}

Recompensas.prototype.mover = function () {
    this.x -= this.dx
}

