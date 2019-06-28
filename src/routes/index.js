module.exports = app => {
	app.get('/api/', (req, res) => {
		/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
		db.query('SELECT * FROM usuarios', function (err, rows) {
		    var user = rows.length && rows[0];
		  	// console.log(rows);
		    res.json(rows);
			// res.json({status: 'Inicio ASASASAS'});
		  }
		);
		/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
	});
};





// const { Router } = require('express');
// const sqlite = require('sqlite3');
// const router = Router();

// // connection to db
// // const db = new sqlite.Database('cnts.db', (err) => console.log('CONEXION DB'));

// /*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
// // require('../db/database');
// router.get('/', (req, res) => {
// 	++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 	res.json({tsxt: 'index index index index'});
// 	/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
// 	// db.all('select * from usuarios', (err, results) => {
// 	//   console.log(results);
// 	//   res.json(results);
// 	// });
// 	/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
// });
// /*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/




// module.exports = router;
