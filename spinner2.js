process.stdout.write("hello from spinner1.js... \rheyyy\n");
let spinner = ["\r|", "\r/ ", "\r- ", "\r\\", "\r|"];
let time = 0;
for (let item of spinner) {
  setTimeout(() => {
    process.stdout.write(item);
    // print the char here
  }, time);
  time += 200;
}
// setTimeout(() => {
//   process.stdout.write("\r|   ");
// }, 100);

// setTimeout(() => {
//   process.stdout.write("\r/   ");
// }, 300);

// setTimeout(() => {
//   process.stdout.write("\r-   ");
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write("\r\\   ");
// }, 700);

// setTimeout(() => {
//   process.stdout.write("\r|   ");
// }, 900);
// const spinner = ["\r|   ", "\r/   ", "\r–   ", "\r\\   ", "\r|   "];
// let delay = 100;
