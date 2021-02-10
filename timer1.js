let args = process.argv.slice(2);

function timer(args) {
  
  for (let i = 0; i < args.length; i++) {


    if (args[i] === '' || Math.sign(args[i]) === -1 || args[i] === null) {
      return console.log('invalid input');
    } else {
      setTimeout(() => {
        process.stdout.write('beep!');
      }, args[i] * 1000);
    }
    setTimeout(() => {
      console.log('');
    }, args[i] * 1000);
  }
}

timer(args);