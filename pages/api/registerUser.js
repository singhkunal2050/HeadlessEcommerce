// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connect from "../../config/dbconfig";
import User from "../../models/User";
import verifyToken from "../../utils/jwt-middleware";
import jwt from "jsonwebtoken"

export default async function handler(req, res) {
  const { method } = req;
  try {
    await connect();
    switch (method) {
      case "GET": {
        verifyToken(req, res , async function(){
          console.log({reqToken : req.token});
          // check if token exists
          if(!req.token) 
            res.status(403).json({error : "No Token"});
          else{
            // check if token is valid
            jwt.verify(req.token, process.env.JWT_SECRET, async function(err, decoded) {
              if (err) {
                res.json({ err });
              }else{
                // if token is valid, get users and send it back
                const users = await User.find({}, '-password' );
                // const {name , email , _id  } = decoded 
                res.status(200).json(users);
                // res.status(200).json({name , email , _id});
              }
            });
          }
        });
      } 
      break;
      case "POST": {

        let w = parseInt(((Math.random(300, 400) * 100000) % 100) + 300);
          let h = parseInt(((Math.random(300, 400) * 300000) % 200) + 400);
          let user = await User.create({
            ...req.body,
            picture: `https://source.unsplash.com/${w}x${h}?profile`,
          });
          

        // let user = await User.create(req.body);
        res.json({ success:true , user});
      }
      break;
      case "DELETE":{
        let bool = await User.deleteMany({});
        res.json({success : bool});
      }
      break;
    }
  } catch (err) {
    res.json({ success:false , err});
    console.log(err.message);
  }
}
