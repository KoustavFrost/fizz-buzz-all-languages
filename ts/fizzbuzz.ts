class FizzBuzz {
  public showFizzBuzz(): void {
    let i: number = 1;

    for (i = 1; i <= 100; i++) {
      if (i % 5 === 0 && i % 3 === 0) {
        console.log('FizzBuzz');
      } else if (i % 5 === 0) {
        console.log('Buzz');
      } else if (i % 3 === 0) {
        console.log('Fizz');
      } else {
        console.log(i);
      }
    }
  }
}

const fizzBuzz = new FizzBuzz();
fizzBuzz.showFizzBuzz();
