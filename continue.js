//continue means = skip this interation
//break means = done with the loop. Looping end
for (let i = 1; i < 10; i++) {
  //if the "i" value is divided by the 2 and it's value defines as a odd numbers then skip to continue for the rest of the code iterations
  if (i % 2 === 1) {
    continue;
  }
  console.log(i);
}

//using while loop

let i = 0;
while (i < 20) {
  i++;

  if (i % 5 !== 0) {
    continue;
  }

  console.log("The number is divisible by 5 is:", i);
}
