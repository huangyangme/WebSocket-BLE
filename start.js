const WebSocket = require('ws');
const bluetooth = require('node-bluetooth');

const wss = new WebSocket.Server({ port: 8001 });
 

const address = '00-81-f9-29-bd-7d'
const channel = 1

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  bluetooth.connect(address, channel, (err, connection) => {
    if(err) return console.error(err);
    connection.on('data', (buffer) => {

      if (buffer.length === 36) {
        console.log(buffer)
        // console.log(buffer.length)
        ws.send(buffer);
      }
    });
  });

 
  ws.send('something');
});



/**
 * find devices
 */
// device
// .on('finished',  console.log.bind(console, 'finished'))
// .on('found', function found(address, name){
//   console.log('Found: ' + address + ' with name ' + name);
// }).scan();


/**
 * find serial port channel
 */
// let address = '00-81-f9-29-bd-7d'
// let name = 'MindWave Mobile'
// device.findSerialPortChannel(address, function(channel){
//   console.log('Found RFCOMM channel for serial port on %s: ', name, channel);
  
//   // make bluetooth connect to remote device
//   bluetooth.connect(address, channel, function(err, connection){
//     console.log('channel')
//     console.log(channel)
//     if(err) return console.error(err);
//     connection.write(new Buffer('Hello!', 'utf-8'), () => {
//       console.log("wrote");
//     });
//   });
// });


