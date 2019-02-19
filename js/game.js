var Game = {
    canvas: undefined,
    ctx: undefined,
    fps: 60,
    scoreBoard: undefined,
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
            this.colisionObsta()
            this.colisionRecom()
            this.framesCounter++
            if (this.framesCounter > 1000) {
                this.framesCounter = 0
            }
            if (this.framesCounter % 151 === 0 || this.framesCounter % 200 == 0) {
                this.hacerObstaculos()
                this.hacerRecompesas()
            }
            //this.score += 0.01
            // if(this.colisionRecom() === true){
            //     this.score ++
            //}
            this.moverTodo()
            this.pintarTodo()
            this.borrarObstaculos()
        }.bind(this), 1000 / this.fps)
    },

    pintarTodo: function () {
        this.background.pintar()
        this.player.pintar()
        this.obstaculos.forEach(function (obstaculo) { obstaculo.pintar() })
        this.recompensas.forEach(function (recompensa) { recompensa.pintar() })
        this.pintarMarcador()
    },

    moverTodo: function () {
        this.background.mover()
        this.player.mover()
        this.obstaculos.forEach(function (obstaculo) { obstaculo.mover() })
        this.recompensas.forEach(function (recompensa) { recompensa.mover() })
    },

    reset: function () {
        this.background = new Background(this)
        this.player = new Player(this)
        this.marcador = marcador
        this.framesCounter = 0
        this.obstaculos = []
        this.recompensas = []
        this.score = 0
    },

    clear: function () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    },

    colisionObsta: function () {
        this.obstaculos.forEach(function (cadaObstaculo) {
            if (this.player.x + this.player.w >= cadaObstaculo.x &&
                this.player.x <= cadaObstaculo.w + cadaObstaculo.x &&
                this.player.y + this.player.h >= cadaObstaculo.y && this.player.x + this.player.w > cadaObstaculo.x + cadaObstaculo.w / 3 && this.player.y + this.player.h > cadaObstaculo.y + cadaObstaculo.h / 4.3) {
                this.gameOver()
            }
        }.bind(this))
    },

    colisionRecom: function () {
        this.recompensas.forEach(function (cadaRecompesa, index) {
            if (this.player.x + this.player.w >= cadaRecompesa.x &&
                this.player.x <= cadaRecompesa.w + cadaRecompesa.x &&
                this.player.y + this.player.h >= cadaRecompesa.y) {
                if (cadaRecompesa.img.src.includes("images/martillo.png")) {
                    this.score += 30
                } else if (cadaRecompesa.img.src.includes("images/metro.png")) {
                    this.score += 10
                } else if (cadaRecompesa.img.src.includes("images/sierra.png")) {
                    this.score -= 25
                } else {
                    this.score++
                }
                this.recompensas.shift([0])
            }
            if (this.score >= 100) {
                alert("SIII")
            }
        }.bind(this))
    },

    hacerObstaculos: function () {
        var src, w, h 
        if (this.framesCounter % 2) {
            src = "images/torillo1.png"
            w = 220
            h = 235
            
        } else if (this.framesCounter % 3) {
            src = "images/carreta1.png"
            w = 150
            h = 170
    
        } else {
            src = "images/torillo2.png"
        }
        
        this.obstaculos.push(new Obstaculos(this, src, w, h))
    },
    borrarObstaculos: function () {
        this.obstaculos = this.obstaculos.filter(function (obstaculo) {
            return obstaculo.x + obstaculo.w >= 0
        });
    },

    stop: function () {
        clearInterval(this.interval)
    },
    gameOver: function () {
        this.stop()
        if (confirm("GAME OVER. Play again?")) {
            this.reset()
            this.start()
        }
    },
    hacerRecompesas: function () {
        var src
        if (this.framesCounter % 2) {
            src = "images/martillo.png"
        } else if (this.framesCounter % 3) {
            src = "images/sierra.png"
        } else {
            src = "images/metro.png"
        }
        this.recompensas.push(new Recompensas(this, src))
    },
    pintarMarcador: function () {
        this.marcador.update(this.score, this.ctx)
    },
}







