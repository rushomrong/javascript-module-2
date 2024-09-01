for (let i = 0; i < 15; i++) {
  console.log(i);
  if (i >= 10) {
    break; // if i value is greater then 10 then give a break on the loop
  }
}
console.log("The counting of the numbers has end here");

// let's check this formula using while loop

let i = 0;
while (i < 15) {
  console.log(i);
  i++;

  //break condition
  if (i >= 10) {
    break;
  }
}
console.log("Numbers Increment has stopped");
