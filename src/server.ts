import Clicker from "./clicker";

let robot = require("robotjs");
let fs = require('fs');

if (process.argv.length === 3) {
    fs.readFile(__dirname + '/../clicker.json', 'utf8', (err, data) => {
        let config = JSON.parse(data);
        let mode = process.argv[2];

        if (mode === 'click') {
            let clicker = new Clicker(config.position.x, config.position.y);
            clicker.loopClick(config.interval, false);
        } else if (mode === 'dblClick') {
            let clicker = new Clicker(config.position.x, config.position.y);
            clicker.loopClick(config.interval, true, config.delay);
        } else if (mode === 'coords') {
            let mouse = robot.getMousePos();
            console.log("Mouse is at x:" + mouse.x + " y:" + mouse.y);
        }
    });
}
