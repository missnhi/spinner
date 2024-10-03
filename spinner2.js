process.stdout.write('hello from spinner1.js... \rheyyy\n');


const spinnerChars = ['|', '/', '-', '\\', '|', '/', '-'];
const delay = 200; // Adjusted delay for smoother animation

spinnerChars.forEach((char, index) => {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, delay * index);
});
