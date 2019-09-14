require('dotenv').config()

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const errorHandler = require('./middleware/errorHandler')

const app = express();

const PORT = process.env.PORT || 3000;
const db = process.env.DB || "CrowPost";
const route = require('./routes')

mongoose.connect('mongodb://localhost:27017/' + db, { useNewUrlParser: true, useUnifiedTopology: true }, err => {
    if (err) console.log('Mongoose failed to connect to MongoDB: ' + db, err)
    else console.log(`Success connect to MongoDB: ${db}`)
})

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());

app.use('/', route);

app.use(errorHandler)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));