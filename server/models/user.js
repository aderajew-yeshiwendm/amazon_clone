import mongoose from "mongoose";

const userSchema = mongoose.Schema({

    name: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        required: true,
        validate: {
            validator: (value) => {

                const re = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
                return value.match(re);
            },
            message: "enter a valid email"
        }
    },
    password: {
        type: String,
        trim: true,
        required: true,
        validate: {
            validator: (value) => {


                return value.length > 6;
            },
            message: "enter password length > 6"
        }
    },
})

const User = mongoose.model("User", userSchema);

export default User;