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
    // setTimeout(function() {
    //   conn.write('Move: up');
    // }, 1000);
    // setTimeout(function() {
    //   conn.write('Move: right');
    // }, 2000)
  });

  conn.on('data', function (data) {
    console.log(data);
  });

  return conn;
}

module.exports = { connect };
