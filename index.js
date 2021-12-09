const express = require('express');
const cors = require('cors');
const port = 4000;
// JSON DB file
const db = require('./rentals.json');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('Connection to server successful !');
});

// Fetching from JSON file
app.get('/properties', (req, res) => {
    res.status(200).send(db);
});

// Keanu's Endpoint
app.post('/getProperty', (req, res) => {
    propertyId = req.body.propertyId
    db.forEach(property => {
        if (property.id == propertyId) {
            res.status(200).send(property);
        }
    })
})

app.listen(port, () => console.log('Express server running on port', port));