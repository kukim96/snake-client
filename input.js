
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

const handleUserInput = function (key) {
  const stdout = process.stdout;
  if (key === '\u0003') {
    stdout.write('Exited the game. Good bye now.\n');
    process.exit();
  }
  if (key === 'w') {
    connection.write("Move: up");
  }
  if (key === 'a') {
    connection.write("Move: left");
  }
  if (key === 's') {
    connection.write("Move: down");
  }
  if (key === 'd') {
    connection.write("Move: right")
  }
  if (key === 'f') {
    connection.write(msg + hello);
  }
};

module.exports = { setupInput };