var express = require('express');

var bookRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var router = function (nav) {


    bookRouter.route('/')
        .get(function (req, res) {
            var url = 'mongodb://localhost:27017/libraryApp';
            mongodb.connect(url, function (err, db) {
                var collection = db.collection('books');
                collection.find({}).toArray(function (err, results) {
                    res.render('bookListView', {
                        title: 'hello from books',
                        nav: nav,
                        books: results
                    });
                });
            });
        });

    bookRouter.route('/:id')
        .get(function (req, res) {
            var id = req.params.id;
            res.render('bookView', {
                title: 'hello from books',
                nav: nav,
                book: books[id]
            });
        });

    return bookRouter;
};
module.exports = router;