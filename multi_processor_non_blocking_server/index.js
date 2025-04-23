const app = require("express")();
const { fork } = require("child_process");

const PORT = 8001;

app.get("/is-prime", (req, res) => {
  const num = parseInt(req.query?.number || 0);

  const childProcess = fork("./is-prime.js");
  childProcess.send({ number: num });

  childProcess.on("message", (message) => res.send(message));
});

app.listen(PORT, () => console.log("Server is running at PORT ", PORT));
