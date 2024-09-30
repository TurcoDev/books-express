const express = require('express');
const connectDB = require('./dbConnect');
const app = express();
const port = 3003;

connectDB();

app.get('/', (req, res) => {
  res.send('Hello World222222!')
})

app.post('/author', (req, res) => {
  // 
})

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`)
})