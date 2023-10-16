const net = require('net');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const client = new net.Socket();

const PORT = 8888;
const HOST = 'localhost';

client.connect(PORT, HOST, () => {
  console.log(`Conectado ao servidor ${HOST}:${PORT}`);
  rl.question('Digite dois números inteiros separados por espaço: ', (input) => {
    client.write(input);
  });
});

client.on('data', (data) => {
  console.log(data.toString());
  rl.close();
  client.end();
});

client.on('close', () => {
  console.log('Conexão encerrada');
});
