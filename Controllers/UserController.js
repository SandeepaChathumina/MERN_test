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

const addUsers = async (req, res, next) => {
    const { name, age, gmail, address } = req.body;

    //create a new user
    let users;
    try{
        users = new User({name, age, gmail, address});
        await users.save();

    } catch (error) {
        console.log(error);
    }

    //not insert users
    if (!users) {
        return res.status(404).send({ message: "Unable to insert user" });
    }

    return res.status(200).json({ users });
};



//get by id

const getById = async (req, res, next) => {
    const id = req.params.id;

    let user;

    try{
        user = await User.findById(id);
    }

    catch (error) {
        console.log(error);
    }

    //not insert users
    if (!user) {
        return res.status(404).send({ message: "Unable to insert user" });
    }

    return res.status(200).json({ user });

}


//update by id
const updateUser = async (req, res, next) => {
    const id = req.params.id;
    const { name, age, gmail, address } = req.body;

    let users;

    try {
        users = await User.findByIdAndUpdate(id, { name, age, gmail, address });
        users = await users.save();
    }
    catch (error) {
        console.log(error);
    }

    //not insert users
    if (!users) {
        return res.status(404).send({ message: "Unable to update user" });
    }
    return res.status(200).json({ users });
}



//delete by id
const deleteUser = async (req, res, next) => {
    const id = req.params.id;

    let user;

    try {
        user = await User.findByIdAndDelete(id);
    }
    catch (error) {
        console.log(error);
    }

    //not insert users
    if (!user) {
        return res.status(404).send({ message: "Unable to delete user" });
    }

    return res.status(200).json({ message: "User deleted successfully" });
};


exports.getAllUsers = getAllUsers;
exports.addUsers = addUsers;
exports.getById = getById;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
