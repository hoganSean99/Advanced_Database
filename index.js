const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const NodeCouchDB = require('node-couchdb');
const app = express();
const serveStatic = require('serve-static');


app.use(express.static('public'));



const couchdb = new NodeCouchDB({host:'34.245.65.10',
                                 protocol:'http',
                                 port:5984});

couchdb.listDatabases().then(function(dbs){
    console.log(dbs);
});

const genreValue = ''
const dbname = 'books';
const allBooks = '_design/all_books/_view/getAll_';
const reduceBooksByGenre = '_design/all_books/_view/genreBooks_';
const addToCart = '';



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//https://www.youtube.com/watch?v=R6LUMXrAoCE&t=1115s
// https://www.npmjs.com/package/node-couchdb
// Get all books in database
app.get('/', function (req, res){
    //res.send('Working!!');
    couchdb.get(dbname, allBooks).then(
        function(data){
            console.log(data.data.rows);
            res.render('books',{
                books:data.data.rows
            });
        },
        function(err){
            res.send(err);
        });
});
//https://www.youtube.com/watch?v=R6LUMXrAoCE&t=1115s
//https://www.npmjs.com/package/node-couchdb
app.get('/addBook', function (req, res){
    //res.send('Working!!');
    couchdb.get(dbname, allBooks).then(
        function(data){
            console.log(data.data.rows);
            res.render('addBook',{
                books:data.data.rows
            });
        },
        function(err){
            res.send(err);
        });
});

//
app.get('/bookFilter/:genre', function (req, res){
    const genre = req.params.genre;
    //res.send('Working!!');
    // couchdb.get(dbname, '_design/all_books/_view/genreBooks_?key=\"' + {genre:genre} + '\"').then(
    // couchdb.get(dbname, '_design/all_books/_view/genreBooks_?key="Fiction"').then(
    couchdb.get(dbname, '_design/all_books/_view/genreBooks_?key="' + genre + '"').then(
        function(data){
            console.log(data.data.rows);
            res.render('bookFilter',{
                books:data.data.rows
            });
        },
        function(err){
            res.send(err);
        });
});

app.get('/updateBook', function (req, res){
    //res.send('Working!!');
    couchdb.get(dbname, allBooks).then(
        function(data){
            console.log(data.data.rows);
            res.render('updateBook',{
                books:data.data.rows
            });
        },
        function(err){
            res.send(err);
        });
});

app.post('/books/updateBook/:id', function (req, res) {
    const id = req.params.id;
    const rev = req.body.rev;

    const book_name = req.body.book_name;
    const author = req.body.author;
    const price  = req.body.price;
    const genre  = req.body.genre;
    const stock  = req.body.stock;
    const cover  = req.body.cover;

    couchdb.update(dbname, {
        _id: id,
        _rev: rev,
        book_name: book_name,
        cover: cover,
        author: author,
        genre: genre,
        price: price,
        stock: stock
    }).then(
        function(){
            res.redirect('/updateBook');
        },
        function(err){
            res.send(err);
        });
});

// app.post('/books/bookFilter/:genre', function(req, res){
//     const genre = req.body.genre;
//
//
//     couchdb.get(dbname, '_design/all_books/_view/genreBooks_?key="' + {genre:genre} + '"').then(
//             // couchdb.get(dbname, reduceBooksByGenre).then(
//         function(data){
//             res.redirect('/bookFilter');
//         },
//         function(err){
//             res.send(err);
//         });
// });


//https://www.youtube.com/watch?v=R6LUMXrAoCE&t=1115s
//https://www.npmjs.com/package/node-couchdb
// Add book
app.post('/addBook', function (req, res)
{
    const book_name = req.body.book_name;
    const author = req.body.author;
    const price  = req.body.price;
    const genre  = req.body.genre;
    const stock  = req.body.stock;
    const cover  = req.body.cover;

    couchdb.uniqid().then(function(uid)
    {
        const id = uid[0];

        couchdb.insert('books', {
            _id: id,
            book_name: book_name,
            cover: cover,
            author: author,
            genre: genre,
            price: price,
            stock: stock
        }).then(
            function()
            {
                res.redirect('/');
            },
            function(err){
                res.send(err);
            });
    });
});

//https://www.youtube.com/watch?v=R6LUMXrAoCE&t=1115s
//https://www.npmjs.com/package/node-couchdb
app.post('/books/deleteBook/:id', function(req, res){
    const id = req.params.id;
    const rev = req.body.rev;


    couchdb.del(dbname, id, rev).then(
        function(data){
            res.redirect('/');
        },
        function(err){
            res.send(err);
        });
});




app.listen(8000, function () {
    console.log('Starting Server on Port: 8000');
});
