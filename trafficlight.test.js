//import module traffic light
const app = require("./trafficlight");

//test suite
describe('test suite traffic light', () => {
    //case red light
    it(`case red light`, () => {
        expect(app.trafficLight("red"))
            .toBe("DON'T WALK!");
    });
    //case orange light
    it(`case orange light`, () => {
        expect(app.trafficLight("orange"))
            .toBe("ATTENTION!");
    });
    //case green light
    it(`case green light`, () => {
        expect(app.trafficLight("green"))
            .toBe("WALK!");
    });
    //case invalid light
    it(`case invalid light`, () => {
        expect(app.trafficLight("blue"))
            .toBe("OUT OF ORDER");
    });
});

