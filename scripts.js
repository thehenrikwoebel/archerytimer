let app = Vue.createApp({
    data: function() {
        return {
            passe: 0,
            seconds: 180,
            time: 180,
            stop: false,
            darkmode: false,
            fontSize: 13
        }
    },
    methods: {
        sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        },
        async clock() {
            while(this.seconds > 0 && this.stop === false) {
                switch(this.seconds) {
                    case this.time:
                        this.playSound1()
                        break;
                    case this.time - 9:
                        this.passe++
                        html.style.backgroundColor = "green"
                        this.playSound2()
                        break;
                    case this.time / 2 + 1:
                        html.style.backgroundColor = "yellow"
                        break;
                    case this.time / 4 + 1:
                        html.style.backgroundColor = "orange"
                        break;
                }
                this.seconds -= 1
                await this.sleep(1000)
            }
            this.playSound3()
        },
        darkmode_test() {
            var darkmode_button = document.getElementById("darkmode_button");
            if(this.darkmode === false) {
                html.style.backgroundColor = "#000000";
                darkmode_button.innerHTML = "Darkmode deaktivieren";
                this.$refs.text.style.color = "#ffffff";
            }
            else {
                html.style.backgroundColor = "#ffffff";
                darkmode_button.innerHTML = "Darkmode aktivieren";
                this.$refs.text.style.color = "#000000";
            }
            this.darkmode = !this.darkmode
        },
        setTime() {
            if(this.stop) {
                this.seconds = this.time
            }
        },
        reset() {
            this.setTime()
            this.stop = true
            this.playSound3()
            this.setTime()
            if(this.darkmode === true) {
                html.style.backgroundColor = 'black' 
            }
            else {
                html.style.backgroundColor = 'white'
            }
        },
        stop() {
            this.stop = true
            this.playSound3()
        },
        setFontSize() {
            this.$refs.text.style.fontSize = this.fontSize.toString() + "em"
        },
        playSound1() {
            let sound = new Audio("./sounds/pfeifton1.mp3")
            sound.play()
        },
        playSound2() {
            let sound = new Audio("./sounds/pfeifton2.mp3")
            sound.play()
        },
        playSound3() {
            let sound = new Audio("./sounds/pfeifton3.mp3")
            sound.play()
        },
        test() {
            console.log("es hat funktioniert!");
        }
    }
})
app.mount("#body")
