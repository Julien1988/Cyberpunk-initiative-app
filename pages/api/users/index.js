import dbConnect from '../../../utils/dbConnect'
import User from '../../../models/User'

const bcrypt = require('bcrypt');


export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const users = await User.find({}) /* find all the data in our database */
        res.status(200).json({ success: true, data: users })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const user = await User.create(
          req.body
        ) /* create a new model in the database */
        const hashPassword = await bcrypt.hash(user.password, 10);
        const userName = await user.name;
        const userId = await user._id;
        const userEmail = await user.email;
        console.log(user._id)
        res.status(201).json({
          success: true, data: [{
            _id: userId,
            name: userName,
            email: userEmail,
            password: hashPassword
        }] })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}