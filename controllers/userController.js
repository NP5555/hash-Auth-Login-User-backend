// controllers/userController.js
const bcrypt = require('bcrypt');

const users = [];

const getUsers = (req, res) => {
    res.json(users);
};

const addUser = async (req, res) => {
    try {
        const salt = await bcrypt.genSalt();
        const hashedpassword = await bcrypt.hash(req.body.password, salt);
        const user = { name: req.body.name, hashedpassword };
        users.push(user);
        res.status(200).send("User Added");
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const loginUser = async (req, res) => {
    const user = users.find(user => user.name === req.body.name);
    if (user == null) {
        return res.status(400).send("User Not Found");
    }
    try {
        if (await bcrypt.compare(req.body.password, user.hashedpassword)) {
            res.send("User successfully logged in");
        } else {
            res.send("Invalid Password");
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = { getUsers, addUser, loginUser };
