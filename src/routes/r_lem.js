module.exports = app => {
	app.get('/api/lem/', (req, res) => {
		res.json({status: 'LEMB LEMB LEMB LEMB'});
	});
};