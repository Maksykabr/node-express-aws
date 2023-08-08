const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;


app.use(express.json());
app.use(express.static('views'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});


app.get('/task', (req, res) => {
    res.json("hello");
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}, use link to visit site http://localhost:${PORT}`);
});
