function Obstaculos(game, src, w, h, y, dx ) {
    this.game = game
    //medidas de la imagen a representar en el canvas
    this.w = w 
    this.h = h 
    
    this.dx = dx
    this.x = this.game.canvas.width
    this.y = y
    this.img = new Image()
    this.img.src = src
}

Obstaculos.prototype.pintar = function() {
    this.game.ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
}

Obstaculos.prototype.mover = function() {
    this.x -= this.dx
}

