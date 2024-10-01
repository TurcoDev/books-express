const express = require('express');
const connectDB = require('./dbConnect');
const Author = require('./models');
const app = express();
const port = 3003;

app.use(express.json());

connectDB();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/authors', async (req, res) => {
  try {
    const authors = await Author.find();
    res.send(authors);
  } catch (error) {
    console.log(error);
  }
});

app.post('/author', async (req, res) => {
  try {
    console.log(req.body);
    const author = new Author(req.body);
    await author.save();
    res.send('Author created!');
  } catch (error) {
    console.log(error);
  }
});

app.put('/author/:id', async (req, res) => {
  try {
    const author = await Author.findByIdAndUpdate(req.params.id, req.body);
    if (!author) {
      return res.status(404).send('Author not found');
    }
    res.send(author);
  } catch (error) {
    console.log(error);
  }
});

app.delete('/author/:id', async (req, res) => {
  try {
    const author = await Author.findByIdAndDelete(req.params.id);
    console.log(author);
    res.send('Author deleted!');
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`)
});