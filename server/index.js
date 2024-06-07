const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cookieParser = require("cookie-parser");

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

//email case insensitive
const EmployeeSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        lowercase: true
    },
    company: String,
    password: String,
    key:{
        type: String,
        unique: true
    }
});
EmployeeSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 12);
});
const User = mongoose.model('User', EmployeeSchema);

app.post('/register', async (req, res) => {
    //make the uniquekey valid for 3 minutes and then expire it    
    const uniqueKey = Math.random().toString(36).substring(2,12);
    const { name, email, company, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.send('User already exists');
    }
    const user = new User({
        name,
        email,
        company,
        password,
        key: uniqueKey
    });
    await user.save();
    res.send('Success');    
});

app.post('/login',async (req,res)=>{
    try{
        const {email,password,key} = req.body;
        if(!email || !password || !key){
            return res.send('Please enter all the fields');
        }
        const user = await User.findOne({email});
        if(!user){
            return res.send('User does not exist');
        }
        const isMatch = await bcrypt.compare(password, user.password);
        console.log(isMatch,key === user.key);
        if(!isMatch || key !== user.key){
            return res.send('Invalid credentials');
        }
        res.send('Success');                
    }catch(err){
        console.log(err);        
    }    
})

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