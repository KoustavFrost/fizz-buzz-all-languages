class fizzbuzz {
	public static void showFizzBuzz() {
		int i;

		for (i = 1; i <= 100; i++) {
      if (i % 5 == 0 && i % 3 == 0) {
				System.out.println("FizzBuzz");
			} else if (i % 3 == 0) {
				System.out.println("Fizz");
			} else if (i % 5 == 0) {
				System.out.println("Buzz");
			} else {
				System.out.println(i);
			}
    }
	}

	public static void main(String args[]) {
		fizzbuzz buzz = new fizzbuzz();
		buzz.showFizzBuzz();
	}
}

