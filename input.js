const { MOVE_UP_KEY, MOVE_LEFT_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY } = require('./constants');

let connection;

const msg = "Say: ";
const hello = "Hello!";

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', function (key) {
    handleUserInput(key);
  });
  return stdin;
};
let func;

const handleUserInput = function (key) {
  const stdout = process.stdout;
  const interval = function(key) {
    func = setInterval(() => {
      connection.write(key);
    }, 50)
  }
  if (key === '\u0003') {
    stdout.write('Exited the game. Good bye now.\n');
    process.exit();
  }
  if (key === 'w') {
    clearInterval(func);
    interval(MOVE_UP_KEY);
  }
  if (key === 'a') {
    clearInterval(func);
    interval(MOVE_LEFT_KEY);
  }
  if (key === 's') {
    clearInterval(func);
    interval(MOVE_DOWN_KEY);
  }
  if (key === 'd') {
    clearInterval(func);
    interval(MOVE_RIGHT_KEY);
  }
  if (key === 'f') {
    connection.write(msg + hello);
  }
};

module.exports = { setupInput };