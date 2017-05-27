var apikey = 'NaQyDOvoIsm8tv3SA7Ujpw';

var goodreadsService = function (id) {
    var getBookById = function (id, cb) {
        cb(null, {description: 'Our Description'});
    };
    return {
        getBookById: getBookById
    };
};

module.exports = goodreadsService;