const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({extended: true}));


app.use(express.static('server/public'));

let quotesData = [
    { quote: 'I\'m not going to school just for the academics - I wanted to share ideas, to be around people who are passionate about learning.', author: 'Emma Watson' },
    { quote: 'Remember there\'s no such thing as a small act of kindness. Every act creates a ripple with no logical end.', author: 'Scott Adams' },
    { quote: 'Intelligence plus character-that is the goal of true education.', author: 'Martin Luther King, Jr.' }
];

app.get(`/quotes`, (req, res) => res.send(quotesData));

app.post(`/new-quote`, (req, res) =>{
    console.log(req.body);
    
    quotesData.push(req.body);
    res.sendStatus(200);
});


app.listen (PORT, () => {
    console.log('Up and running on port', PORT);
    
});