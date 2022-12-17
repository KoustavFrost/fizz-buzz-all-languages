var FizzBuzz = /** @class */ (function () {
    function FizzBuzz() {
    }
    FizzBuzz.prototype.showFizzBuzz = function () {
        var i = 1;
        for (i = 1; i <= 100; i++) {
            if (i % 5 === 0 && i % 3 === 0) {
                console.log('FizzBuzz');
            }
            else if (i % 5 === 0) {
                console.log('Buzz');
            }
            else if (i % 3 === 0) {
                console.log('Fizz');
            }
            else {
                console.log(i);
            }
        }
    };
    return FizzBuzz;
}());
var fizzBuzz = new FizzBuzz();
fizzBuzz.showFizzBuzz();
