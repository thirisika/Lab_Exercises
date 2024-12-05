class DigitalClock {
    constructor(prefix) {
    this.prefix = prefix;
    }
    display() {
    let date = new Date();
    //create 3 variables in one go using array destructuring
    let [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()];
if (hours < 10) hours = '0' + hours;
if (mins < 10) mins = '0' + mins;
if (secs < 10) secs = '0' + secs;
console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
}
stop() {
clearInterval(this.timer);
}
start() {
this.display();
this.timer = setInterval(() => this.display(), 1000);
}
}
const myClock = new DigitalClock('my clock:')
myClock.start();


class PrecisionClock extends DigitalClock{
    constructor(prefix,precision=1000){
        super(prefix);  //call parent class constructor
        this.precision=precision;
    }

    start() {
        this.display();
        this.timer = setInterval(() => this.display(), this.precision);
        }
}

const precisionClock = new PrecisionClock('Precision Clock: ',800);  //update every 800ms
precisionClock.start();


class AlarmClock extends DigitalClock{
    constructor(prefix,wakeupTime='07:00'){
        super(prefix);  //call parent class constructor
        this.wakeupTime=wakeupTime;
    }

    display(){
        let date = new Date();
        //create 3 variables in one go using array destructuring
        let [hours, mins] = [date.getHours(), date.getMinutes()];
        if (hours < 10) hours = '0' + hours;
        if (mins < 10) mins = '0' + mins;

        let currentTime=`${hours}:${mins}`;

        

        if(currentTime===this.wakeupTime){
            console.log('Wakeup!!!');
            this.stop();
        }
    }

   
}

const alarmClock = new AlarmClock('Alarm Clock: ','11:29');  //set wakeup time
alarmClock.start();

