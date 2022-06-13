const express = require("express");
require("./db/mongoose")
const Home = require("./routes/Home");
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express();
const Port = process.env.PORT || 5000;

require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(Home);


app.listen(Port, () => {
    console.log(`server is connected on port ${Port}`)
})