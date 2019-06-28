module.exports = app => {
	app.get('/api/us/', (req, res) => {
		res.json({status: 'US US US US'});
	});
};