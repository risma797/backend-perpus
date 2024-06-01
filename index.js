const express = require('express');
const cors = require('cors');
const db = require('./models');

const app = express();
const corsOptions = {
    origin: "*"
};

//register cors middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// konek ke database
// const mongooseConfig = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }

db.mongoose.connect(db.url)
    .then(() => console.log('database connected'))
    .then(() => {
        app.get("/", (req, res) => {
            const response = { msg: "API Works!" };
            res.json(response)
        })
    })
    .catch(err => {
        console.log(`gagal terhubung, ${err.message}`);
        process.exit();
    });

//Memanggil routes user
require("./routes/books.routes")(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server run on port ${PORT}`))