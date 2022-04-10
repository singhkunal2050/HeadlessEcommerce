// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connect from "../../config/dbconfig";
import User from "../../models/User";

export default async function handler(req, res) {
  const { method } = req;
  try {
    await connect();
    switch (method) {
      case "POST": {
        const user = await User.findOne({
          email: req.body.email,
          password: req.body.password,
        });
        if (user) {
          res.json({ success: true, id: user._id });
        } else {
          res.json({ success: false });
        }
      }
    }
  } catch (err) {
    res.json({ success: false, err });
    console.log(err);
  }
}
