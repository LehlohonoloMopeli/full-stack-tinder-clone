import express from "express";
import mongoose from "mongoose";
import Cards from "./dbCards.js";
import Cors from "cors";


// App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = 'mongodb+srv://lehlohonolompl:I6DtpgHuvEhPh316@cluster0.zxf3n.mongodb.net/tinder_db? \
    retryWrites=true&w=majority'


// Middlewares
app.use(express.json());
app.use(Cors());


// DB Config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})


// API Endpoints
app.get("/", (req, res) => res.status(200).send("Hello Node!"));

app.post("/tinder_cards", (req, res) => {
    const dbCard = req.body;                    // Use it to get data from client side
    Cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    });
});

app.get("/tinder_cards", (req, res) => {
    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    });
});


// Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`));
