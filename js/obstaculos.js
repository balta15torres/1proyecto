function Obstaculos(game) {
    
    this.game = game
    //medidas de la imagen a representar en el canvas
    this.w = 220
    this.h = 235
    this.dx = 10
    
    this.x = this.game.canvas.width 
    this.y = this.game.player.y0 
    this.img = new Image ()
    this.img.src = "images/torillo1.png"
}

Obstaculos.prototype.pintar = function() {
    this.game.ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    // this.game.ctx.fillStyle = "black"
    // this.game.ctx.fillRect(this.x,this.y,50,200)

}
Obstaculos.prototype.mover = function() {
    
    this.x -= this.dx
    
}
