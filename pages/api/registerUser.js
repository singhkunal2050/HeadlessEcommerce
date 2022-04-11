// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connect from "../../config/dbconfig";
import User from "../../models/User";

export default async function handler(req, res) {
  const { method } = req;
  try {
    await connect();
    switch (method) {
      case "GET": {
        const users = await User.find({});
        res.json(users);
      }
      case "POST": {
        let user = await User.create(req.body);
        res.json({ success:true , user});
      }
    }
  } catch (err) {
    res.json({ success:false , err});
    console.log(err.message);
  }
}
