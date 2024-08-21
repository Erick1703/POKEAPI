import mongoose from "mongoose";



const typeSchema = new mongoose.Schema({
    
    name:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
    }

}, {
    timestamps:true
})


export default mongoose.model('Types',typeSchema )