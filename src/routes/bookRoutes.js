var express = require('express');

var bookRouter = express.Router();

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
        res.render('books', {
            title: 'hello from books',
            nav: [
                {
                    Link: '/Books', Text: 'Books'
                },
                {
                    Link: '/Authors', Text: 'Authors'
                }
            ],
            books: books
        });
    });

bookRouter.route('/single')
    .get(function (req, res) {
        res.send('Hello Single Book');
    });

module.exports = bookRouter;