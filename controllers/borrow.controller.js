const db = require("../models");
const borrowModel = db.borrowModel;

// exports.findSearch = async (req, res) => {
//     var notes = await Note.find({ userId: req.body.userId });
//     res.json(notes);
// }
exports.create = async (req, res) => {
    // await borrowModel.deleteOne({ id: req.body.id });

    const newBorrow = new borrowModel({
        id: req.body.id,
        nama: req.body.nama,
        kelas: req.body.kelas,
        namaBuku: req.body.namaBuku
    })
    await newBorrow.save();
    const response = { msg: "New transaction Created" }
    res.json(response);
}
// exports.delete = async (req, res) => {
//     await Note.deleteOne({ id: req.body.id });
//     const response = { msg: "Note Deleted" }
//     res.json(response);
// }