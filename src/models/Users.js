import mongoose from 'mongoose';
const { Schema } = mongoose;


const userSchema = new Schema({
    firstName: String,
    lastName : String, 
    email: { type:String,  required:'un email est obligatoire :)', unique:true },
    password:{ type:String },
    admin: Boolean,
    refreshToken:String,
    clubs: [Schema.Types.Mixed]
},
{ timestamps: true }
);

const userModel = mongoose.model('users',userSchema)

export default userModel