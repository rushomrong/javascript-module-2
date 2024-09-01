//different ways to divide the numbers
// using for loop
for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
  }
}

// sum of total numbers that are divisible by 3
let total = 0;
for (let i = 1; i <= 20; i++) {
  if (i % 3 == 0) {
    console.log(i);
    total = total + i;
  }
}

console.log("Total number of sum:", total);
