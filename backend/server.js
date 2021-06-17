const express = require('express');
const cors = require('cors');
const app = express();
const db_connection = require('./models/dbConnection');
const PORT = process.env.PORT || 3001;

// const routes = require('./routes');
// app.use('/', routes);

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/signup', (req, res) => {
    const username = req.body.username;
    const full_name = req.body.full_name;
    const email = req.body.email;
    const password = req.body.password;
    
    db_connection.query("INSERT INTO users (full_name, username, email, user_password) VALUES (?, ?, ?, ?)", 
        [full_name, username, email, password], 
        (err) => {console.log(err)});
})

app.post('/signin', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    
    db_connection.query("SELECT * FROM users WHERE email = ? AND user_password = ?", 
        [email, password], 
        (err, result) => {
            if (err) {
                res.send({err: err});
            }  
            else if (result.length > 0) {
                res.send(result);
            } else {
                res.send({message: "Wrong credentials!"});
            }
        });
})

// data for analysis step
app.post('/data-analysis', (req, res) => {

    const productId = req.body.productId;

    db_connection.query("SELECT * FROM leroy_prices_history WHERE product_id = ?",
        [productId], 
        (err, result) => {
            if (err) {
                res.send({err: err});
            }  
            if (result.length > 0) {
                res.send(result);
            } else {
                res.send({message: "Wrong database operation!"});
            }
        });
});

// data for search bar
app.get('/search-products', function (req, res) {

    db_connection.query("SELECT * FROM leroy_products where category='Materiale constructii'", 
        (err, result) => {
            if (err) {
                res.send({err: err});
            }  
            if (result.length > 0) {
                res.send(result);
            } else {
                res.send({message: "Wrong database operation!"});
            }
        });
});



app.listen(PORT, () => {
    console.log(`App started on http://localhost:${PORT}`);
});
