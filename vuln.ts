// Intentionally vulnerable code for demo
   app.get('/user', (req, res) => {
       const userId = req.query.id;
       const query = "SELECT * FROM users WHERE id = '" + userId + "'";
       db.query(query, (err, results) => {
           res.json(results);
       });
   });
