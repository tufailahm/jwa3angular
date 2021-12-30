import { Calculator } from "./calculator";

describe('add numbers tests', () => {

    it('should be able to add two whole numbers ' , () => {
        var calculator = new Calculator();
        expect(calculator.sum(44,44)).toEqual(88);

    });
    it('should be able to add a whole number and a negative number ' , () => {
        var calculator = new Calculator();
        expect(calculator.sum(44,-44)).toEqual(0);

    });
});