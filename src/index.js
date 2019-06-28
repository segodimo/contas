const path = require('path');
const express = require('express');
const consign = require('consign');
const dblite = require('dblite');

const app = express();

// Routes
consign({cwd: __dirname})
	.include('db.js')
	.then('config/middlewares.js')
	.then('routes')
	.then('config/boot.js')
	.into(app);



