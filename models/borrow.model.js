module.exports = mongoose => {
    const { Schema } = mongoose;
    const borrowSchema = new Schema({
        id: {
            type: Number,
            unique: true,
            required: true
        },
        nama: {
            type: String,
        },
        kelas: {
            type: String,
        },
        namaBuku: {
            type: String,
        }
    });

    return mongoose.model('borrow', borrowSchema);
}