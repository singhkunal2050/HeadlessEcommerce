// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connect from "../../config/dbconfig";
import User from "../../models/User";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  const { method } = req;
  try {
    await connect();
    switch (method) {
      case "POST": {
        const user = await User.findOne({
          email: req.body.email,
        });
        if (user) {
          let passwordValid = await user.validatePassword(req.body.password);
          if (passwordValid) {
            let token = jwt.sign(
              {
                exp: Math.floor(Date.now() / 1000) + 60 * 60,
                data: JSON.stringify(user),
              },
              process.env.JWT_SECRET
            );
            console.log(user);
            res.json({ success: true, token: token , user : {id:user._id , name:user.name , email:user.email , picture:user.picture , phone:user.phone , pin:user.pin} });
          } else {
            res.json({ success: false, err: { message: "Invalid Password" } });
          }
        } else {
          res.json({ success: false, err: { message: "Invalid Email" } });
        }
      }
    }
  } catch (err) {
    res.json({ success: false, err });
    console.log(err);
  }
}
