const { connect } = require('./client');
console.log('Connecting ...');
connect();

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', function (key) {
    handleUserInput(key);
  });
  return stdin;
};

const handleUserInput = function (key) {
  const stdout = process.stdout;
  if (key === '\u0003') {
    stdout.write('Exited the game. Good bye now.\n');
    process.exit();
  }
};

setupInput();
handleUserInput();
