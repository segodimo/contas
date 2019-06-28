const morgan = require('morgan');
const express = require('express');

module.exports = app => {
	// middlewares
	app.use(morgan('dev'));
	app.use(express.urlencoded({extended: false}))
	app.use(express.json());
	/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
	// settings
	app.set('port', process.env.PORT || 3000);
	/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
	/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
}