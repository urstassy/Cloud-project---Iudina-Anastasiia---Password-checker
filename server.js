const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.listen(80, '0.0.0.0', () => {
  console.log('Server is running on http://0.0.0.0:80');
});
