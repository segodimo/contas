const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const routes = require('./routes/index.js');

// settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use((req, res, next) => {
	console.log(`${req.url} - ${req.method}`);
	next();
});

// routes
app.use(routes);

app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
