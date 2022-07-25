let app = Vue.createApp({
    data: function() {
        return {
            passe: 0,
            seconds: 180,
            time: 180,
            stop: false,
            darkmode: false
        }
    },
    methods: {
        sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        },
        async clock() {
            this.seconds = this.time
            while(this.seconds > 0 && this.stop === false) {
                switch(this.seconds) {
                    case this.time - 10:
                        this.passe++
                        html.style.backgroundColor = "green"
                        break;
                    case this.time / 2:
                        html.style.backgroundColor = "yellow"
                        break;
                    case this.time / 4:
                        html.style.backgroundColor = "red"
                        break;
                }
                this.seconds -= 1
                await this.sleep(1000)
            }
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
        reset() {
            this.seconds = this.time
            this.stop = true
            if(this.darkmode === true) {
                html.style.backgroundColor = 'black' 
            }
            else {
                html.style.backgroundColor = 'white'
            }
        },
        setTime() {
            this.seconds = this.time
        }
    }
})
app.mount("#body")