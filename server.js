const express = require('express');
const connectDB = require('./dbConnect');
const Author = require('./models');
const app = express();
const port = 3003;

app.use(express.json());

connectDB();

app.get('/', (req, res) => {
  res.send('Hello World222222!')
})

app.post('/author', async (req, res) => {
  const author = new Author(req.body);
  await author.save();
  res.send('Author created!');
})

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`)
})