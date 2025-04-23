const app = require("express")();

const PORT = 8000;

// Middle Ware
// req, res, next magically injected by the express also adds, req.path/body etch;
app.use((req, res, next) => {
  //   console.log("Runned ", {
  //     method: req.method,
  //     path: req.path,
  //   });

  next();
});

app.get("/", (req, res) => {
  res.send("Every thing working correctly");
});

// Regex Routes
app.get(/^\/ab.*cd$/, (req, res) => {
  console.log("There goes regex Route");

  throw new Error("Testing error middleware");

  res.send("Yo Regex");
});

// Error Middleware
app.use((err, req, res, next) => {
  console.log("Error Message :: ", err?.message);

  res.status(err.status || 500).json({
    success: false,
    message: "Yowaimo",
  });
});

app.listen(PORT, () => console.log(`Server listening at PORT: ${PORT}`));
