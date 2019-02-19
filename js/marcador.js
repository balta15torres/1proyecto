var marcador = {

    update: function (score, ctx) {
        ctx.font = "30px sans-serif";
        ctx.fillStyle = "orange";
        ctx.fillText(Math.floor(score), 50, 50)
    
    }
}