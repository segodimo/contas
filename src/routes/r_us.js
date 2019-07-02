module.exports = app => {

  /*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
  app.get('/api/us/', (req, res) => {
    // res.json({status: 'index index index index'});
    db.query('SELECT * FROM tab_us', function (err, rows, fields) {
      res.json(rows);
    });
  });
  /*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

  /*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
  // teste ex. http://localhost:3000/api/us/5
  app.get('/api/us/:id', (req, res) => {
    const { id } = req.params; 
    console.log(id);
    // res.json(id);
    db.query('SELECT * FROM tab_us WHERE id = ?', [id], function (err, rows, fields) {
        if(!err){
          // console.log(rows.length);
          console.log(rows[0]);
          res.json(rows[0]);
          // res.send('XAXAXAXAXA');
        } else{
          console.log(err);
          res.send('Dados errados');
        }
    });
  });
  /*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

  /*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
  app.post('/api/us/', (req, res) => {
    // console.log(req.body);
    // res.send('received');
    const { nome, senha, email } = req.body;
    // res.send('received');
    if ( nome && senha && email ){
       console.log(req.body);
       const query = 'INSERT INTO tab_us VALUES(null, ?, ?, ?)';
       // db.query("INSERT INTO tab_us VALUES(NULL, 'tst_1', 'tst_1senha12345', 'tst_1@tst.com');");
       // db.query('INSERT INTO tab_us VALUES(null, ?, ?, ?)', ['tst_1', 'tst_1senha12345', 'tst_1@tst.com']);
       // db.query('INSERT INTO tab_us VALUES(null, ?, ?, ?)', [nome, senha, email]);
       // db.query(query, [nome, senha, email]);
       db.query(query, [nome, senha, email], (err, rows, fields) => {
        if(!err){
          res.json({Status : 'Dado Salvo'});
        } else{
          console.log(err);
        }
      });
    } else{
       res.send('Dados errados');
    }
  });
  /*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
  // teste ex. http://localhost:3000/api/us/4
  app.put('/api/us/:id', (req, res) => {
    const { senha, email } = req.body;
    const { id } = req.params;
    // console.log(id);
    // db.query("UPDATE tab_us SET nome='NOM NOM NOM', email='EMEMEMEM' WHERE id=4;");
    // db.query('UPDATE tab_us SET nome=?, email=? WHERE id = ?', ['XXXXXXXX', 'AAAAAA', 4]);
    const query = 'UPDATE tab_us SET senha=?, email=? WHERE id = ?';
    // db.query(query, [senha, email, id]);
    db.query(query, [senha, email, id], function (err, rows, fields) {
        if(!err){
          /*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
          db.query('SELECT * FROM tab_us WHERE id = ?', [id], function (err, rows, fields) {
              console.log(rows[0]);
              res.json(rows[0]);
          });
          /*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
          // res.send('OKOKOKOKOKO');
        } else{
          console.log(err);
          res.send('Dados errados');
        }
    });
  });
  /*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/






};


