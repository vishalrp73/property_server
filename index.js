const express = require('express');
const cors = require('cors');
const port = 4000;
const db = require('./rentals.json');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('Connection to server successful !');
});

app.get('/properties', (req, res) => {
    res.status(200).send(db);
});

app.post('/getProperty', (req, res) => {
    propertyId = req.body.propertyId
    db.forEach(property => {
        if (property.id == propertyId) {
            res.status(200).send(property);
        }
    })
})

app.listen(port, () => console.log('Express server running on port', port));