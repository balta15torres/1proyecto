var Game = {

    canvas: undefined,
    ctx: undefined,
    fps: 60,
    //scoreBoard: undefined,
    keys: {
        TOP_KEY: 38,
        SPACE: 32,

    },

    init: function (id) {

        this.canvas = document.getElementById(id)
        this.ctx = this.canvas.getContext("2d")
        this.w = window.innerWidth
        this.h = window.innerHeight
        this.canvas.width = this.w
        this.canvas.height = this.h
        this.reset()
        this.start()

    },

    start: function () {

        this.interval = setInterval(function () {
            this.clear()
            this.colision()

            this.framesCounter++

            if (this.framesCounter > 500) {

                this.framesCounter = 0

            }

            if (this.framesCounter % 80 === 0) {

                this.hacerObstaculos()
                this.hacerRecompesas()
            
            }
            
            this.moverTodo()
            this.pintarTodo()
            this.borrarObstaculos()
        
        }.bind(this), 1000 / this.fps)
    },

    pintarTodo: function () {

        this.background.pintar()
        this.player.pintar()
        this.obstaculos.forEach(function (obstaculo) { obstaculo.pintar() })
        this.recompensas.forEach(function(recompensa) {recompensa.pintar() })
    
    },

    moverTodo: function () {

        this.background.mover()
        this.player.mover()
        this.obstaculos.forEach(function (obstaculo) { obstaculo.mover() })

},

    reset: function () {

        this.background = new Background(this)
        this.player = new Player(this)
        this.obstaculos = new Obstaculos(this)
        this.framesCounter = 0
        this.obstaculos = []
        this.recompensas = []
    
    },

    clear: function () {

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

    },

    colision: function () {
        
        this.obstaculos.forEach(function (cadaObstaculo) {
            if (this.player.x + this.player.w >= cadaObstaculo.x &&
                this.player.x <= cadaObstaculo.w + cadaObstaculo.x &&
                this.player.y + this.player.h >= cadaObstaculo.y) {
                alert ("noo!")
            
            }
    }.bind(this))
    },
    
    hacerObstaculos: function() {

        this.obstaculos.push(new Obstaculos(this))

    },
    
    borrarObstaculos: function() {
        
        this.obstaculos = this.obstaculos.filter(function (obstaculo) {
         return obstaculo.x >= 0
            
        
        });
    },

    hacerRecompesas: function() {
        
        this.recompensas.push(new Recompensas(this))
    
    },



}







