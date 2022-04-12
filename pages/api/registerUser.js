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
                const users = await User.find({}, 'name email' );
                res.status(200).json(users);
                // res.json({ decoded });
              }
            });
          }
        });
      } 
      break;
      case "POST": {
        let user = await User.create(req.body);
        res.json({ success:true , user});
      }
      break;

    }
  } catch (err) {
    res.json({ success:false , err});
    console.log(err.message);
  }
}
