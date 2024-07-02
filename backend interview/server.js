const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
  res.status(500).send("this is only for status")
  res.status(404).send("this is only for status")
  res.render('index')
  
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
