module.exports = app => {
  app.get('/api/', (req, res) => {
    res.json({status: 'index index index index'});
  });
};




