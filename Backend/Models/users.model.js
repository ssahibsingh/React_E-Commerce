import mongoose from 'mongoose'
import { Schema } from 'mongoose'

const userSchema = new Schema({
    fullName : {
        type : String, 
        require: true
    }, 
    email: {
        type: String,
        required: true,
        unique: true
      },
      password: {
        type: String,
        required: true,
        unique: true
      }
},{
    timestamps : true
}) 

export const User = mongoose.model('User', userSchema); 
