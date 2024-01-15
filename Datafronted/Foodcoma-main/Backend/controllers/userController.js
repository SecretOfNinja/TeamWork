import User from "../models/userModel.js";
import bcrypt from 'bcrypt';

// Controller to get all users
export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({})
    res.send(users);
  } catch (error) {
    next(error);
  }

  
};

// Controller to get a user by id
export const getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if(!user){
        res.status(404)
        throw new Error("No such user in the database")
    }
    res.send(user);
  } catch (error) {
    next(error);
  }
};


// Controller to create a new user
export const createUser = async (req, res, next) => {
    try {
      const { name, email, age, gender, password } = req.body;
      const salt = await bcrypt.genSalt(10);
        // Hash the password with the generated salt
      const hashedPassword = await bcrypt.hash(password, salt);
    //    Replace the plain password with the hashed one
      const newUser = await User.create({ name, email, age, gender,hashedPassword });
      res.status(201).send(newUser);
    } catch (error) {
      next(error);
    }
  };

  // Controller to delete a car by id
export const deleteUser = async (req, res, next) => {
    try {
      const { userId } = req.params;
  
      // Find the car to get the owner's information
      const user = await User.findById(userId);
      if (!user) {
         res.status(404)
        throw new Error("No such user in the db")
      }
  
      // Delete the car from the store
      await User.deleteOne({ _id: user._id });
  
      res.send(`User with id ${userId} was deleted successfully`);
    } catch (error) {
      next(error);
    }
  };

  
