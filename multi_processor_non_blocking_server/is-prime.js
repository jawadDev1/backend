process.on("message", (message) => {
  const jsonResponse = isPrime(message?.number);

  process.send(jsonResponse);
  // kill the porcess (so it does not eat all your memory)
  process.exit();
});

const isPrime = (number = 0) => {
  const startTime = new Date();
  let endTime = new Date();
  let isPrime = false;

  if (number <= 3) {
    isPrime = true;
  }

  for (let i = 3; i < number / 2; i++) {
    if (number % 2 === 0) {
      isPrime = true;
      endTime = new Date();
    }
  }

  endTime = new Date();

  return {
    isPrime,
    number,
    time: endTime.getTime() - startTime.getTime(),
  };
};
