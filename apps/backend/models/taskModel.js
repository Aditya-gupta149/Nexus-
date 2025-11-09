import mongoose from "mongoose";

import { Schema } from "mongoose";

const taskSchema= new Schema({
  taskId:{
    type:String,
    require:true,
    unique:true,
  },
  taskPriority:{
    type:Number,
    default:1,
    require:true,
  },
  taskLocation:{

  },
  taskDeadline:{

  },
  taskUrgency:{

  },

});

const taskModel=mongoose.model("taskModel",taskSchema);

export default taskModel;