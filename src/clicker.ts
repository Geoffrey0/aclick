let robot = require("robotjs");

export default class Clicker {
    x: number;
    y: number;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    click() {
        robot.moveMouse(this.x, this.y);
        robot.mouseClick();
    }

    loopClick(interval: number, dblClick: boolean, delay?: number) {
        if (dblClick) {
            this.click();
            setTimeout(() => {
                this.click();
            }, delay)
        } else {
            this.click();
        }

        setTimeout(() => {
            this.loopClick(interval, dblClick, delay);
        }, interval);
    }
}