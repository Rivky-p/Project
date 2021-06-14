const User = require('../models/User.model');




const newUser = async (req, res) => {
    // console.log("******new user*******");
    try {
        let user = new User(req.body);
        await user.save();
        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ error });
    }
}


const getAllUsers = async (req, res) => {
    // console.log("******Get All*******");
    try {
        let users = await User.find();
        if (!users) {
            res.status(200).json({ message: "There are not yet registered users" });
        }
        // else res.status(200).json({ users });
        else res.status(200).send(users);
    } catch (error) {
        res.status(500).json({ error });
    }
}

module.exports = { newUser,getAllUsers }