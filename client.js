const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
  });
  conn.setEncoding('utf8');

  conn.on('connect', function () {
    console.log('You are connected to the game');
    conn.write('Name: DKK');
  });

  conn.on('data', function (data) {
    console.log(data);
  });

  return conn;
}

module.exports = { connect };
