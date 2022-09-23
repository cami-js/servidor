const {Schema, model} = require("mongoose");

const UserSchema = new Schema({
    name:{
        type: String,
        min: 2,
        max:50,
        required:true
    },
    email:{
        type:String,
        min: 10,
        required:true
    },
    password:{
        type:String,
        min:8,
        max:50,
        required:true
    },
    active:{
        type:Boolean,
        default:true
    }
},{
    versionKey:false,
    timestamps:true
})

module.exports = model("Users", UserSchema)