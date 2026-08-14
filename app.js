const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    service: "MEET3G AIOS API",
    status: "online",
    version: "0.1.0"
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    service: "MEET3G AIOS",
    version: "0.1.0",
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`MEET3G AIOS running on port ${PORT}`);
});
