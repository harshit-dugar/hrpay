const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const authRoute = require('./Routes/AuthRoute');
const User = require('./Models/user');

const app = express();
app.use(cors());
app.use(express.json());
require('dotenv').config();
const {MONGO_URL} = process.env;

app.use(cookieParser());
app.use(bodyParser.json());

mongoose.connect(MONGO_URL).then(() => {
    console.log('Connected to MongoDB');
}
).catch((err) => {
    console.log(err);
});

app.use('/', authRoute);

//get the all comany name from the database of that perticular user
app.get('/company', async (req, res) => {
    const { email } = req.body;
    const user = await User
        .findOne({ email });
    if (!user) {
        return res.send('User does not exist');
    }
    res.send(user.company);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});