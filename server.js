const express = require('express');
const apiRoutes = require('./routes/api/index.js');
const htmlRoutes = require('./routes/html/index.html');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/api');
app.use('/');

app.listen(PORT, () => {
    console.log(`Now listening on PORT: ${PORT}`);
});