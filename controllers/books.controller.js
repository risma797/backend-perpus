const db = require("../models");
const booksModel = db.booksModel;

exports.findSearch = async (req, res) => {
    const books = await booksModel.find({
        $or: [
            { judulBuku: new RegExp(req.query, 'i') },
            { seriBuku: new RegExp(req.query, 'i') },
            // tambahkan kondisi pencarian lainnya
        ],
    });
    res.json(books);
}
// exports.create = async (req, res) => {
//     await Note.deleteOne({ id: req.body.id });

//     const newNote = new Note({
//         id: req.body.id,
//         userId: req.body.userId,
//         title: req.body.title,
//         content: req.body.content
//     })
//     await newNote.save();
//     const response = { msg: "New Note Created" }
//     res.json(response);
// }
// exports.delete = async (req, res) => {
//     await Note.deleteOne({ id: req.body.id });
//     const response = { msg: "Note Deleted" }
//     res.json(response);
// }