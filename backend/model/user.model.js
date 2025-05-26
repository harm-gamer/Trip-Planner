import mongoose  from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email :{
        type : String,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
        required: true,
    },
    password :{
        type : String,
        required: true,
        minLength : [6, 'Password must be at least 6 characters long'],
    },
    trips : [{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Trip'
    }],
    wallet : {
        type : Number,
        default:0
    }

},{
    timestamps : true
})

const User  = mongoose.model('User',userSchema);

export default User;