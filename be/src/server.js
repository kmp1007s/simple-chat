const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

exports.run = () => {
  const server = app.listen(PORT, () => {
    console.log(`Listening on localhost:${PORT}`);
  });
  return server;
};
