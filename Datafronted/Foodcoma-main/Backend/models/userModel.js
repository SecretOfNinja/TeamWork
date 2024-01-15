import mongoose from "mongoose";

const userschema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Must provide a Name"],
    },
    gender:{
        type: String,
        required: true,
        enum:["male","female"]

    },
    age:{
        type: Number,
        required: true,
        min:[15, "your age should be more than 15"]
    },
    email: {
        type: String,
        required: [true, "Must provide email"],
        unique: [true, "This email is already in use"],
        match: [/^\S+@\S+\.\S+$/, "Please add a valid email"],
      },
    password:{
        type: String,
        required: true
    },
    // images: [
    //     {
    //       type: mongoose.Schema.Types.ObjectId,
    //       ref: "Image",
    //     },
    //   ],
    

})


const User = mongoose.model("User", userschema);
export default User;
