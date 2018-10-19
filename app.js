let app = new Vue({

    el: "#app",

    data: {

        clockstuff: '00:00:00',
        alarm: '',
        alarmTime:''

    },

    created: function () {

      localStorage.getItem("alarm");

        let self = this;
        self.clockstuff = self.setTime();

        setInterval(function() {
            self.clockstuff = self.setTime();
            self.playAlarm();
        }, 1000);


    },

    methods: {

        setTime: function () {

            let now = new Date();

            let hours = now.getHours();
            if (hours < 10) {
                hours = '0' + hours;
            }

            let minutes = now.getMinutes();
            if (minutes < 10) {
                minutes = '0' + minutes;
            }

            let seconds = now.getSeconds();
            if (seconds < 10) {
                seconds = '0' + seconds;
            }

            return hours + ':' + minutes + ':' + seconds;

        },

        playAlarm: function(){
          if (this.clockstuff === this.alarm){
            var audio = new Audio('alarm.mp3');
            audio.play();
            this.alarm='';
          }
        },

        setAlarm: function(){
          this.alarm = this.alarmTime + ":00";
          this.alarmTime = '';
          localStorage.setItem("alarm", this.alarm);
        }




        }


});


let countdown = new Vue({

    el:"#countdown",

    data: {
    timer: '',
    timerCount:''


    },

    methods:{
      setTimer: function(){
        this.timerCount = this.timer;
        this.timer = '';
        this.runTime();
      // this.timer = '';
      },

      countdown: function(){
          if(this.timerCount > 0){
          this.timerCount--;
        }
      },

      playAlarm: function(){
        if (this.timerCount === 0){
          var audio = new Audio('alarm.mp3');
          audio.play();
          this.timerCount="";
        }
      },

      runTime: function(){

        let self = this;

        setInterval(function(){
          self.countdown();
          self.playAlarm();
        }, 1000)
      }

      // setInterval(function() {
      //     self.clockstuff = self.setTime();
      //     self.playAlarm();
      // }, 1000);





  }






});
