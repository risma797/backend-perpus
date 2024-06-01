module.exports = app => {
    const books = require("../controllers/books.controller");
    const borrow = require("../controllers/borrow.controller");
    const router = require("express").Router();

    router.get("/books", books.findSearch);
    router.post("/books", books.findSearch);
    router.post("/borrow", borrow.create);
    router.post("/borrow", borrow.create);
    app.use("/perpus", router);
}