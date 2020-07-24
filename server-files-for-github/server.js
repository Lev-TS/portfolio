const bodyParser = require('body-parser');
const cors = require('cors');
const errorhandler = require('errorhandler');
const express = require('express');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Serve the static files from the CRA
app.use(express.static(path.join(__dirname, 'client/build')));
// Handle any requests that don't match the api routes
app.get('*', (req, res) =>{
	res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

const apiRouter = require('./api/api');
app.use('/api', apiRouter);

app.use(errorhandler());

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log('Listening on port: ' + PORT);
});