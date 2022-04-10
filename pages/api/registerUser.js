import dbConnect from "../../config/dbconfig";
import User from "../../models/User";

export default async function handler(req, res) {
  try {
    const { method } = req;
    await dbConnect();
    // let user = await User.create(req.body);
    res.status(200).json("user");
  } catch (er) {
    res.status(200).json({ err: er });
  }
}
