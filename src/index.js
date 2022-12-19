const express = require("express");
const app = express();

app.use("/**", (req, res) => {
  return res.status(200).json({
    message: "Welcome to this API!",
  });
});

app.listen(8000, () => {
  console.log("===> server is listening on port ", 8000);
});
