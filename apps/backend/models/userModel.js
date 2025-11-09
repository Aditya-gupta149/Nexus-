import mongoose from "mongoose";

import { Schema } from "mongoose";

const userSchema= new Schema({
  userName:{
    type:String,
    require:true,
    unique:true,
  },
  email:{

  },
  phoneNumber:{

  },
  age:{type:Number},
  hobbies:{
    type:[]
  },


});

const userModel=new mongoose.model("userModel",userSchema);

export default userModel;