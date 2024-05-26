// const User = require('../Models/user');
// const { createSecretToken } = require('../util/SecretToken');
// const bcrypt = require('bcrypt');

// module.exports.register = async (req, res) => {
//     const { name, email, company, password } = req.body;
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//         return res.send('User already exists');
//     }
//     const user = new User({ name, email, company, password });
//     const token = createSecretToken(user._id);
//     user.key = token;
//     res.cookie('token', token, {
//         httpOnly: false
//     });
//     await user.save();
//     res.send('Success');
// }