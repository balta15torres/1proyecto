var puntuacion = {
    update: function (score, ctx) {
        this.w = 100
        this.h = 70
        this.dx = 10
        // this.img = new Image()
        // this.img.src = "images/caja.png"
        // ctx.drawImage(this.img, 20, 20, this.w, this.h)
        ctx.font = "40px sans-serif"
        ctx.fillStyle = "orange"
        ctx.fillText(Math.floor(score),window.innerWidth - 110, 70)
    }
}

var tiempo = {
    update: function (scores ,ctx) {
        this.w = 200
        this.h = 140
        this.dx = 10 

        ctx.font = "40px sans-serif"
        ctx.fillStyle = "orange"
        ctx.fillText(Math.floor(scores), 50, 70)
    }
}

