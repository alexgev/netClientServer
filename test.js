const {NetClient, NetServer} = require('./index');


let server = new NetServer();
server.addRoute('testRoute', async () => {return 3 + 5});
server.listen(9000, '127.0.0.1', () => {

  let netClient = new NetClient({
    port: 9000,
    host: '127.0.0.1',
    // password: 'test'
  });
  netClient.socket.on('connect', async (socket) => {
    let result = await netClient.sendData({method: 'testRoute'});
    console.log('result', result);

    // netClient.addRoute('hello', async () => 9 + 4);
    // let result2 = await server.sendData({method: 'hello'});
    // console.log('result2', result2);
  })
});