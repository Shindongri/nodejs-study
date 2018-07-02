const express = require('express');
const app = express();
app.use(express.static('public'));

app.get('/', (req, res) => { // Router
    res.send('Welcome to the Home ! ');
});

app.get('/login', (req, res) => {
    res.send('<h1>Please Login :)</h1>');
});

app.get('/route', (req, res) => {
   res.send('Hello Route, <img src="/nodejs.png"/>');
});


app.listen(3003, () => {
    console.log('Connected !');
});
