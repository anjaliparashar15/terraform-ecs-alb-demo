const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Saransh is a good boy');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
