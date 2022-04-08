// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const dbConfig = require('../../config/dbconfig');
const mongoose = require('mongoose')
// const User = require('../../models/User'); 

export default function handler(req, res) {
  mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
  }).then(() => {
    res.status(200).json({ name: "Successfully connected to the database" });
    console.log("Successfully connected to the database");    
  }).catch(err => {
    res.status(200).json({ name: "Could not connect to the database. Exiting now..." });
    console.log('Could not connect to the database. Exiting now...', err);
  });
}
