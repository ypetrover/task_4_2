const express = require('express');
const app = express();
const mongoose = require('mongoose')
const router = require('./routes/routes');
const cors = require('cors');
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/familytasks', { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('mongoDB is connected'))
    .catch(err => console.log(err))

app.use(cors());
app.use(express.json())
app.use('/api', router);

app.listen(PORT, () => console.log(`the client srever running on port: ${PORT}`))