function Player(game) {

    this.game = game
    this.x = 50
    // guardar posición original (suelo)
    this.y0 = this.game.canvas.height / 1.6
    this.y = this.y0
    this.img = new Image()
    this.img.src = 'images/andar.png'
    // medidas de la imagen a representar en el canvas
    this.w = 90
    this.h = 210
    this.vy = 1
    //número de imágenes diferentes
    this.img.frames = 4
    this.img.frameIndex = 0
    
    this.inmortal = false
    this.setListeners()

    this.imgJump = new Image();
    this.imgJump.src = 'images/saltar.png'
    this.imgJump.frames = 4
    this.imgJump.frameIndex = 0
    this.isJumping = false

}

Player.prototype.pintar = function() {
    var img;

    
    if (this.isJumping) {
        img = this.imgJump;
        this.moverImg(this.imgJump)
    } else {
        img = this.img;
        this.moverImg(this.img)
    }
    this.game.ctx.drawImage(img, img.frameIndex * Math.floor(img.width / img.frames), 0, Math.floor(img.width / img.frames), img.height, this.x, this.y, this.w, this.h)
    
},

    Player.prototype.mover = function() {

        var gravity = 0.4
        // solo salta cuando el personaje está en el suelo
        if (this.y >= this.y0) {
            this.vy = 1
            this.y = this.y0
        } else {
            this.vy += gravity
            this.y += this.vy

        }
    }

Player.prototype.setListeners = function() {

    document.onkeydown = function(event) {

        if (event.keyCode === this.game.keys.TOP_KEY && this.y == this.y0) {

            this.y -= 1

            this.vy -= 15

            this.isJumping = true
        }
        
    }.bind(this)
}

Player.prototype.moverImg = function(img) {
    // se va cambiando el frame. Cuanto mayor es el módulo, mas lento se mueve el personaje
    if (this.game.framesCounter % 8 === 0) {
        img.frameIndex += 1

        // Si el frame es el último, se vuelve al primero
        if (img.frameIndex > 3) {
            img.frameIndex = 0
            this.isJumping = false
        }

    }

}

