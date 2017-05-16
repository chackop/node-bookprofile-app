var express = require('express');

var bookRouter = express.Router();

var router = function (nav) {
    var books = [
        {
            title: 'The Odyssey',
            genre: 'Greek',
            author: 'Homer',
            read: false
        },
        {
            title: 'War and Peace',
            genre: 'History',
            author: 'Tolstoy',
            read: false
        },
        {
            title: 'Moby Dick',
            genre: 'Greek',
            author: 'Melville',
            read: true
        }
    ];

    bookRouter.route('/')
        .get(function (req, res) {
            res.render('bookListView', {
                title: 'hello from books',
                nav: nav,
                books: books
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