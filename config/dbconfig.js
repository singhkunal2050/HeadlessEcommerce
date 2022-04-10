import mongoose from "mongoose";

function connect() {
  if (mongoose.connections[0].readyState) {
    console.log("conected already");
  } else {
    mongoose.connect(
      process.env.MONGODB_URI,
      {
        useNewUrlParser: true, 
         useUnifiedTopology: true  
      },
      () => {
        console.log("connected now");
      }
    );
  }
}

export default connect;
