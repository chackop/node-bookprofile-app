var express = require('express');

var bookRouter = express.Router();

var router = function (nav) {


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