const User = require('../Models/user');
const { createSecretToken } = require('../util/SecretToken');
const bcrypt = require('bcrypt');

module.exports.register = async (req, res) => {
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
}

module.exports.login = async (req, res) => {
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
        res.json({
            message: 'Success',
            company: user.company
        })
    }catch(err){
        console.log(err);        
    }
}