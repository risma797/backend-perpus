module.exports = mongoose => {
    const { Schema } = mongoose;
    const booksSchema = new Schema({
        id: {
            type: Number,
            unique: true,
            required: true
        },
        judulBuku: {
            type: String,
        },
        seriBuku: {
            type: String,
        },
        image: {
            type: String,
        },
    });

    return mongoose.model('books', booksSchema);
}