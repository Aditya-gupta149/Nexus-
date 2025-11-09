import mongoose
 from "mongoose";
 import { Schema } from "mongoose";

 const placeSchema= new Schema({
  placeId:{
  },
  placeLocation:{

  },
 });

 const placeModel= mongoose.model("placeModel",placeSchema);

 export default placeModel;

 console.log(generateNotificationId());

