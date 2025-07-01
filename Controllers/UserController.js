const User = require('../Models/UserModel');

//data display part

const getAllUsers = async (req, res) => {
    let Users;
    //get all users from the database
    try {
        Users = await User.find();
        
    } catch (error) {
        console.log(error);
    }

    // if no users found
    if (!Users) {
        return res.status(404).json({ message: "No users found" });
    }

    // return users
    return res.status(200).json({ Users });
};


//data insert part

const addUsers = async (req, res) => {
    const { name, age, gmail, address } = req.body;

    //create a new user
    let users;
    try{
        users = new user({name, age, gmail, address});
        await users.save();

    } catch (error) {
        console.log(error);
    }

    //not insert users
    if (!users) {
        return res.status(404).send({ message: "Unable to insert user" });
    }

    return res.status(200).json({ users });
}

exports.getAllUsers = getAllUsers;
exports.addUsers = addUsers;

