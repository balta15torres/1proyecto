var marcador = {
    update: function (score, ctx) {
        this.w = 100
        this.h = 70
        this.dx = 10
        // this.img = new Image()
        // this.img.src = "images/caja.png"
        // ctx.drawImage(this.img, 20, 20, this.w, this.h)
        ctx.font = "40px sans-serif"
        ctx.fillStyle = "orange"
        ctx.fillText(Math.floor(score), 50, 70)
    }
}