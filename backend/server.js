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
                console.log("error")
                res.send({err: err});
            }  
            // res.send(result);
            if (result.length > 0) {
                console.log("ok")
                console.log(result)
                res.send(result);
            } else {
                console.log("wrong cred")
                res.send({message: "Wrong credentials!"});
            }
        });
})

app.post('/delete-user', (req, res) => {
    const id = req.body.id;
    
    db_connection.query("DELETE FROM users WHERE id = ?", 
        [id], 
        (err, result) => {
            if (err) {
                console.log("error")
                res.send({err: err});
            }  
            if (result.length > 0) {
                console.log("ok")
                console.log(result)
                res.send(result);
        }});
});

app.post('/update-user', (req, res) => {
    const id = req.body.id;
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const fullName = req.body.fullName;
    
    db_connection.query("UPDATE users SET full_name = ?, username = ?, email = ?, password = ? WHERE id = ?", 
        [fullName, username, email, password, id], 
        (err, result) => {
            if (err) {
                console.log("error")
                res.send({err: err});
            }  
            else {
                console.log(result);
            }
            });
});

app.post('/user-data', function (req, res) {
    const id = req.body.id;
    db_connection.query("SELECT * FROM users where id = ?", 
        [id],
        (err, result) => {
            if (err) {
                res.send({err: err});
            }  
            if (result.length > 0) {
                console.log("result");
                console.log(result);
                res.send(result);
            } else {
                res.send({message: "Wrong database operation!"});
            }
        });
});

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


// data for products that have price modifications
app.get('/modifications-products', function (req, res) {

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
