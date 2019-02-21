var puntuacion = {
    update: function(score, ctx) {
        this.w = 150
        this.h = 150
        //this.dx = 10
        
        this.img = new Image()
        this.img.src = "images/tiempo.png"
        ctx.drawImage(this.img, window.innerWidth - 200,5, 200, 140)
        
        ctx.font = "35px sans-serif"
        ctx.fillStyle = "black"
        ctx.fillText(Math.floor(score),window.innerWidth - 160, 120)
        ctx.font = "20px sans-serif"
        ctx.fillText("points",window.innerWidth - 100, 120)
    }
}

var tiempo = {
    update: function(scores ,ctx) {
        this.w = 200
        this.h = 140
        //this.dx = 10
       
        this.img = new Image()
        this.img.src = "images/tiempo.png"
        ctx.drawImage(this.img, 20, 5, this.w, this.h)
        
        ctx.font = "35px sans-serif"
        ctx.fillStyle = "black"
        ctx.fillText(Math.floor(scores), 60, 120)
        ctx.font = "20px sans-serif"
        ctx.fillText("seconds", 100, 120)
    }

}

