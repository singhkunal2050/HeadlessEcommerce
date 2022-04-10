// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connect from "../../config/dbconfig"
import User from "../../models/User"

export default async function handler(req, res) {
  try{
    await connect()
    let user = await User.create(req.body)
    console.log(user) 
    res.json(user)
  }catch(err){
    console.log(err);
  }
}
