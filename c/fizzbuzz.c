#include <stdio.h>

int main() {
  int loop = 1;

  for (loop = 1; loop <= 100; loop++) {
    if (loop % 5 == 0 && loop % 3 == 0) {
      printf("FizzBuzz\n");
    } else if (loop % 3 == 0) {
      printf("Fizz\n");
    } else if (loop % 5 == 0) {
      printf("Buzz\n");
    } else {
      printf("%d\n", loop);
    }
  }

  return 1;
}