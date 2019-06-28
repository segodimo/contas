module.exports = app => {
	app.get('/api/val/', (req, res) => {
		res.json({status: 'VAL VAL VAL VAL'});
	});
};
