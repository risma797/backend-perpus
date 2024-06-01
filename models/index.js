const dbConfig = require("../config/database");
const mongoose = require('mongoose');

module.exports = {
    mongoose,
    url: dbConfig.url,
    booksModel: require('./books.model')(mongoose),
    borrowModel: require('./borrow.model')(mongoose)
}