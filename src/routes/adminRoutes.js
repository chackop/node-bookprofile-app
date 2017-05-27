var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var books = [
    {
        title: 'The Odyssey',
        genre: 'Greek',
        author: 'Homer',
        bookId: 1381,
        read: false
    },
    {
        title: 'War and Peace',
        genre: 'History',
        author: 'Tolstoy',
        bookId: 656,
        read: false
    },
    {
        title: 'Moby Dick',
        genre: 'Greek',
        bookId: 153747,
        author: 'Melville',
        read: true
    }
];
var router = function (nav) {
    adminRouter.route('/addBooks')
        .get(function (req, res) {
            var url = 'mongodb://localhost:27017/libraryApp';
            mongodb.connect(url, function (err, db) {
                var collection = db.collection('books');
                collection.insertMany(books, function (err, results) {
                    res.send(results);
                    db.close();
                });
            });
            // res.send('insert books');
        });

    return adminRouter;
};

module.exports = router;