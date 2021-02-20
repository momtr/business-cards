const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

app.get('/designer', (req, res) => {
    res.sendFile(__dirname + '/public/card.html');
})

app.post('/transactions', (req, res) => {
    console.log('new transaction', req.query);
});

app.get('/business-cards/print', (req, res) => {
    if(!req.query.dat)
        res.send('<style>font-famil: sans-serif;</style><h1>Error</h1><h2>Please check your link again</h2>');
    else
        res.sendFile(__dirname + '/public/print.html');
})

app.listen(8080, () => {
    console.log('app started on port 8080');
})