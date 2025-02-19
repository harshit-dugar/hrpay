const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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

module.exports = mongoose.model('User', EmployeeSchema);