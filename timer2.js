const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

// const timer = (times) => {
//   if (!args) return null;
//   for (let arg of args) {
//     if (arg < 0 || isNaN(arg)) continue;
    
//     setTimeout(() => {
//       process.stdout.write("\x07");
//     }, arg * 1000);
//   };
// }

console.log('Press 1-9 to set a timer, b to beep, and ctrl + c to quit');
stdin.on('data', (key) => {
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }
  // beep if b is pressed
  if (key === 'b') {
    process.stdout.write("\x07");
  }
  if (key >= 1 && key <= 9) {
    setTimeout(() => {
      process.stdout.write("\x07");
    }, key * 1000);
  }
  process.stdout.write(`Pressed: ${key}\n`);
});

// timer(input);