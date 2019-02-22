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
        this.soniFond = new Audio("sonido/fondo.mp3")
        this.soniFacil = new Audio("sonido/facil.mp3")
        this.gameOverImage = new Image();
        this.gameOverImage.src = "images/gameOver.png"
        this.reset()
        this.start()
    },

    start: function () {

        this.soniFond.play()
        this.interval = setInterval(function () {

            this.clear()
            this.colisionRecom()

            this.framesCounter++

            if (this.framesCounter > 799) {
                this.framesCounter = 0
            }
            if (this.framesCounter % 100 === 0) {
                this.hacerObstaculos()

            }
            if (this.framesCounter % 80 === 0) {
                this.hacerRecompesas()
            }
            this.scores += 0.01;
            this.moverTodo()
            this.pintarTodo()
            this.borrarObstaculos()
            this.colisionObsta()
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
        this.puntuacion = puntuacion
        this.tiempo = tiempo
        this.framesCounter = 0
        this.obstaculos = []
        this.recompensas = []
        this.score = 0
        this.scores = 0

    },

    clear: function () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    },

    colisionObsta: function () {
        this.obstaculos.forEach(function (cadaObstaculo) {
            if (this.player.x + this.player.w >= cadaObstaculo.x &&
                this.player.x <= cadaObstaculo.w + cadaObstaculo.x &&
                this.player.y + this.player.h >= cadaObstaculo.y && this.player.x + this.player.w > cadaObstaculo.x + cadaObstaculo.w / 3 && this.player.y + this.player.h > cadaObstaculo.y + cadaObstaculo.h / 4.3 && this.player.inmortal == false) {
                this.gameOver()
            }
        }.bind(this))
    },

    colisionRecom: function () {
        this.recompensas.forEach(function (cadaRecompesa, index) {
            if (this.player.x + this.player.w >= cadaRecompesa.x &&
                this.player.x <= cadaRecompesa.w + cadaRecompesa.x &&
                this.player.y + this.player.h >= cadaRecompesa.y && this.player.y <= cadaRecompesa.y + cadaRecompesa.h) {
                if (cadaRecompesa.img.src.includes("images/martillo.png")) {
                    this.score += 30
                } else if (cadaRecompesa.img.src.includes("images/metro.png")) {
                    this.score += 10
                } else if (cadaRecompesa.img.src.includes("images/sierra.png")) {
                    this.score -= 25
                } else if (cadaRecompesa.img.src.includes("images/caja.png")) {
                    this.player.inmortal = true && this.soniFacil.play()
                    setTimeout(function () {
                        this.player.inmortal = false
                    }.bind(this), 4000)
                } else {
                    this.score++
                }
                this.recompensas.shift([0])
            }
            if (this.scores >= 100) {
            }
        }.bind(this))
    },

    hacerObstaculos: function () {
        var src, w, h, y
        var random = this.selectRandom()

        var dx = 10

        if (random >= 1 && random <= 25) {
            src = "images/torillo1.png"
            w = 200
            h = 200
            y = 450
        } else if (random >= 26 && random <= 50) {
            src = "images/carreta1.png"
            w = 100
            h = 130
            y = 520
        } else if (random >= 51 && random <= 75) {
            src = "images/torillo2.png"
            w = 200
            h = 200
            y = 450
        } else {
            src = "images/carreta2.png"
            w = 100
            h = 130
            y = 520
        }

        if (this.scores > 0) {
            dx = 11
        } if (this.scores > 6) {
            dx = 15
        } if (this.scores > 14) {
            dx = 20
        } if (this.scores > 20) {
            dx = 25
        }

        this.obstaculos.push(new Obstaculos(this, src, w, h, y, dx))
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
        this.soniFond.pause()
        this.soniFond.currentTime = 0

        this.stop()
        this.ctx.drawImage(this.gameOverImage, 360, 80, 500, 600)
        // document.getElementById("gameOver").style.display = "block"
        console.log(this.gameOverImage)
        if (this.colisionObsta) {
            document.getElementsByClassName("over")
        }


        // this.reset()
        // this.start()

    },

    hacerRecompesas: function () {
        var src
        var random = this.selectRandom()
        if (random >= 1 && random <= 39) {
            src = "images/martillo.png"
        } else if (random >= 40 && random <= 50) {
            src = "images/sierra.png"
        } else if (random >= 51 && random <= 90) {
            src = "images/metro.png"
        } else {
            src = "images/caja.png"
        }
        this.recompensas.push(new Recompensas(this, src))
    },

    pintarMarcador: function () {
        this.puntuacion.update(this.score, this.ctx)
        this.tiempo.update(this.scores, this.ctx)

    },

    selectRandom: function () {
        var random = Math.floor(Math.random() * 100) + 1

        return random

    },

}







