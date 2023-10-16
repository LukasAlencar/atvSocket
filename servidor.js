const net = require('net');

const server = net.createServer((socket) => {
  console.log('Cliente conectado');

  socket.on('data', (data) => {
    const [num1, num2] = data.toString().split(' ').map(Number);
    const result = calculateSumOfEvenNumbers(num1, num2);

    socket.write(`A soma dos números pares entre ${num1} e ${num2} é: ${result}\n`);
  });

  socket.on('end', () => {
    console.log('Cliente desconectado');
  });
});

const calculateSumOfEvenNumbers = (num1, num2) => {
  let sum = 0;
  for (let i = num1; i <= num2; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
};

const PORT = 8888;
server.listen(PORT, () => {
  console.log(`Servidor TCP está ouvindo na porta ${PORT}`);
});
