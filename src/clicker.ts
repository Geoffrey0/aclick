let robot = require("robotjs");

export default class Clicker {
    x: number;
    y: number;
    offset: number;
    
    constructor(x, y, offset) {
        this.x = x;
        this.y = y;
        this.offset = offset;
    }
    
    click() {
        robot.moveMouse(this.addRandom(this.x, this.offset), this.addRandom(this.y,this.offset));
        robot.mouseClick();
    }
    
    loopClick(interval, dblClick: boolean, delay?) {
        if (dblClick) {
            this.click();
            setTimeout(() => {
                this.click();
            },  this.addRandom(delay.value, delay.random))
        } else {
            this.click();
        }
        
        setTimeout(() => {
            this.loopClick(interval, dblClick, delay);
        }, this.addRandom(interval.value, interval.random));
    }
    
    addRandom( value: number, random: number) : number {
        let rand = Math.random();
        if(rand > 0.5) {
            return value + Math.floor(Math.random() * random)
        } else {
            return value - Math.floor(Math.random() * random)
        }
        
    }
}