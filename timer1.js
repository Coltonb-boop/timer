`use strict`;

let input = process.argv.slice(2);

const timer = (args) => {
  if (!args) return null;
  for (let arg of args) {
    if (arg < 0 || isNaN(arg)) continue;
    
    setTimeout(() => {
      process.stdout.write("\x07");
    }, arg * 1000);
  };
}



timer(input);

// beep sound: console.log("\007");
// node timer1.js 10 3 5 15 9 