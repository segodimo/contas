const express = require('express');
const dblite = require('dblite');

module.exports = app => {
	
	db = dblite('src/db/cnts.db');

	// ready to go, i.e.
	// db.query('.usuarios');

	// 	db.query('SELECT * FROM usuarios', function (err, rows) {
	// 	  	console.log(rows);
	// 	    // var user = rows.length && rows[0];
	// 	    res.send('primera ruta');
	// 	  }
	// 	);

};